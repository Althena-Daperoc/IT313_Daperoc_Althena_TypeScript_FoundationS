// index.ts
import getStatus, { computeAverage, EnrollmentStatus } from "./gradeUtils.js";

// Define the Enrollee interface
interface Enrollee {
  name: string;
  prelim: number;
  midterm: number;
  final: number;
}

// Define the EligibilityReport interface
interface EligibilityReport {
  name: string;
  average: number;
  status: EnrollmentStatus;
  remarks?: string; // Optional property for probation students
}

// Starter data
const enrollees: Enrollee[] = [
  { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
  { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
  { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
  { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
  { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 }
];

// Simulated async registrar API call with try/catch handling
async function getEnrollees(): Promise<Enrollee[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(enrollees);
    }, 500);
  });
}