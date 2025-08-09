# Pipeline Builder

A modern, interactive pipeline builder application built with React and React Flow. Create visual workflows by connecting different types of nodes in an intuitive drag-and-drop interface.


## 🚀 Features

### Core Functionality
- **Visual Pipeline Creation**: Drag and drop nodes to build complex workflows
- **Node Types**: Support for 9 different node types including Input, Output, LLM, Text processing, and more
- **Interactive Connections**: Connect nodes with smooth, animated edges
- **Real-time Validation**: Live feedback on pipeline structure and validity
- **Pipeline Analysis**: Submit pipelines for DAG (Directed Acyclic Graph) validation

### User Experience
- **Dark/Light Theme**: Toggle between beautiful dark and light themes
- **Interactive Tutorial**: First-time user walkthrough
- **Responsive Design**: Works seamlessly across different screen sizes
- **Modern UI**: Glassmorphism effects, smooth animations, and contemporary design
- **Toast Notifications**: Real-time feedback for user actions

### Node Types
1. **Input Node** 📥 - Pipeline entry points with configurable input types
2. **Output Node** 📤 - Define pipeline outputs with custom names and types
3. **LLM Node** 🤖 - Large Language Model processing with system and prompt inputs
4. **Text Node** 📝 - Text processing with variable substitution support
5. **Merge Node** 🔗 - Combine multiple inputs (concat, join, zip operations)
6. **Filter Node** 🔍 - Filter data based on custom conditions
7. **Template Node** 📄 - Create dynamic templates with variable placeholders
8. **Validation Node** ✅ - Validate data against custom rules
9. **Transform Node** 🔄 - Data transformation (uppercase, lowercase, number conversion, etc.)

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Flow Library**: React Flow 11.8.3 for node-based interface
- **State Management**: Zustand 5.0.2 for lightweight state management
- **Animation**: Framer Motion 11.13.1 for smooth animations
- **Styling**: CSS-in-JS with CSS custom properties for theming
- **Notifications**: React Toastify 10.0.6
- **Validation**: AJV 8.17.1 with keywords support


## 📸 Screenshots
![WhatsApp Image 2025-08-09 at 23 52 34_a38a1749](https://github.com/user-attachments/assets/460fe502-af7f-4798-9b0a-77f03877079e)
![WhatsApp Image 2025-08-09 at 23 54 31_d7ee1657](https://github.com/user-attachments/assets/98072c7d-0114-42a2-8d28-11ff90e5c72e)
![WhatsApp Image 2025-08-09 at 23 56 31_45f58633](https://github.com/user-attachments/assets/0b03ec92-75b4-40b6-80cc-3dd931d4fffe)
![WhatsApp Image 2025-08-09 at 23 57 20_b06bd079](https://github.com/user-attachments/assets/29e2a7a5-8589-4320-bcb8-4a12e12e9e16)
![WhatsApp Image 2025-08-09 at 23 57 29_d02ab020](https://github.com/user-attachments/assets/c5ce7091-c44a-433b-b297-404c178ca155)


## 📦 Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Setup
1. Clone the repository:
```bash
git clone https://github.com/rishabh3562/vector-shift-yc-assignment
cd pipeline-builder
```

2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

The application will open in your browser at `http://localhost:3000`.

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── nodes/          # Individual node components
│   │   │   ├── BaseNode.js # Base node component with common functionality
│   │   │   ├── InputNode.js
│   │   │   ├── OutputNode.js
│   │   │   ├── LLMNode.js
│   │   │   ├── TextNode.js
│   │   │   ├── MergeNode.js
│   │   │   ├── FilterNode.js
│   │   │   ├── TemplateNode.js
│   │   │   ├── ValidationNode.js
│   │   │   └── TransformNode.js
│   │   ├── ui/             # UI components
│   │   │   ├── DraggableNode.js
│   │   │   ├── N8NToolbar.js
│   │   │   ├── PipelineToolbar.js
│   │   │   ├── SubmitButton.js
│   │   │   ├── Tutorial.js
│   │   │   └── ThemeToggle.js
│   │   └── workspace/
│   │       ├── PipelineCanvas.js
│   │       └── nodeTypes.js
│   ├── constants/          # Application constants
│   │   ├── nodeTypes.js    # Node type definitions and options
│   │   ├── theme.js        # Theme colors and configuration
│   │   └── ui.js          # UI constants and tutorial steps
│   ├── hooks/             # Custom React hooks
│   │   ├── useTheme.js    # Theme management
│   │   └── useTutorial.js # Tutorial state management
│   ├── services/          # API services
│   ├── store/             # Zustand store configuration
│   ├── styles/            # CSS files
│   │   ├── global.css     # Global styles and theme variables
│   │   └── tutorial.css   # Tutorial-specific styles
│   ├── utils/             # Utility functions
│   ├── App.jsx           # Main application component
│   └── index.js          # Application entry point
├── package.json
└── README.md
```

## 🎨 Theming

The application supports both dark and light themes with a comprehensive color system:

### Color Palette
- **Primary**: `#b089f6` (Violet)
- **Secondary**: `#5809d8` (Purple)
- **Tertiary**: `#2f0676` (Dark Purple)
- **Success**: `#28a745` (Green)
- **Warning**: `#ffc107` (Yellow)
- **Error**: `#dc3545` (Red)

### Theme Variables
The application uses CSS custom properties for theming:
- `--bg-color`: Background color
- `--text-color`: Primary text color
- `--card-bg`: Card background
- `--border-color`: Border color
- `--primary-color`: Primary accent color

## 🔧 Configuration

### Node Types
Add new node types by:
1. Adding the type to `constants/nodeTypes.js`
2. Creating a new node component in `components/nodes/`
3. Registering it in `components/workspace/nodeTypes.js`

### Tutorial Steps
Customize the tutorial by modifying `TUTORIAL_STEPS` in `constants/ui.js`.

### API Integration
The application includes a submit button that sends pipeline data to a backend API. Configure the API endpoint in `services/api.js`.

## 🎯 Usage

### Creating a Pipeline
1. **Add Nodes**: Click the '+' button or drag nodes from the sidebar
2. **Configure Nodes**: Click on any node to configure its properties
3. **Connect Nodes**: Drag from output handles to input handles
4. **Validate**: Click "Submit Pipeline" to validate your workflow

### Node Configuration
Each node type has specific configuration options:
- **Input/Output**: Set names and data types
- **Text/Template**: Use `{{variable}}` syntax for dynamic content
- **Transform**: Choose from various transformation options
- **Validation**: Add custom validation rules
- **Merge**: Select merge strategy (concat, join, zip)

### Keyboard Shortcuts
- **Delete**: Remove selected nodes/edges
- **Esc**: Deselect all items
- **Space + Drag**: Pan the canvas
- **Mouse Wheel**: Zoom in/out

## 🚀 Development

### Available Scripts
- `npm start`: Start development server
- `npm build`: Build for production
- `npm test`: Run test suite
- `npm eject`: Eject from Create React App

### Adding New Node Types
1. Create component in `components/nodes/NewNode.js`:
```javascript
import { BaseNode } from "./BaseNode";

export const NewNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="New Node"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "output" }]}
      type="new"
      data={data}
    >
      {/* Node content */}
    </BaseNode>
  );
};
```

2. Add to node types registry
3. Update constants and styling

### State Management
The application uses Zustand for state management. The main store handles:
- Nodes and edges
- Node/edge operations (add, remove, update)
- Connection handling
- ID generation

## 📱 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13.1+
- Edge 80+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React Flow](https://reactflow.dev/) for the excellent node-based interface library
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Zustand](https://github.com/pmndrs/zustand) for lightweight state management
- Design inspiration from n8n and other modern workflow tools

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Include browser version and steps to reproduce

---

Built with ❤️ using React and modern web technologies.
