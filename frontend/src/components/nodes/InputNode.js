import { BaseNode } from "./BaseNode";
import { useState } from "react";
import { IO_TYPE_OPTIONS } from "../../constants/nodeTypes";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      id={id}
      title="Input"
      outputs={[{ id: "value" }]}
      type="input"
      data={data}
    >
      <div>
        <input
          className="node-input"
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          placeholder="Input name"
        />
        <select
          className="node-select"
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          {IO_TYPE_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </BaseNode>
  );
};