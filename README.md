# Decision Referee

A deterministic, rule-based tool for comparing REST, GraphQL, and gRPC under explicit constraints — explaining trade-offs without recommendations.

## Overview

Decision Referee is a constraint-driven comparison tool for API architectures. It evaluates REST, GraphQL, and gRPC under explicitly selected constraints. The system explains trade-offs instead of recommending a single "best" option. Final architectural judgment remains with the user.

## Key Features

- **Constraint-Driven Evaluation**: Users select explicit constraints (Team Expertise, Scale Expectation, Time-to-Market, Risk Tolerance)
- **Deterministic Rules**: 26 declarative rules map constraints to architectural consequences
- **Full Transparency**: Every output traces to explicit, human-readable rules
- **No Recommendations**: The tool illuminates trade-offs without declaring winners

## Philosophy

> "The referee does not play the game. The referee ensures the game is played fairly."

Decision Referee embodies impartiality. It does not advocate. It does not simplify. It presents structured reasoning and trusts the user to decide.

## Technologies Compared

| Technology | Description |
|------------|-------------|
| **REST** | Resource-oriented API style built on standard HTTP methods |
| **GraphQL** | Query-based API approach with strongly typed schema |
| **gRPC** | High-performance RPC framework using binary protocols |

## Constraints

| Constraint | Description |
|------------|-------------|
| **Team Expertise** | Beginner / Intermediate / Expert |
| **Scale Expectation** | Small / Medium / Large |
| **Time-to-Market** | Fast / Balanced |
| **Risk Tolerance** | Low / Medium / High |

## Architecture

The system is built on a layered architecture:

```
src/referee/
├── types.js      # Constraint model and validation
├── rules.js      # 26 declarative decision rules
├── engine.js     # Pure, deterministic evaluation function
└── index.js      # Public API
```

### Guarantees

- **Deterministic**: Same input always produces same output
- **Explainable**: Every evaluation traces to explicit rules
- **Neutral**: No option is favored by default or by design
- **Transparent**: All triggered rules are tracked and displayed

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
decision-referee/
├── .Kiro/
│   ├── PRD.md              # Product Requirements Document
│   └── ARCHITECTURE.md     # Architecture Specification
├── docs/
│   ├── PRD.md              # Product Requirements Document
│   └── ARCHITECTURE.md     # Architecture Specification
├── src/
│   ├── referee/            # Core decision engine
│   │   ├── types.js
│   │   ├── rules.js
│   │   ├── engine.js
│   │   └── index.js
│   └── components/         # React UI components
│       ├── About/
│       ├── Home/
│       └── Referee/
├── public/
└── package.json
```

## Documentation

- [Product Requirements Document (PRD)](./docs/PRD.md)
- [Architecture Specification](./docs/ARCHITECTURE.md)

## Tech Stack

- React 19
- Vite
- Framer Motion
- CSS Modules

## Design Principles

1. **No AI, ML, or probabilistic logic** — Pure rule-based evaluation
2. **No scoring or ranking** — Trade-offs, not verdicts
3. **No recommendations** — The user decides
4. **Full transparency** — Every output is traceable

## License

MIT

---

*This project was created as part of the Week 6 Capstone Challenge: "The Architect"*
