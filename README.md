# Next Multipurpose

A multipurpose web application built with **Next.js**, featuring a blog and an online store.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Testing:** Vitest, React Testing Library, Playwright

## Getting Started

### Prerequisites

- Node.js (22 LTS recommended)
- npm

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root and configure the required environment variables.

```env
API_URL=
```

Adjust the variables according to your project configuration.

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

Run the following commands:

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run code linting |
| `npm run test` | Run unit tests and coverage |
| `npm run test:e2e` | Run end-to-end tests |

*Note: Make sure these scripts are configured in `package.json` before using them.*

## Testing

This project uses:

- **Vitest** for unit testing.
- **React Testing Library** for component testing.
- **Playwright** for end-to-end testing.

Run unit tests:

```bash
npm run test
```

Run E2E tests:

```bash
npm run test:e2e
```

## Project Structure

```text
.
├── app/              # Application routes and pages
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
├── lib/              # Shared utilities and configurations
├── services/         # API and data fetching services
├── stores/           # Client-side state management
├── types/            # TypeScript type definitions
├── public/           # Static assets
└── tests/            # Test configurations and utilities
```

*The structure may evolve as the application grows.*

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vitest Documentation](https://vitest.dev)
- [Playwright Documentation](https://playwright.dev)
