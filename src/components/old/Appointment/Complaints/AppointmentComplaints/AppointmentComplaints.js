import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Complaint from './complaint'

function AppointmentComplaintsList(props) {
	const { fields, append, prepend, remove, swap, move, insert } =
		props.useFieldArray({
			control: props.control,
			name: 'complaints',
		})
	return (
		<div>
			{props.complaints.map((complaint, index) => (
				<div key={index}>
					<Complaint
						index={index}
						setValue={props.setValue}
						complaint={complaint}
						register={props.register}
					/>
				</div>
			))}
		</div>
	)
}

function NoAppointmentComplaints(props) {
	return (
		<div>
			<Typography>
				No Complaints have been noted. Please add a complaint by
				searching for one below. If you can't find the complaint, enter
				in a description of the complaint below the search bar instead
			</Typography>
		</div>
	)
}

export default function AppointmentComplaints(props) {
	return (
		<Grid
			container
			direction={`column`}
			justify="space-evenly"
			alignItems="stretch"
			spacing={2}>
			<Grid item>
				<h1>Appointment Complaints</h1>
			</Grid>
			<Grid item>
				{props.complaints.length > 0 ? (
					<AppointmentComplaintsList
						control={props.control}
						setValue={props.setValue}
						useFieldArray={props.useFieldArray}
						register={props.register}
						complaints={props.complaints}
					/>
				) : (
					<NoAppointmentComplaints />
				)}
			</Grid>
		</Grid>
	)
}
/*
<div>
            {props.complaints.map((complaint) => (
                <div key={complaint.description}>
                    <Complaint complaint={complaint} />
                </div>
            ))}
        </div>
 */
