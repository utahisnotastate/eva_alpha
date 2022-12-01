import React from 'react'
import CardHeader from '../basestyledcomponents/Card/CardHeader'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'

export default function EVAStepper({ steps, setActiveStep }) {
	return (
		<CardHeader>
			<Stepper nonLinear>
				{steps.map((step, index) => (
					<Step key={index}>
						<StepButton onClick={() => setActiveStep(step)}>
							{step.title}
						</StepButton>
					</Step>
				))}
			</Stepper>
		</CardHeader>
	)
}
