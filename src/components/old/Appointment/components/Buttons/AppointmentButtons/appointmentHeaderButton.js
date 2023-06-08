import React from 'react'
import Button from '@material-ui/core/Button'

export default function AppointmentHeaderButton(props) {
	return (
		<div className={props.className}>
			<Button
				color={`primary`}
				variant={`contained`}
				onClick={() => props.buttonAction()}>
				{props.text}
			</Button>
		</div>
	)
}
