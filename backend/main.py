from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, List, Optional
import json
from collections import defaultdict

app = FastAPI(
    title="Pipeline Validator API",
    description="API for validating pipeline configurations and DAG structures",
    version="1.0.0"
)

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_dag(nodes: List[Dict], edges: List[Dict]) -> bool:
    """
    Validates if the given graph is a Directed Acyclic Graph (DAG).
    
    Args:
        nodes: List of node dictionaries containing node information
        edges: List of edge dictionaries containing connection information
    
    Returns:
        bool: True if the graph is a DAG, False otherwise
    """
    # Create adjacency list
    graph = defaultdict(list)
    for edge in edges:
        graph[edge['source']].append(edge['target'])
    
    # Track visited nodes
    visited = set()
    temp = set()
    
    def has_cycle(node: str) -> bool:
        """
        Detects cycles in the graph using DFS.
        
        Args:
            node: Current node being checked
            
        Returns:
            bool: True if a cycle is detected, False otherwise
        """
        if node in temp:
            return True
        if node in visited:
            return False
            
        temp.add(node)
        
        # Check all neighbors
        for neighbor in graph[node]:
            if has_cycle(neighbor):
                return True
                
        temp.remove(node)
        visited.add(node)
        return False
    
    # Check each node for cycles
    node_ids = [node['id'] for node in nodes]
    for node_id in node_ids:
        if node_id not in visited:
            if has_cycle(node_id):
                return False
    
    return True

@app.get('/')
def read_root():
    """Health check endpoint."""
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: str = Form(...)):
    """
    Parses and validates a pipeline configuration.
    
    Args:
        pipeline: JSON string containing nodes and edges
        
    Returns:
        Dict containing:
        - num_nodes: Number of nodes in the pipeline
        - num_edges: Number of edges in the pipeline
        - is_dag: Whether the pipeline forms a DAG
        
    Raises:
        HTTPException: If pipeline data is invalid
    """
    try:
        pipeline_data = json.loads(pipeline)
        nodes = pipeline_data.get('nodes', [])
        edges = pipeline_data.get('edges', [])
        
        # Validate node references in edges
        node_ids = {node['id'] for node in nodes}
        for edge in edges:
            if edge['source'] not in node_ids or edge['target'] not in node_ids:
                raise HTTPException(
                    status_code=400,
                    detail="Edge references non-existent node"
                )
        
        return {
            'num_nodes': len(nodes),
            'num_edges': len(edges),
            'is_dag': is_dag(nodes, edges)
        }
    except json.JSONDecodeError:
        raise HTTPException(
            status_code=400,
            detail="Invalid JSON format"
        )
    except KeyError as e:
        raise HTTPException(
            status_code=400,
            detail=f"Missing required field: {str(e)}"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Server error: {str(e)}"
        )