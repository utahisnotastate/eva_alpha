import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useParams } from 'react-router-dom'
import { TextField } from 'formik-mui'

/*
* handleSubmit,
	onSubmit,
	handleChange,
	handleBlur,
	values,
	errors,
	id,
*
*
* */

const NewRequestForm = ({ handleSubmit, fields, values }) => {
	console.log({ handleSubmit, fields, values })
	return (
		<Form>
			{fields && fields.length > 0
				? fields.map((field, index) => (
						<Field
							key={index}
							style={{ margin: '15px' }}
							name={field.name}
							label={field.label}
							component={TextField}
							rows={4}
							multiline
							fullWidth
						/>
				  ))
				: null}

			<button type={`submit`} />
		</Form>
	)
}

export default function NewRequest() {
	// console.log(props);
	let { id } = useParams()

	return (
		<Formik
			onSubmit={(values, actions) => {
				actions.setSubmitting(true)
				actions.setSubmitting(false)
			}}
			initialValues={{ request_description: '', status: 'in process' }}
			component={() => {
				return (
					<NewRequestForm
						fields={[
							{
								name: 'request_description',
								label: 'Description',
							},
							{ name: 'status', label: 'status' },
						]}
					/>
				)
			}}
		/>
	)
}

/*
<form onSubmit={handleSubmit(onSubmit)}>
			<GridContainer direction="column">
				<GridItem>
					<GridContainer>
						<GridItem xs={4}>
							<Typography>Type of Request</Typography>
						</GridItem>
						<GridItem xs={8}>
							<select name="type" ref={register}>
								<option value="medication">
									Medication refill
								</option>
								<option value="insurance_authorization_medication">
									Insurance Authorization Medication
								</option>
								<option value="other">Other</option>
								<option value="clinical_question">
									Clinical Question
								</option>
							</select>
						</GridItem>
					</GridContainer>
				</GridItem>
				<GridItem>
					<GridContainer>
						<GridItem xs={4}>
							<Typography>Request Description</Typography>
						</GridItem>
						<GridItem xs={8}>
							<RHFTextInput
								name="request_description"
								placeholder={`Provide information about patients request`}
								register={register}
								setValue={setValue}
								multiline={true}
								rows={4}
							/>
						</GridItem>
					</GridContainer>
				</GridItem>
				<GridItem>
					<Input type={`submit`} />
				</GridItem>
			</GridContainer>
		</form>

 */
/*axios
			.post(
				`http://127.0.0.1:8000/api/patients/${id}/createpatientrequest/`,
				{
					patient: id,
					type: data.type,
					status: 'active',
					request_description: data.request_description,
				}
			)
			.then((response) => {
				console.log(response)
				async function loadPatientRequests() {
					const result = await axios(
						`${API_URL}/patients/${id}/patientrequests/`
					)
					return result.data
				}
				loadPatientRequests().then((response) => {
					console.log(response)
					dispatch({
						type: 'load_patient_requests',
						patientrequests: response,
					})
					props.setModal(false)
				})
			})
			.catch((error) => console.log(error))*/
