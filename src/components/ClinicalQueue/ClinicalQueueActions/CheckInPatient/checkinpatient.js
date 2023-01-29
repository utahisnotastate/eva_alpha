import React from 'react'
import Modal from '../../../basestyledcomponents/Modal/modal'

export default function CheckInPatient(props) {
	return (
		<Modal
			buttontext="Check In"
			modaltitle={`Patient Check In`}
			appointment={props.appointment}
			update={props.update}
		/>
	)
}
