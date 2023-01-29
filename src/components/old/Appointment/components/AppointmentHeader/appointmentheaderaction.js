import React from 'react'
import AppointmentHeaderButton from '../Buttons/AppointmentButtons/appointmentHeaderButton'

export default function AppointmentHeaderAction(props) {
	// Determines which component to render based on the status propert
	function handleEncounterEnd() {}

	function handleEncounterBegin() {}

	switch (props.appointment.status) {
		case 'in_progress':
			return (
				<AppointmentHeaderButton
					text={`End Encounter`}
					buttonAction={handleEncounterEnd}
				/>
			)
		default:
			return (
				<AppointmentHeaderButton
					text={`Begin Appointment`}
					buttonAction={handleEncounterBegin}
				/>
			)
	}
}
