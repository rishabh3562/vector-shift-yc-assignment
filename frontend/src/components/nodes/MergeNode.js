import { BaseNode } from "./BaseNode";
import { useState } from "react";
import { MERGE_OPTIONS } from "../../constants/nodeTypes";

export const MergeNode = ({ id, data }) => {
  const [mergeType, setMergeType] = useState(data?.mergeType || "concat");

  return (
    <BaseNode
      id={id}
      title="Merge"
      inputs={[{ id: "input1" }, { id: "input2" }]}
      outputs={[{ id: "output" }]}
      type="merge"
      data={data}
    >
      <select
        className="node-select"
        value={mergeType}
        onChange={(e) => setMergeType(e.target.value)}
      >
        {MERGE_OPTIONS.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </BaseNode>
  );
};