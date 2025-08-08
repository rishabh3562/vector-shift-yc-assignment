import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { createNodeConfig, NODE_TYPES } from './nodeFactory';

const MergeNode = ({ id, data, selected }) => {
  const [mergeType, setMergeType] = useState(data?.mergeType || 'concat');
  const [separator, setSeparator] = useState(data?.separator || ' ');

  const nodeConfig = createNodeConfig(NODE_TYPES.MERGE, {
    title: 'Merge',
    height: mergeType === 'concat' ? 100 : 80
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
          Merge Type:
        </label>
        <select
          value={mergeType}
          onChange={(e) => setMergeType(e.target.value)}
          style={{
            width: '100%',
            padding: '4px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '11px',
            marginBottom: '8px'
          }}
        >
          <option value="concat">Concatenate</option>
          <option value="array">Create Array</option>
          <option value="object">Merge Objects</option>
        </select>
        
        {mergeType === 'concat' && (
          <div>
            <label style={{ display: 'block', marginBottom: '2px', fontSize: '10px', color: '#666' }}>
              Separator:
            </label>
            <input
              type="text"
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              placeholder="Separator"
              style={{
                width: '100%',
                padding: '4px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '11px'
              }}
            />
          </div>
        )}
      </div>
    </BaseNode>
  );
};

export default MergeNode;