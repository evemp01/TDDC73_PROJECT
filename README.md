# TDDC73 Project — Interaction SDK

This repository contains the implementation of an interaction component SDK. The SDK provides reusable UI interaction components and a demo application showcasing usage. The project is developed with React Native (Expo) and written in TypeScript.

## Features

The SDK (`ui-sdk`) includes the following interaction patterns and components:

- **Account Registration**: A reusable form component for collecting user data with configurable required fields.

- **Password Strength Meter**: A stand-alone component for evaluating and displaying password strength based on custom rules.

- **Layout Components**: `Row` and `Column` components for managing flexbox-based spacing and alignment.

- **Button Component**: A flexible button system with multiple variants (`default`, `outline`, `link`).

- **Card Component**: Structured containers with headers, titles, and content areas.

## Repository Structure

```bash
TDDC73_PROJECT/
├── app/                     # Demo application (Expo Router)
├── services/                # Testing setup and global services
├── ui-sdk/                  # The interaction SDK package
│   ├── src/
│   │   ├── components/      # UI Components
│   │   │   ├── AccountRegistration/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Layout/
│   │   │   └── PasswordStrengthMeter/
│   │   └── index.ts         # Public SDK exports
│   └── package.json         # SDK-specific configuration
├── package.json             # Root project configuration and dependencies
├── tsconfig.json            # TypeScript configuration
└── app.json                 # Expo configuration
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)

### Installation

**Clone the repository:**

```bash
git clone https://github.com/evemp01/TDDC73_PROJECT.git
cd TDDC73_PROJECT
```

**Install dependencies for the whole project:**

```bash
npm install
```

### Running the App

Start the Expo development server to see the components in action:

```bash
npx expo start
```

## Using the SDK Components

- **[Account Registration Documentation](ui-sdk/src/components/AccountRegistration/README.MD)**

- **[Password Strength Meter Documentation](ui-sdk/src/components/PasswordStrengthMeter/README.MD)**

- **[Button Documentation](ui-sdk/src/components/Button/README.MD)**

- **[Card Documentation](ui-sdk/src/components/Card/README.MD)**

- **[Layout Documentation](ui-sdk/src/components/Layout/README.MD)**

## Testing (Optional)

The project uses Jest and React Native Testing Library. Tests are located alongside their respective components.

To run the test suite:

```bash
npm test
```
