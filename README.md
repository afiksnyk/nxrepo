# NX Monorepo with pnpm

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A modern monorepo setup using NX build system with pnpm package manager. This workspace includes a React frontend application and a shared utilities library.

## 🏗️ Project Structure

```
nxrepo/
├── frontend/                 # React application with Vite
├── libs/
│   └── shared-utils/        # Shared utilities library
├── package.json             # Root package.json with workspace scripts
├── pnpm-workspace.yaml      # pnpm workspace configuration
└── nx.json                  # NX workspace configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18.18.0+ (recommended: 20.19+ or 22.12+)
- pnpm 8.0.0+

### Installation

```bash
# Install dependencies
pnpm install

# Build all projects
pnpm build

# Run tests
pnpm test
```

## 📦 Available Projects

### Frontend Application
- **Path**: `frontend/`
- **Type**: React application
- **Bundler**: Vite
- **Features**: Routing, CSS styling, Jest testing, Cypress E2E

### Shared Utils Library
- **Path**: `libs/shared-utils/`
- **Type**: TypeScript library
- **Features**: Common utilities (email validation, debounce, formatting)

## 🛠️ Development Commands

### Build Commands
```bash
# Build all projects
pnpm build

# Build specific project
pnpm nx build frontend
pnpm nx build shared-utils
```

### Development Commands
```bash
# Start development server for frontend
pnpm dev
# or
pnpm nx serve frontend

# Run tests for all projects
pnpm test

# Run tests for specific project
pnpm nx test frontend
pnpm nx test shared-utils
```

### Code Quality
```bash
# Lint all projects
pnpm lint

# Format code with Prettier
pnpm format

# Visualize project dependencies
pnpm graph
```

## 🧪 Testing

The workspace includes comprehensive testing setup:

- **Unit Tests**: Jest for both frontend and library
- **E2E Tests**: Cypress for frontend application
- **Test Coverage**: Available for all projects

```bash
# Run all tests
pnpm nx run-many -t test

# Run tests with coverage
pnpm nx test shared-utils --coverage
```

## 📊 Project Graph

View the dependency graph of your workspace:

```bash
pnpm nx graph
```

This will open a visual representation of how your projects depend on each other.

## 🔧 Adding New Projects

### Generate a new React application:
```bash
pnpm nx g @nx/react:app my-new-app --bundler=vite
```

### Generate a new library:
```bash
pnpm nx g @nx/js:lib my-new-lib
```

### Generate a new Node.js application:
```bash
pnpm nx g @nx/node:app my-api
```

## 📁 Workspace Configuration

### Key Files
- `nx.json` - NX workspace configuration
- `pnpm-workspace.yaml` - pnpm workspace setup
- `tsconfig.base.json` - Base TypeScript configuration
- `jest.preset.js` - Jest configuration preset

### Package Manager
This workspace uses **pnpm** for efficient dependency management with workspace support.

## 🚀 Deployment

### Build for Production
```bash
# Build all projects for production
pnpm build

# Build output locations:
# - Frontend: dist/frontend/
# - Shared Utils: dist/libs/shared-utils/
```

### Frontend Deployment
The React frontend builds to static files that can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages

## 🤝 Contributing

1. Install dependencies: `pnpm install`
2. Make your changes
3. Run tests: `pnpm test`
4. Build projects: `pnpm build`
5. Format code: `pnpm format`

## 📚 Learn More

- [NX Documentation](https://nx.dev)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

## 🔗 Useful Links

- [NX Console Extension](https://nx.dev/nx-console) - IDE integration
- [NX Cloud](https://nx.app) - CI/CD and caching
- [NX Community Discord](https://go.nx.dev/community)