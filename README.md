# NX Monorepo with pnpm

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A comprehensive monorepo setup using NX build system with pnpm package manager. This workspace includes multiple applications and shared libraries organized for scalability and maintainability.

## 🏗️ Project Structure

```
nxrepo/
├── apps/
│   ├── web/                 # React web application (Frontend)
│   ├── web-e2e/            # Cypress E2E tests for web app
│   └── api/                 # Node.js Express API (Backend)
├── libs/
│   ├── ui-components/       # Shared React UI components
│   ├── shared-core/         # Core utilities and helpers
│   ├── shared-types/        # TypeScript type definitions
│   └── shared-config/       # Configuration management
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
# Clone the repository
git clone https://github.com/afiksnyk/nxrepo.git
cd nxrepo

# Install dependencies
pnpm install

# Build all projects
pnpm build

# Run tests
pnpm test
```

## 📦 Applications

### Web Application (`apps/web`)
- **Type**: React application with Vite
- **Port**: 4200
- **Features**: 
  - Modern React with TypeScript
  - Vite for fast development and building
  - CSS modules for styling
  - Jest for unit testing
  - Uses shared UI components

```bash
# Development
pnpm nx serve web

# Build
pnpm nx build web

# Test
pnpm nx test web
```

### API Application (`apps/api`)
- **Type**: Node.js Express server
- **Port**: 3000
- **Features**:
  - Express.js framework
  - TypeScript support
  - RESTful API endpoints
  - Health check endpoint
  - Error handling middleware

```bash
# Development
pnpm nx serve api

# Build
pnpm nx build api

# Test
pnpm nx test api
```

### E2E Tests (`apps/web-e2e`)
- **Type**: Cypress end-to-end tests
- **Target**: Web application
- **Features**: Automated browser testing

```bash
# Run E2E tests
pnpm nx e2e web-e2e
```

## 📚 Libraries

### UI Components (`libs/ui-components`)
Shared React components library with:
- **Button**: Various styles and sizes
- **Input**: Form inputs with validation
- **Card**: Content containers
- **LoadingSpinner**: Loading indicators

```typescript
import { Button, Input, Card } from '@nxrepo/ui-components';

// Usage
<Button variant="primary" size="large">Click me</Button>
<Input label="Email" type="email" required />
<Card title="My Card">Content here</Card>
```

### Shared Core (`libs/shared-core`)
Core utilities and helper functions:
- Email validation
- Debounce functionality
- String formatting
- Date utilities

```typescript
import { validateEmail, debounce, formatMessage } from '@nxrepo/shared-core';

// Usage
const isValid = validateEmail('user@example.com');
const debouncedFn = debounce(myFunction, 300);
const message = formatMessage('Hello World');
```

### Shared Types (`libs/shared-types`)
TypeScript type definitions shared across applications:
- User interfaces
- API response types
- Common entity types
- Event types

```typescript
import type { User, ApiResponse, FilterOptions } from '@nxrepo/shared-types';

// Usage
const user: User = { id: '1', name: 'John', email: 'john@example.com' };
const response: ApiResponse<User[]> = { success: true, data: users };
```

### Shared Config (`libs/shared-config`)
Configuration management utilities:
- Database configuration
- API configuration  
- Authentication settings
- Environment validation

```typescript
import { validateConfig, defaultConfig } from '@nxrepo/shared-config';

// Usage
const config = validateConfig({
  ...defaultConfig,
  database: { host: 'localhost', port: 5432 }
});
```

## 🛠️ Development Commands

### Global Commands
```bash
# Build all projects
pnpm build

# Test all projects
pnpm test

# Lint all projects
pnpm lint

# Format code
pnpm format

# Start web development server
pnpm dev

# View project dependency graph
pnpm graph
```

### Project-Specific Commands
```bash
# Build specific project
pnpm nx build <project-name>

# Test specific project
pnpm nx test <project-name>

# Serve specific project
pnpm nx serve <project-name>

# Lint specific project
pnpm nx lint <project-name>
```

### Available Projects
- `web` - React web application
- `api` - Node.js API server
- `web-e2e` - E2E tests
- `ui-components` - UI components library
- `shared-core` - Core utilities
- `shared-types` - Type definitions
- `shared-config` - Configuration utilities

## 🧪 Testing Strategy

### Unit Tests
- **Frontend**: Jest + React Testing Library
- **Backend**: Jest + Supertest
- **Libraries**: Jest

### E2E Tests
- **Tool**: Cypress
- **Target**: Full application workflows
- **Coverage**: Critical user journeys

### Running Tests
```bash
# All tests
pnpm test

# Specific project tests
pnpm nx test web
pnpm nx test api

# E2E tests
pnpm nx e2e web-e2e

# Test with coverage
pnpm nx test web --coverage
```

## 📊 Project Dependencies

View the dependency graph to understand how projects relate:

```bash
pnpm nx graph
```

### Dependency Flow
```
apps/web → libs/ui-components → libs/shared-core
         → libs/shared-types
         → libs/shared-config

apps/api → libs/shared-core
         → libs/shared-types
         → libs/shared-config
```

## 🔧 Adding New Projects

### Generate New Application
```bash
# React app
pnpm nx g @nx/react:app my-app --directory=apps/my-app

# Node.js app
pnpm nx g @nx/node:app my-api --directory=apps/my-api
```

### Generate New Library
```bash
# React library
pnpm nx g @nx/react:lib my-components --directory=libs/my-components

# TypeScript library
pnpm nx g @nx/js:lib my-utils --directory=libs/my-utils
```

## 🚀 Deployment

### Development
```bash
# Start all services
pnpm dev        # Web app on :4200
pnpm nx serve api  # API on :3000
```

### Production Build
```bash
# Build all projects
pnpm build

# Build outputs:
# - Web: dist/apps/web/
# - API: dist/apps/api/
# - Libraries: dist/libs/*/
```

### Deployment Options

#### Web Application
- **Static Sites**: Netlify, Vercel, GitHub Pages
- **CDN**: AWS CloudFront, Azure CDN
- **Containers**: Docker, Kubernetes

#### API Application
- **Cloud**: AWS Lambda, Google Cloud Functions
- **Containers**: Docker, Kubernetes
- **Traditional**: VPS, dedicated servers

## 🔗 API Endpoints

The API server provides the following endpoints:

```
GET  /                 # Welcome message
GET  /api/health       # Health check
GET  /api/users        # Get all users
POST /api/users        # Create new user
```

### Example API Usage
```bash
# Health check
curl http://localhost:3000/api/health

# Get users
curl http://localhost:3000/api/users

# Create user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

## 🤝 Contributing

1. **Setup**: `pnpm install`
2. **Development**: Create feature branch
3. **Testing**: `pnpm test` (ensure all tests pass)
4. **Building**: `pnpm build` (ensure all projects build)
5. **Linting**: `pnpm lint` (fix any issues)
6. **Formatting**: `pnpm format`
7. **Submit**: Create pull request

### Code Standards
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Jest for testing
- Conventional commits

## 📁 Configuration Files

### Key Configuration Files
- `nx.json` - NX workspace configuration
- `package.json` - Dependencies and scripts
- `tsconfig.base.json` - TypeScript configuration
- `pnpm-workspace.yaml` - pnpm workspace setup
- `jest.preset.js` - Jest testing configuration

### Environment Variables
```bash
# API Configuration
PORT=3000
HOST=localhost

# Database (when implemented)
DATABASE_URL=postgresql://localhost:5432/nxrepo
```

## 📚 Learn More

### Documentation Links
- [NX Documentation](https://nx.dev) - Build system and monorepo tools
- [pnpm Workspaces](https://pnpm.io/workspaces) - Package manager
- [React Documentation](https://react.dev) - Frontend framework
- [Express.js](https://expressjs.com) - Backend framework
- [Vite Documentation](https://vitejs.dev) - Build tool
- [Cypress](https://cypress.io) - E2E testing

### NX Features Used
- **Project Graph**: Visualize dependencies
- **Affected**: Run tasks only on changed projects
- **Caching**: Speed up builds and tests
- **Code Generation**: Scaffolding new projects
- **Task Orchestration**: Parallel execution

## 🔗 Useful Links

- [NX Console Extension](https://nx.dev/nx-console) - IDE integration
- [NX Cloud](https://nx.app) - CI/CD and remote caching
- [NX Community Discord](https://go.nx.dev/community)
- [Repository Issues](https://github.com/afiksnyk/nxrepo/issues)

---

## 📈 Project Status

- ✅ **Web Application**: React app with Vite
- ✅ **API Server**: Express.js with TypeScript  
- ✅ **UI Components**: Shared component library
- ✅ **Shared Libraries**: Types, config, and utilities
- ✅ **Testing Setup**: Unit and E2E tests
- ✅ **Build System**: NX with pnpm
- 🔄 **Mobile App**: Coming soon
- 🔄 **Database Integration**: Coming soon
- 🔄 **Authentication**: Coming soon

This monorepo provides a solid foundation for building scalable applications with shared code and consistent tooling.