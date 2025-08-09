import { useState } from "react";
import { toast } from "react-toastify";
import { useStore } from "../../store/pipelineStore";
import { submitPipeline } from "../../services/api";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (nodes.length === 0) {
      toast.warning("Please add some nodes to your pipeline first!");
      return;
    }

    setIsLoading(true);
    try {
      const data = await submitPipeline({ nodes, edges });

      toast.success(
        <div>
          <h4>Pipeline Analysis</h4>
          <p>Number of Nodes: {data.num_nodes}</p>
          <p>Number of Edges: {data.num_edges}</p>
          <p>Is DAG: {data.is_dag ? "✅ Yes" : "❌ No"}</p>
        </div>,
        {
          autoClose: 5000,
        }
      );
    } catch (error) {
      toast.error("Error submitting pipeline: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      disabled={isLoading}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "12px 24px",
        fontSize: "16px",
        background: "linear-gradient(45deg, #b089f6, #5809d8)",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: isLoading ? "wait" : "pointer",
        opacity: isLoading ? 0.7 : 1,
        boxShadow: "0 4px 12px rgba(176, 137, 246, 0.3)",
        transition: "all 0.3s ease",
        transform: isLoading ? "scale(0.98)" : "scale(1)",
        zIndex: 1000,
      }}
      onMouseEnter={(e) => {
        if (!isLoading) {
          e.target.style.background = "linear-gradient(45deg, #5809d8, #2f0676)";
          e.target.style.transform = "scale(1.05) translateY(-2px)";
          e.target.style.boxShadow = "0 6px 16px rgba(176, 137, 246, 0.4)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isLoading) {
          e.target.style.background = "linear-gradient(45deg, #b089f6, #5809d8)";
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 12px rgba(176, 137, 246, 0.3)";
        }
      }}
    >
      {isLoading ? "Processing..." : "Submit Pipeline"}
    </button>
  );
};