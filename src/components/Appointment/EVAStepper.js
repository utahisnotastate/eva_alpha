import React from 'react'
import CardHeader from '../basestyledcomponents/Card/CardHeader'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'

export default function EVAStepper({ setActiveStep, sections }) {
	const handleStepClick = (step) => {
		setActiveStep(step)
	}
	return (
		<CardHeader>
			<Stepper nonLinear>
				{sections.map((section, index) => (
					<Step key={index}>
						<StepButton onClick={() => setActiveStep(index)}>
							{section}
						</StepButton>
					</Step>
				))}
			</Stepper>
		</CardHeader>
	)
}
