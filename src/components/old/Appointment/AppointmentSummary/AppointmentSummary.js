import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { getAppointmentComplaints } from '../../../../api/appointment.api'

export default function AppointmentSummary(props) {
	let { id } = useParams()
	const summaryvalues = {
		age: '33',
		gender: 'male',
		complaints: ['abdominal pain', 'eye pain'],
	}
	const complaints = useSelector(
		(state) => state.appointment.appointmentcomplaints
	)
	const findings = useSelector(
		(state) => state.appointment.appointmentfindings
	)
	const assessments = useSelector(
		(state) => state.appointment.assessments.assessments
	)

	const physicalexamfindings = () => {
		console.log(findings)
		let findingssummary =
			'Physical Exam: \n I performed a physical exam and the findings were as follows: \n'
		for (let finding of findings) {
			findingssummary += ` \n ${finding.label} was checked with the following finding: ${finding.value}. \n`
			if (finding.additionalInformation) {
				findingssummary += `    I additionally noted ${finding.additionalInformation} about this finding. \n `
			}
		}
		return findingssummary
	}

	const todayscomplaints = () => {
		let description = 'complainting today of: '
		for (let complaint of complaints) {
			if (complaint.complaint_name) {
				description += ' ' + complaint.complaint_name
			} else {
				description += complaint.complaint_description
			}
		}
		return description
	}

	const assessmentSummary = () => {
		let summary =
			'\n Based on the above, I believe I can make the following assessments: \n'

		for (let assessment of assessments) {
			summary += `${assessment.icd10assessmentcode}: ${assessment.icd_description} \n`
		}
		return summary
	}
	const getAllAppointmentData = async () => {
		Promise.all([getAppointmentComplaints(id)])
	}

	const mergedsummary = `Patient is a ${
		summaryvalues.age
	} year old ${todayscomplaints()}
${physicalexamfindings()}
${assessmentSummary()}
`

	const assessmentsummary = () => {}
	//console.log(physicalexamfindings());

	return (
		<Grid container direction={`column`}>
			<Grid item>
				<h3>Appointment Summary id:{id}</h3>
			</Grid>
			<Grid item>
				<TextField
					multiline
					rows={`10`}
					fullWidth
					variant={`outlined`}
					value={mergedsummary}
				/>
			</Grid>
		</Grid>
	)
}
