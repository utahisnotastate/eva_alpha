import React from 'react'
import Grid from '@material-ui/core/Grid'
import { DevTool } from '@hookform/devtools'
import { Typography } from '@material-ui/core'
import AppointmentField from '../../Forms/components/AppointmentField/appointmentfield'
import { FormProvider, useForm } from 'react-hook-form'

const handleFormSave = (formData) => {
	console.log(formData)
}
export default function FormGenerator(props) {
	const methods = useForm()
	return (
		<div>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(handleFormSave)}>
					<Grid container direction={`column`}>
						<Grid item>
							{props.fields.length > 0 ? (
								props.fields.map((field, index) => (
									<div key={field.id}>
										<AppointmentField
											label={field.label}
											type={field.type}
											fieldindex={index}
											value={null}
											choices={field.choices}
											fieldchecked={false}
											additionalInformation={
												field.additionalInformation
											}
										/>
									</div>
								))
							) : (
								<Typography>
									Add fields to show a preview!
								</Typography>
							)}
						</Grid>
						<Grid item>
							<input type="submit" />
						</Grid>
					</Grid>
				</form>
			</FormProvider>
			<DevTool control={methods.control} />
		</div>
	)
}

/*
<SingleField field={field} fieldindex={index} />
{Object.keys(props.formfields).map(field => {
                return (
                    <SingleField label={props.formfields[field].label} type={props.formfields[field].type} checked={false} />
                );
            })}
 */
