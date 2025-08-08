import { BaseNode } from "./BaseNode";
import { useState } from "react";
import { OUTPUT_TYPE_OPTIONS } from "../../constants/nodeTypes";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      id={id}
      title="Output"
      inputs={[{ id: "value" }]}
      type="output"
      data={data}
    >
      <div>
        <input
          className="node-input"
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          placeholder="Output name"
        />
        <select
          className="node-select"
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          {OUTPUT_TYPE_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </BaseNode>
  );
};