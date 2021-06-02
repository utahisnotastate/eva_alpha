import PatientActions from "../../Patient/patientcomponents/patientactions/patientactions";
import AppointmentHistory from "../../Patient/patientcomponents/appointmenthistory/appointmenthistory";
import PatientRequests from "../../Patient/patientcomponents/patientrequests/patientrequests";
import Insurance from "../../Patient/patientcomponents/insurance/insurance";
import Demographics from "../../Patient/patientcomponents/demographics/demographics";
import Allergies from "../../Patient/patientcomponents/allergies/allergies";
import Medications from "../../Patient/patientcomponents/medications/medications";
import Diagnosis from "../../Patient/patientcomponents/diagnosis/diagnosis";
import Documentation from "../../Patient/patientcomponents/documentation/documentation";
import PatientForms from "../../Patient/patientcomponents/patientforms/patientforms";
import MedicalHistory from "../../Patient/patientcomponents/medicalhistory/medicalhistory";
import SurgicalHistory from "../../Patient/patientcomponents/surgicalhistory/surgicalhistory";
import FamilyMedicalHistory from "../../Patient/patientcomponents/familymedicalhistory/familymedicalhistory";
import SocialHistory from "../../Patient/patientcomponents/socialhistory/socialhistory";
import PatientReports from "../../Patient/patientcomponents/reports/patientreports";

const appointmentpatientroutes = [
  {
    label: "Appointments",
    path: "/appointmenthistory",
    component: AppointmentHistory,
  },
  {
    label: "Requests",
    path: "/patientrequests",
    component: PatientRequests,
  },
  {
    label: "Insurance",
    path: "/insurance",
    component: Insurance,
  },
  {
    label: "Demographics",
    path: "/demographics",
    component: Demographics,
  },
  {
    label: "Allergies",
    path: "/allergies",
    component: Allergies,
  },
  {
    label: "Medications",
    path: "/medications",
    component: Medications,
  },
  {
    label: "Diagnosis",
    path: "/diagnosis",
    component: Diagnosis,
  },
  {
    label: "Documentation",
    path: "/documentation",
    component: Documentation,
  },
  {
    label: "Forms",
    path: "/patientforms",
    component: PatientForms,
  },
  {
    label: "Medical History",
    path: "/medicalhistory",
    component: MedicalHistory,
  },
  {
    label: "Surgical History",
    path: "/surgicalhistory",
    component: SurgicalHistory,
  },
  {
    label: "Family Medical History",
    path: "/familymedicalhistory",
    component: FamilyMedicalHistory,
  },
  {
    label: "Social History",
    path: "/socialhistory",
    component: SocialHistory,
  },
  {
    label: "Reports",
    path: "/patientreports",
    component: PatientReports,
  },
];

export default appointmentpatientroutes;
