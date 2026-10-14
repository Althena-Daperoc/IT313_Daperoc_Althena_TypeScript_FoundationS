// gradeUtils.ts

// Define the EnrollmentStatus enum as required
export enum EnrollmentStatus {
  Passing = "PASSING",
  Probation = "PROBATION"
}

// Named export: compute average of three grades
export function computeAverage(prelim: number, midterm: number, final: number): number {
  return (prelim + midterm + final) / 3;
}

// Default export: determine status based on average
export default function getStatus(average: number): EnrollmentStatus {
  return average >= 75 ? EnrollmentStatus.Passing : EnrollmentStatus.Probation;
}