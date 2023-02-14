import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { RHFInput } from 'react-hook-form-input'
import TextField from '@material-ui/core/TextField'
import Select from 'react-select'

import { Input, Typography, Grid } from '@material-ui/core'
// import {useStateValue} from "../../../../ClinicalQueue/context/ClinicalQueueContext";
import './modal.css'
import moment from 'moment'

const API_URL = 'http://127.0.0.1:8000/api'
const options = [
	{ value: true, label: 'Yes' },
	{ value: false, label: 'No Changes' },
]
const paymentoptions = [
	{ value: 'cash', label: 'Cash' },
	{ value: 'credit_debit', label: 'Credit/Debit' },
	{ value: 'IOU', label: 'IOU' },
]

export default function CheckInForm(props) {
	const { register, handleSubmit, errors, setValue } = useForm()
	const clinicalqueue = useSelector((state) => state.clinicalqueue)
	const dispatch = useDispatch()
	// const [{clinicalqueue}, dispatch] = useStateValue()
	const onSubmit = (data) => {
		async function checkInPatient() {
			const result = await axios.patch(
				`http://127.0.0.1:8000/api/appointments/${props.appointment}/`,
				{ status: 'arrived' }
			)
			return result
		}

		checkInPatient()
			.then((response) => {
				async function getUpdatedClinicalQueue() {
					const result = await axios(`${API_URL}/appointmentstoday`)
					let appointments = result.data
					return appointments
				}

				getUpdatedClinicalQueue().then((response) => {
					console.log(response)
					let modifiedappointments = []
					response.forEach((appointment) => {
						let formattedstart = moment(appointment.start).format(
							'h:mm'
						)
						let formattedend = moment(appointment.end).format(
							'h:mm'
						)
						modifiedappointments.push({
							...appointment,
							...{ start: formattedstart },
						})
					})
					dispatch({
						type: 'check_in_patient',
						newclinicalqueue: modifiedappointments,
					})
				})
			})
			.catch((error) => console.log(error))
		props.setModal(false)
	}

	const styles = {
		row: {
			display: 'flex',
			flexDirection: 'row',
			padding: 10,
			marginBottom: 15,
		},
	}

	return (
		<form style={styles.container} onSubmit={handleSubmit(onSubmit)}>
			<Grid container direction="column">
				<Grid item style={styles.row} xs={12}>
					<Grid container>
						<Grid item xs={4}>
							<Typography>Insurance changes:</Typography>
						</Grid>
						<Grid item xs={8}>
							<RHFInput
								as={<Select options={options} />}
								name="insurance_changes"
								className="select-input"
								register={register}
								setValue={setValue}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={4}>
							{' '}
							<Typography>Copay Amount:</Typography>
						</Grid>
						<Grid item xs={8}>
							<Typography>$50.00</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={4}>
							{' '}
							<Typography>Patient Balance:</Typography>
						</Grid>
						<Grid item xs={8}>
							<Typography>$50.00</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={4}>
							<Typography>Total Due:</Typography>
						</Grid>
						<Grid item xs={8}>
							<Typography>$50.00</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={4}>
							<Typography>Amount Paid:</Typography>
						</Grid>
						<Grid item xs={8}>
							<RHFInput
								as={
									<TextField
										placeholder={`Enter total amount paid today`}
										fullWidth={true}
									/>
								}
								name="amount_paid"
								className="select-input"
								register={register}
								setValue={setValue}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={4}>
							<Typography>Payment Method</Typography>
						</Grid>
						<Grid item xs={8}>
							<RHFInput
								as={<Select options={paymentoptions} />}
								name="payment_method"
								className="select-input"
								register={register}
								setValue={setValue}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Input type="submit" />
		</form>
	)
}
