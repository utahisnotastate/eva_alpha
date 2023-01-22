import React from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'

export default function AppointmentStepper({ activeStep, setActiveStep }) {
	const steps = [
		'Preappointment',
		'Complaints',
		'Diagnoses',
		'Physical Exam',
		'Review of Systems',
		'Treatment Plan',
	]

	return (
		<Stepper nonLinear activeStep={activeStep}>
			{steps && steps.length > 0
				? steps.map((label, index) => (
						<Step key={label}>
							<StepButton onClick={() => setActiveStep(index)}>
								{label}
							</StepButton>
						</Step>
				  ))
				: null}
		</Stepper>
	)
}
