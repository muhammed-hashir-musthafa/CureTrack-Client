export interface StatsResponse {
  totalCompletedConsultations: number;
  totalScheduledConsultations: number;
  totalCancelledConsultations: number;
}

export interface Activity {
  message: string;
  time: string;
}

export interface Appointment {
  patientName: string;
  type: "completed" | "scheduled" | "cancelled";
  scheduledTime: string;
}

export interface DoctorProfileForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  gender: string;
  qualification: string;
  primarySpecialization: string;
  medicalRegistrationNumber: string;
  IMAId: string;
  medicalUniversity: string;
  yearsOfExperience: string;
  hospitalName: string;
  hospitalAddress: string;
  consultationFees: string;
  document: File | null;
  medicalRegistrationCertificate: File | null;
  consentTreatment: boolean;
  consentDisclosure: boolean;
  privacyPolicy: boolean;
  dateOfBirth: string;
}
