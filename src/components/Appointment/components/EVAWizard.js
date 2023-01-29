import React from 'react'
import { useWizard, Wizard } from 'react-use-wizard'
import EVAStepper from '../EVAStepper'

export default function EVAWizard({ steps, onSubmit }) {
	const {
		next,
		prev,
		step,
		steps: wizardSteps,
	} = useWizard({
		steps,
		initialStep: 0,
	})

	return (
		<Wizard
			onSubmit={onSubmit}
			header={<EVAStepper steps={steps} />}
			onNext={next}
			onPrev={prev}
			step={step}
			steps={wizardSteps}
		/>
	)
}
