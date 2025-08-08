import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { createNodeConfig, NODE_TYPES } from './nodeFactory';

const FilterNode = ({ id, data, selected }) => {
  const [filterType, setFilterType] = useState(data?.filterType || 'contains');
  const [filterValue, setFilterValue] = useState(data?.filterValue || '');
  const [caseSensitive, setCaseSensitive] = useState(data?.caseSensitive || false);

  const nodeConfig = createNodeConfig(NODE_TYPES.FILTER, {
    title: 'Filter',
    height: 120
  });

  return (
    <BaseNode
      id={id}
      data={data}
      selected={selected}
      nodeConfig={nodeConfig}
    >
      <div>
        <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', color: '#666' }}>
          Filter Type:
        </label>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          style={{
            width: '100%',
            padding: '4px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '11px',
            marginBottom: '6px'
          }}
        >
          <option value="contains">Contains</option>
          <option value="equals">Equals</option>
          <option value="startsWith">Starts With</option>
          <option value="endsWith">Ends With</option>
          <option value="regex">Regex</option>
        </select>
        
        <input
          type="text"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          placeholder="Filter value"
          style={{
            width: '100%',
            padding: '4px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '11px',
            marginBottom: '6px'
          }}
        />
        
        <label style={{ display: 'flex', alignItems: 'center', fontSize: '10px', color: '#666' }}>
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
            style={{ marginRight: '4px' }}
          />
          Case Sensitive
        </label>
      </div>
    </BaseNode>
  );
};

export default FilterNode;