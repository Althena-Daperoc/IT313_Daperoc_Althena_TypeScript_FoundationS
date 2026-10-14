# IT313 - Mobile Programming: Laboratory 3
## TypeScript Foundations for React Native

### Problem Description
This project ports the Enrollment Eligibility Checker utility from Laboratory 2 (JavaScript) into a fully-typed TypeScript program[cite: 2]. It ensures type safety, catches errors early at compile-time, and introduces core TypeScript mechanisms required for building robust React Native applications.

### Applied TypeScript Concepts & Why
- **Strict Mode (`tsconfig.json`)**: Ensures rigorous type-checking, preventing implicit `any` errors[cite: 3].
- **Interfaces (`Enrollee`, `EligibilityReport`)**: Define strict data shapes for objects to ensure consistent structure across records.
- **Optional Properties (`remarks?: string`)**: Allows conditional properties (like consultation notes) to exist only for students on probation[cite: 2, 3].
- **Enums (`EnrollmentStatus`)**: Restricts status values strictly to predefined members (`Passing`, `Probation`) rather than error-prone raw strings[cite: 2, 3].
- **Modules & Imports/Exports**: Organizes code cleanly by separating utility functions (`gradeUtils.ts`) from execution logic[cite: 3].
- **Async/Await & Promises (`Promise<Enrollee[]>`, `try/catch`)**: Simulates asynchronous API calls to a registrar backend safely with error handling[cite: 3].
- **Union Types & Narrowing (`string | number`)**: Demonstrates handling variables that can accept multiple types safely using `typeof` checks[cite: 3].
- **Generics (`groupBy<T>`)**: Creates reusable functions capable of handling any data shape dynamically (e.g., grouping report entries by status)[cite: 3].
- **Array Methods (`.map()`, `.reduce()`, `.filter()`)**: Cleanly transforms and aggregates data arrays functionally[cite: 3].

### How to Run
1. Install dependencies:
   ```bash
   npm install