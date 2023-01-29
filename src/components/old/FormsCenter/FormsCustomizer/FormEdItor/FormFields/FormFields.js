import React from 'react'
import { useDispatch } from 'react-redux'
import { useFormContext } from 'react-hook-form'
import { FieldArray, useFormikContext } from 'formik'
// import {fetchFormFields} from "../../../../../api/forms.api";
import { FormControlLabel, TextField, Typography } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Button from '../../../../../basestyledcomponents/Button'
// import FormFieldLabel from "./FormFieldLabel";
// import FormFieldActions from "./FormFieldActions/FormFieldActions";
// import FormFieldOptions from "./FormFieldOptions";
// import InputPreview from "../FieldPreview/InputPreview/InputPreview";
import RadioFieldPreview from '../FieldPreview/InputPreview/RadioFieldPreview'
import { makeStyles } from '@material-ui/core/styles'
// import { useParams } from "react-router-dom";
import AppointmentField from '../../../../Forms/components/AppointmentField/appointmentfield'

const useStyles = makeStyles({
	formrowcontainer: {
		margin: '5px',
	},
	fieldcontainer: {
		padding: '15px',
	},
	fullsize: {
		width: '100%',
	},
	deleteFieldButtoncontainer: {
		display: 'flex',
		flexDirection: 'row-reverse',
	},
	fieldlabelcontainer: {
		padding: '10px',
		margin: '10px',
	},
})

function NoFieldsToDisplay() {
	return (
		<Typography>
			This form currently has no fields. Try creating a custom field in
			the box below to get started.
		</Typography>
	)
}

export default function FormFields(props) {
	const dispatch = useDispatch()
	const { values } = useFormikContext()
	const { control, register, watch } = useFormContext()
	const classes = useStyles()
	const customfields = props.customfields

	return (
		<Grid container direction="column">
			<Grid item>
				<Typography variant="h6">Form fields</Typography>
			</Grid>
			<Grid item>
				<FieldArray
					name={`customformfields`}
					render={(arrayHelpers) => (
						<Grid column>
							{values.customformfields &&
							values.customformfields.length > 0 ? (
								<NoFieldsToDisplay />
							) : (
								<NoFieldsToDisplay />
							)}
						</Grid>
					)}
				/>
			</Grid>
			{customfields.length > 0 ? (
				customfields.map((field, index) => (
					<div key={index}>
						<Grid item>
							<Grid container direction="column">
								<Grid
									item
									className={
										classes.deleteFieldButtoncontainer
									}>
									<Button
										color="danger"
										onClick={() =>
											props.handleDeleteFIeld(index)
										}>
										X
									</Button>
								</Grid>
								<Grid item>
									<FormControlLabel
										control={
											<TextField
												fullWidth
												inputRef={register()}
												name={`customformfields[${index}].label`}
												defaultValue={field.label}
											/>
										}
										className={classes.fullsize}
										label={`Field Label`}
										labelPlacement={`start`}
									/>
								</Grid>
								<Grid item>
									<FormControlLabel
										control={
											<TextField
												fullWidth
												disabled
												inputRef={register()}
												name={`customformfields[${index}].type`}
												defaultValue={field.type}
											/>
										}
										className={classes.fullsize}
										label={`Field Type`}
										labelPlacement={`start`}
									/>
								</Grid>
								<Grid item>
									{field.type === 'radio' ? (
										<RadioFieldPreview
											input={{
												fieldindex: index,
												label: field.label,
												name: `customformfields[${index}].choices`,
												choices: field.choices || [],
												fieldtype: field.type,
											}}
										/>
									) : field.type === 'checkbox_group' ? (
										<RadioFieldPreview
											input={{
												fieldindex: index,
												label: field.label,
												name: `customformfields[${index}].choices`,
												choices: field.choices || [],
												fieldtype: field.type,
											}}
										/>
									) : (
										<fieldset>
											<legend>Form Preview</legend>
											<AppointmentField
												label={watch(
													`customformfields[${index}].label`
												)}
												type={field.type}
												fieldindex={index}
												value={null}
												fieldchecked={false}
												choices={field.choices}
												fieldname={`customformfields`}
												additionalInformation={null}
											/>
										</fieldset>
									)}
								</Grid>
							</Grid>
						</Grid>
					</div>
				))
			) : (
				<Typography>No form fields yet</Typography>
			)}
		</Grid>
	)
}
/*
<InputPreview input={{
                                    label: watch(`customformfields[${index}].label`),
                                    fieldindex: index,
                                    type: field.type,
                                    choices: field.choices
                                }}/>


{ formfields ? (<NoFieldsToDisplay />) : formfields.map(field => {
                        console.log('field label is ' + field.label);
                        console.log('field type is ' + field.type);
                        return (
                            <div key={field}>
                                <Grid key={field} item xs={12}>
                                    <Grid container direction={`row`} className={classes.formrowcontainer}>
                                        <FormFieldLabel index={field} label={field.label}/>
                                        <FormFieldOptions index={field} type={field.type} field_options={field.choices}/>
                                        <FormFieldActions index={field}  />
                                    </Grid>
                                    <Grid container direction={`column`} className={classes.formrowcontainer}>
                                        <div>
                                            <h3>Field Preview</h3>
                                        </div>
                                        <FieldPreview label={field.label} />
                                    </Grid>
                                </Grid>
                            </div>
                        );
                    }) }

useEffect(() => {
        fetchFormFields(formId).then(response => {
            dispatch({type: 'load_updated_array', newarray: response})
        })
    }, [])
    Object.entries(form).map((field, index) => {
            console.log('field ' + JSON.stringify(field));
            return (
                <div key={index}>
                    <Grid key={index} item xs={12}>
                        <Grid container direction={`row`} className={classes.formrowcontainer}>
                            <FormFieldLabel index={index} label={field.label}/>
                            <FormFieldOptions index={index} type={field.type} field_options={field.field_options}/>
                            <FormFieldActions index={index}  />
                        </Grid>
                    </Grid>
                </div>
            );
        })


for (let [prop, field] of Object.entries(form)) {
            console.log(prop, field.label);
            return (
                <div key={prop}>
                    <Grid key={prop} item xs={12}>
                        <Grid container direction={`row`} className={classes.formrowcontainer}>
                            <FormFieldLabel index={prop} label={field.label}/>
                            <FormFieldOptions index={prop} type={field.type} field_options={field.field_options}/>
                            <FormFieldActions index={prop}  />
                        </Grid>
                    </Grid>
                </div>
            );
        }
    */
