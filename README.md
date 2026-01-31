# Primo

Pre-interview coding challenge - A TypeScript utility for merging sorted arrays.

## Features

- Merge multiple sorted arrays into a single sorted array
- Supports arrays sorted in ascending and descending order
- Full TypeScript support with strict type checking
- Pure TypeScript configuration (ESLint, Jest, Prettier)

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## Installation

```bash
npm install
```

## Run

```bash
npm run build && npm start
```

## Development

```bash
npm run dev
```

## Test

```bash
npm run test:coverage
open coverage/index.html # Check coverage
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run in development mode with hot reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run the compiled application |
| `npm test` | Run test suite |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Check code quality with ESLint |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run clean` | Remove dist and coverage folders |

## Project Structure

```
primo/
├── src/
│   ├── app.ts              # Application entry point
│   └── helper/
│       ├── merge.ts        # Merge utility function
│       └── merge_test.ts   # Test suite
├── dist/                   # Compiled output
├── eslint.config.ts        # ESLint configuration
├── jest.config.ts          # Jest configuration
├── prettier.config.ts      # Prettier configuration
├── tsconfig.json           # TypeScript configuration
├── package.json
└── README.md
```

## Usage

```typescript
import { merge } from './helper/merge.js'

const ascending1 = [1, 3, 5]
const ascending2 = [2, 4, 6]
const descending = [9, 7, 5]  // Will be processed in reverse

const result = merge(ascending1, ascending2, descending)
// Result: [1, 2, 3, 4, 5, 5, 6, 7, 9]
```

## License

ISC
