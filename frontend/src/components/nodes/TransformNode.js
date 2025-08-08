import { BaseNode } from "./BaseNode";
import { useState } from "react";
import { TRANSFORM_OPTIONS } from "../../constants/nodeTypes";

export const TransformNode = ({ id, data }) => {
  const [transform, setTransform] = useState(data?.transform || "");

  return (
    <BaseNode
      id={id}
      title="Transform"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "output" }]}
      type="transform"
      data={data}
    >
      <select
        className="node-select"
        value={transform}
        onChange={(e) => setTransform(e.target.value)}
      >
        {TRANSFORM_OPTIONS.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </BaseNode>
  );
};