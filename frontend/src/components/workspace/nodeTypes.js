import { InputNode } from "../nodes/InputNode";
import { LLMNode } from "../nodes/LLMNode";
import { OutputNode } from "../nodes/OutputNode";
import { TextNode } from "../nodes/TextNode";
import { FilterNode } from "../nodes/FilterNode";
import { TemplateNode } from "../nodes/TemplateNode";
import { ValidationNode } from "../nodes/ValidationNode";
import { TransformNode } from "../nodes/TransformNode";
import { MergeNode } from "../nodes/MergeNode";
import { NODE_TYPES } from "../../constants/nodeTypes";

export const nodeTypes = {
  [NODE_TYPES.INPUT]: InputNode,
  [NODE_TYPES.LLM]: LLMNode,
  [NODE_TYPES.OUTPUT]: OutputNode,
  [NODE_TYPES.TEXT]: TextNode,
  [NODE_TYPES.FILTER]: FilterNode,
  [NODE_TYPES.TEMPLATE]: TemplateNode,
  [NODE_TYPES.VALIDATION]: ValidationNode,
  [NODE_TYPES.TRANSFORM]: TransformNode,
  [NODE_TYPES.MERGE]: MergeNode,
};