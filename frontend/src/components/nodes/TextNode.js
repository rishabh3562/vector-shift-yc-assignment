import { BaseNode } from "./BaseNode";
import { useState, useEffect, useRef } from "react";
import { extractVariables } from "../../utils/nodeHelpers";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    const vars = extractVariables(currText);
    setVariables(vars);
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables.map((v) => ({ id: v }))}
      outputs={[{ id: "output" }]}
      type="text"
      data={data}
    >
      <textarea
        ref={textareaRef}
        className="node-input"
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        placeholder="Enter text with {{variables}}"
        style={{
          minHeight: "80px",
          resize: "vertical",
        }}
      />
      {variables.length > 0 && (
        <div className="variables-list">Variables: {variables.join(", ")}</div>
      )}
    </BaseNode>
  );
};