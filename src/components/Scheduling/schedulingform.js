import React from 'react'
import { Field, Formik, Form } from 'formik'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Fab from '@mui/material/Fab'
import ScheduleAppointmentModal from './ScheduleAppointmentModal/scheduleappointmentmodal' // Assuming you've separated it into a different file

export default function SchedulingForm({
	slottoschedule,
	id,
	hideModal,
	onExited,
}) {
	const onSubmit = (values) => {
		console.log(values)
	}

	return (
		<Formik initialValues={{}} onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<Form>
					<Dialog
						disableBackdropClick={true}
						open={true}
						onExited={onExited}
						onClose={hideModal}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
							}}>
							<Fab color="primary" onClick={hideModal}>
								X
							</Fab>
						</div>
						<DialogTitle>Schedule appointment</DialogTitle>
						<DialogContent>
							<ScheduleAppointmentModal
								slottoschedule={slottoschedule}
								patient={id}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleSubmit}>Schedule</Button>
						</DialogActions>
					</Dialog>
				</Form>
			)}
		</Formik>
	)
}
