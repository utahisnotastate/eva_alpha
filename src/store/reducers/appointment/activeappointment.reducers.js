const initdata = {
  actual_end: null,
  actual_start: null,
  clinical_data: {
    plans: [],
    summary: "",
    complaints: [],
    assessments: [],
    physical_exam: [],
  },
  end: "",
  id: "",
  patient: "",
  patient_display_name: "",
  provider: "",
  provider_display_name: "",
  scheduled_on: "",
  scheduling_note: "",
  start: "",
  status: "",
  type: "",
};

export function details(state = initdata, action) {}
