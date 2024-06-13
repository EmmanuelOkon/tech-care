// interface Systolic {
//   levels: string;
//   value: number;
// }

// interface Diastolic {
//     levels: string;
//     value: number;
// }

// interface Temperature {
//   levels: string;
//   value: number;
// }

// interface BloodPressure {
//   diastolic: Diastolic[];
//   systolic: Systolic[];
// }

// interface LabResults {

// }

// interface DiagnosisHistory {
//   month: string;
//   year: number;
//   blood_pressure: BloodPressure[];
//   respiratory_rate: [];
//   temperature: Temperature[];
//   heart_rate: [];
// }

// interface DiagnosticList {
//   description: string;
//   name: string;
//   status: string
// }

// interface Patient {
//   name: string;
//   age: number;
//   date_of_birth: string;
//   diagnosis_history: [];
//   profile_picture: string;
//   phone_number: string;
//   lab_results: [];
//   insurance_type: string;
//   gender: string;
//   emergency_contact: string;
//   diagnostic_list: DiagnosticList[];
// }

interface BloodPressure {
  value: number;
  levels: string;
}

interface HeartRate {
  value: number;
  levels: string;
}

interface RespiratoryRate {
  value: number;
  levels: string;
}

interface Temperature {
  value: number;
  levels: string;
}

interface DiagnosisHistory {
  month: string;
  year: number;
  blood_pressure: {
    systolic: BloodPressure;
    diastolic: BloodPressure;
  };
  heart_rate: HeartRate;
  respiratory_rate: RespiratoryRate;
  temperature: Temperature;
}

interface Diagnostic {
  name: string;
  description: string;
  status: string;
}

export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistory[];
  diagnostic_list: Diagnostic[];
  lab_results: string[];
}