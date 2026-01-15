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
├── app/                   # Demo Expo app using the SDK
├── components/            # Custom SDK components
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
```
git clone https://github.com/evemp01/TDDC73_PROJECT.git
cd TDDC73_PROJECT
```

#### Install dependencies:
```
npm install
```

#### Running the App:
Start the Expo development server:
```
npx expo start
```

## Using the SDK Components
Example: Importing and using the PasswordStrength component:
```
import { PasswordStrengthMeter } from "../PasswordStrengthMeter/PasswordStrengthMeter";

const passwordRules = [
  {
    id: "length",
    label: "At least 8 characters",
    test: (password: string) => password.length >= 8,
  },
  {
    id: "digit",
    label: "Contains a number",
    test: (password: string) => /\d/.test(password),
  },
];

const [password, setPassword] = useState("");

<PasswordStrengthMeter
  password={password}
  rules={passwordRules}
/>
```

Example: Using the AccountRegistration form:
```
import { AccountRegistration } from '../components/AccountRegistration';
import { RegistrationField } from '../components/AccountRegistration/types';

const fields: RegistrationField[] = [
  {
    id: "username1",
    label: "Username",
    placeholder: "Choose a username",
    type: "text",
    required: true,
  },
  {
    id: "dob1",
    label: "Date of Birth",
    type: "date",
  },
  {
    id: "p1",
    label: "Password",
    placeholder: "Choose your password",
    type: "password",
    required: true,
  },
];

<AccountRegistration
  fields={fields}
  passwordRules={rules}
  onSubmit={(values) => console.log(values)}
/>
```
The three "types" of fields that can be used are "text", "password" or "date".

## Testing (Optional)
UI tests demonstrating component correctness should be placed in a /tests directory.
ida.liu.se
