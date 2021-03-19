const example_appointment = {
  actual_end: null,
  actual_start: null,
  clinical_data: {
    plans: [],
    summary: "Test to see if this works",
    complaints: [
      {
        complaint_name: "test complaint 1",
        complaint_description: "test complaint description",
      },
    ],
    assessments: [],
    physical_exam: [],
  },
  end: "2021-02-15T22:00:00Z",
  id: 1,
  patient: 1,
  patient_display_name: "Jack Robles",
  provider: 2,
  provider_display_name: "Nurse Howard",
  scheduled_on: "2021-02-15T07:50:55.743111Z",
  scheduling_note: "",
  start: "2021-02-15T20:30:00Z",
  status: "scheduled",
  type: "first_appointment",
};
export default example_appointment;
