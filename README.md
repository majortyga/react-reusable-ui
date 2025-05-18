# GCI Reusable UI Components for React

A modern, accessible, and customizable React component library built with React and Tailwind CSS.

# Installation

Ensure you have TailwindCSS installed on your computer, check [Tailwind Website](https://tailwindcss.com/) for latest installation guide

if you're using nextjs, Tailwind CSS is pre-installed with it.

Then copy and paste the below command to your cli

```bash
npm install @majordev/react-reusable-ui
```

Edit or create your tailwind.config.js file and add the following configuration:

```bash
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@majordev/react-reusable-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Quick Start

```tsx
import { Button, Input, Toast } from "@majordev/react-reusable-ui";

function App() {
  return (
    <div>
      <Input placeholder="Enter your name" />
      <Button>Click me</Button>
    </div>
  );
}
```

## Available Components

- Alert
- Avatar
- Badge
- Breadcrumbs
- Button
- Calendar
- Card
- Carousel
- Collapse
- CodeBlock
- CodeEditor
- Input
- List
- Modal
- Pagination
- Popover
- Progress
- Rating
- Select
- Skeleton
- Slider
- Spinner
- StatCard
- Stepper
- Table
- Tabs
- TagInput
- Timeline
- Toast
- Tooltip
- Upload

## Documentation

For detailed documentation, examples, and API references, visit our documentation site:

[UI Documentation](https://ui.gci.ng)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [MajorDev](https://github.com/majortyga/)
