# TDDC73 Project — Interaction SDK

This repository contains the implementation of an interaction component SDK. The SDK provides reusable UI interaction components and a demo application showcasing usage. The project is developed with React Native (Expo) and written in TypeScript.

## Features

The SDK includes the following interaction patterns:

**Account Registration Component**
A reusable form component for collecting user data (e.g. name, date of birth, password).  
Each field can be configured as required or optional.

**Password Strength Meter**
A stand-alone component for evaluating and displaying password strength.  
Password rules are configurable and feedback is shown to the user.

## Repository Structure

```
TDDC73_PROJECT/
├── app/
├── components/
│   ├── AccountRegistration/
│   └── PasswordStrengthMeter/
├── services/
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
└── expo.config.js
```

## Getting Started

### Prerequisites

Install dependencies:

- Node.js (v16+ recommended)

### Install

Clone the repository:

```bash
git clone https://github.com/evemp01/TDDC73_PROJECT.git
cd TDDC73_PROJECT
```

#### Install dependencies

```bash
npm install
```

#### Running the App

Start the Expo development server:

```bash
npx expo start
```

## Using the SDK Components

Using the [PasswordStrength component](components/PasswordStrengthMeter/README.MD).

Using the [AccountRegistration component](components/AccountRegistration/README.MD).

## Testing (Optional)

UI tests demonstrating component correctness should be placed in a /tests directory.
