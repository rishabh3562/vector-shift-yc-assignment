import json
import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Ping": "Pong"}

def test_valid_dag():
    pipeline = {
        "nodes": [
            {"id": "1", "type": "input"},
            {"id": "2", "type": "transform"},
            {"id": "3", "type": "output"}
        ],
        "edges": [
            {"source": "1", "target": "2"},
            {"source": "2", "target": "3"}
        ]
    }
    
    response = client.post(
        "/pipelines/parse",
        json={"pipeline": json.dumps(pipeline)}
    )
    
    assert response.status_code == 200
    result = response.json()
    assert result["is_dag"] == True
    assert result["num_nodes"] == 3
    assert result["num_edges"] == 2

def test_invalid_dag_cycle():
    pipeline = {
        "nodes": [
            {"id": "1", "type": "input"},
            {"id": "2", "type": "transform"}
        ],
        "edges": [
            {"source": "1", "target": "2"},
            {"source": "2", "target": "1"}
        ]
    }
    
    response = client.post(
        "/pipelines/parse",
        json={"pipeline": json.dumps(pipeline)}
    )
    
    assert response.status_code == 200
    assert response.json()["is_dag"] == False

def test_empty_pipeline():
    pipeline = {
        "nodes": [],
        "edges": []
    }
    
    response = client.post(
        "/pipelines/parse",
        json={"pipeline": json.dumps(pipeline)}
    )
    
    assert response.status_code == 200
    result = response.json()
    assert result["num_nodes"] == 0
    assert result["num_edges"] == 0
    assert result["is_dag"] == True

def test_invalid_json():
    response = client.post(
        "/pipelines/parse",
        json={"pipeline": "invalid json"}
    )
    
    assert response.status_code == 400
    assert "detail" in response.json()

def test_invalid_edge_reference():
    pipeline = {
        "nodes": [{"id": "1", "type": "input"}],
        "edges": [{"source": "1", "target": "2"}]  # Node 2 doesn't exist
    }
    
    response = client.post(
        "/pipelines/parse",
        json={"pipeline": json.dumps(pipeline)}
    )
    
    assert response.status_code == 400
    assert "Edge references non-existent node" in response.json()["detail"]

def test_complex_dag():
    pipeline = {
        "nodes": [
            {"id": "1", "type": "input"},
            {"id": "2", "type": "transform"},
            {"id": "3", "type": "merge"},
            {"id": "4", "type": "output"},
            {"id": "5", "type": "input"}
        ],
        "edges": [
            {"source": "1", "target": "2"},
            {"source": "2", "target": "3"},
            {"source": "5", "target": "3"},
            {"source": "3", "target": "4"}
        ]
    }
    
    response = client.post(
        "/pipelines/parse",
        json={"pipeline": json.dumps(pipeline)}
    )
    
    assert response.status_code == 200
    result = response.json()
    assert result["is_dag"] == True
    assert result["num_nodes"] == 5
    assert result["num_edges"] == 4