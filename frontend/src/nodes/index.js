// Node exports for easy importing
export { default as BaseNode } from './BaseNode';
export { default as InputNode } from './InputNode';
export { default as OutputNode } from './OutputNode';
export { default as TextNode } from './TextNode';
export { default as LLMNode } from './LLMNode';
export { default as TransformNode } from './TransformNode';
export { default as MergeNode } from './MergeNode';
export { default as FilterNode } from './FilterNode';
export { default as ValidationNode } from './ValidationNode';
export { default as TemplateNode } from './TemplateNode';

// Factory exports
export * from './nodeFactory';

// Node type mapping for React Flow
export const nodeTypes = {
  input: InputNode,
  output: OutputNode,
  text: TextNode,
  llm: LLMNode,
  transform: TransformNode,
  merge: MergeNode,
  filter: FilterNode,
  validation: ValidationNode,
  template: TemplateNode
};