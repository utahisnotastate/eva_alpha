import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../../basestyledcomponents/Card/Card'
import CardHeader from '../../../../basestyledcomponents/Card/CardHeader'
import CardBody from '../../../../basestyledcomponents/Card/CardBody'
import {
	Field,
	FieldArray,
	Form,
	Formik,
	useField,
	useFormikContext,
} from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import { FormControlLabel, Grid, Radio, Typography } from '@material-ui/core'
import { RadioGroup, Switch, TextField } from 'formik-material-ui'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles({
	fieldcontainer: {
		marginTop: '15px',
		marginBottom: '15px',
	},
})

const SwitchField = (props) => {
	const { values, setFieldValue } = useFormikContext()
	const [field, meta] = useField(props)

	return (
		<>
			<Field component={Switch} type="checkbox" name={props.name} />
		</>
	)
}

export default function ActiveAppointmentForm(props) {
	let { formId } = useParams()
	const classes = useStyles()
	const dispatch = useDispatch()
	const [form, setForm] = useState({
		id: 420,
		title: '',
		form_type: 'physical_exam',
		form: { customformfields: [] },
	})
	const allforms = useSelector((state) => state.allpracticeforms)
	//const fields = props.form.form.customformfields;
	/*const fields = useSelector(a6
    (state) =>
      state.appointment.activeappointmentform.activeAppointmentFormFields
  );*/
	const labelsize = 3
	const inputsize = 9
	const handleTextFieldChange = (event, fieldname, formProps) => {
		//return event.target.value;
		if (event.target.value === '') {
			formProps.setFieldValue(`${fieldname}.checked`, false)
			formProps.setFieldValue(`${fieldname}.value`, event.target.value)
		} else {
			formProps.setFieldValue(`${fieldname}.checked`, true)
			formProps.setFieldValue(`${fieldname}.value`, event.target.value)
		}
	}

	const handleRadioFieldChange = (event, fieldname, formProps) => {
		//return event.target.value;
		if (event.target.value === 'unchecked') {
			formProps.setFieldValue(`${fieldname}.checked`, false)
			//formProps.setFieldValue(`${fieldname}.value`, event.target.value);
		} else {
			//console.log(event.target.value);
			let newvalue = event.target.value
			formProps.setFieldValue(`${fieldname}.value`, newvalue)
			formProps.setFieldValue(`${fieldname}.checked`, true)
		}
	}

	const handleCheckboxGroupChange = (event, fieldname, formProps, index) => {
		//return event.target.value;
		if (event.target.value === 'unchecked') {
			formProps.setFieldValue(`${fieldname}.checked`, false)
			formProps.setFieldValue(`${fieldname}.value`, ['unchecked'])
			//formProps.setFieldValue(`${fieldname}.value`, event.target.value);
		} else {
			//console.log(event.target.value);
			let newvalue = event.target.value
			console.log(formProps.values.formfields[index].value)
			let filteredarray = formProps.values.formfields[index].value.filter(
				(check) => {
					return check !== 'unchecked'
				}
			)
			let newarray = [...filteredarray, newvalue]
			/*formProps.setFieldValue(`${fieldname}.value`, [
        ...formProps.values[fieldname],
        newvalue,
      ]);*/
			formProps.setFieldValue(`${fieldname}.checked`, true)
			formProps.setFieldValue(`${fieldname}.value`, newarray)
		}
	}
	useEffect(() => {
		let activeform = allforms.find((form) => form.id == formId)
		setForm(activeform)
		console.log(activeform)
	}, [formId, form])
	return (
		<Card>
			<CardHeader color={`primary`}>
				<h4>
					<Typography>{form.title}</Typography>
				</h4>
			</CardHeader>
			<CardBody>
				<Formik
					initialValues={{
						title: form.title,
						formfields: form.form.customformfields,
						form_type: form.form_type,
					}}
					enableReinitialize={false}
					onSubmit={async (values) => {
						console.log(values)
						/*let mergedObject = { ...values, ...appointmentform };
            console.log(mergedObject);
            updateAppointmentForm(props.appointmentId, mergedObject).then(
              (response) => {
                console.log("update response is " + JSON.stringify(response));
                dispatch({
                  type: "load_active_form_fields",
                  fields: response.form.customformfields,
                });
                dispatch({
                  type: "load_active_appointment_form_details",
                  details: {
                    title: response.title,
                    id: response.id,
                    form_type: response.form_type,
                  },
                });
              }
            );*/
					}}
					render={(formProps) => {
						return (
							<Form>
								<Typography></Typography>
								<FieldArray
									name="formfields"
									render={() => (
										<Grid container direction={`column`}>
											{formProps.values.formfields
												.length > 0 ? (
												formProps.values.formfields.map(
													(field, index) => (
														<Grid
															item
															key={index}
															className={
																classes.fieldcontainer
															}>
															<Grid
																container
																direction={`column`}>
																<Grid item>
																	<Grid
																		container
																		direction="row">
																		<Grid
																			item
																			xs={
																				labelsize
																			}>
																			<Grid
																				container
																				direction="column">
																				<Grid
																					item>
																					<Typography>
																						{
																							field.label
																						}
																					</Typography>
																				</Grid>
																				<Grid
																					item>
																					{field.type ===
																					'checkbox_group' ? null : (
																						<Grid
																							container
																							direction="row">
																							<Grid
																								item>
																								<Typography>
																									Unchecked
																								</Typography>
																							</Grid>
																							<Grid
																								item>
																								<SwitchField
																									name={`formfields.${index}.checked`}
																								/>
																							</Grid>
																							<Grid
																								item>
																								<Typography>
																									Checked
																								</Typography>
																							</Grid>
																						</Grid>
																					)}
																				</Grid>
																			</Grid>
																		</Grid>
																		<Grid
																			item
																			xs={
																				inputsize
																			}>
																			{field.type ===
																			'checkbox_group' ? (
																				<div>
																					{field.choices.map(
																						(
																							choice,
																							choiceindex
																						) => (
																							<div
																								key={
																									choice.label
																								}>
																								<label>
																									<Field
																										type={`checkbox`}
																										name={`formfields.${index}.value`}
																										value={
																											choice.label
																										}
																									/>
																									{
																										choice.label
																									}
																								</label>
																							</div>
																						)
																					)}
																					<label>
																						<Field
																							type={`checkbox`}
																							name={`formfields.${index}.value`}
																							value={`unchecked`}
																						/>
																						{`unchecked`}
																					</label>
																				</div>
																			) : field.type ===
																			  'number' ? (
																				<Field
																					component={
																						TextField
																					}
																					name={`formfields.${index}.value`}
																					variant={`outlined`}
																					type={`number`}
																					onChange={(
																						e
																					) =>
																						handleTextFieldChange(
																							e,
																							`formfields.${index}`,
																							formProps
																						)
																					}
																					placeholder={`Enter findings for ${field.label} here`}
																					fullWidth={
																						true
																					}
																				/>
																			) : field.type ===
																			  'textarea' ? (
																				<Field
																					component={
																						TextField
																					}
																					name={`formfields.${index}.value`}
																					variant={`outlined`}
																					onChange={(
																						e
																					) =>
																						handleTextFieldChange(
																							e,
																							`formfields.${index}`,
																							formProps
																						)
																					}
																					placeholder={`Enter findings for ${field.label} here`}
																					multiline={
																						true
																					}
																					fullWidth={
																						true
																					}
																					rows={
																						5
																					}
																				/>
																			) : field.type ===
																			  'radio' ? (
																				<Field
																					component={
																						RadioGroup
																					}
																					name={`formfields.${index}.value`}
																					onChange={(
																						e
																					) =>
																						handleRadioFieldChange(
																							e,
																							`formfields.${index}`,
																							formProps
																						)
																					}>
																					{field.choices.map(
																						(
																							choice,
																							choiceindex
																						) => (
																							<div
																								key={
																									choice.label
																								}>
																								<FormControlLabel
																									value={
																										choice.label
																									}
																									control={
																										<Radio />
																									}
																									label={
																										choice.label
																									}
																								/>
																							</div>
																						)
																					)}
																					<FormControlLabel
																						value={`unchecked`}
																						control={
																							<Radio />
																						}
																						label={`Unchecked`}
																					/>
																				</Field>
																			) : (
																				<Field
																					component={
																						TextField
																					}
																					onChange={(
																						e
																					) =>
																						handleTextFieldChange(
																							e,
																							`formfields.${index}`,
																							formProps
																						)
																					}
																					name={`formfields.${index}.value`}
																					placeholder={`Enter findings for ${field.label} here`}
																					variant={`outlined`}
																					fullWidth={
																						true
																					}
																				/>
																			)}
																		</Grid>
																	</Grid>
																</Grid>
																<Grid item>
																	<Grid
																		container
																		direction="row">
																		<Grid
																			item
																			xs={
																				labelsize
																			}></Grid>
																		<Grid
																			item
																			xs={
																				inputsize
																			}>
																			{field.type ===
																			'textarea' ? null : (
																				<Field
																					component={
																						TextField
																					}
																					name={`formfields.${index}.additionalInformation`}
																					variant={`outlined`}
																					placeholder={`Enter any additional information not reflected in the above findings for ${field.label} here`}
																					multiline={
																						true
																					}
																					fullWidth={
																						true
																					}
																					rows={
																						5
																					}
																				/>
																			)}
																		</Grid>
																	</Grid>
																</Grid>
															</Grid>
														</Grid>
													)
												)
											) : (
												<Typography>
													There aren't multiple
													fields!
												</Typography>
											)}
										</Grid>
									)}
								/>
								<button type="submit">Submit</button>
							</Form>
						)
					}}
				/>
			</CardBody>
		</Card>
	)
}

/*
  useEffect(() => {
    console.log(allforms);
    console.log(props.formId);
    const checkforms = allforms.find((form) => {
      if (form.id === props.formId) {
        console.log(form);
        return form;
      }
    });
    console.log(checkforms);
  }, [props.formId, props.appointmentId]);

useEffect(() => {
    getAppointmentForm(props.appointmentId, props.formId).then((response) => {
      console.log(
        "Active appointment form response is " + JSON.stringify(response)
      );
      let modifledfields = [];

      for (let field of response.form.customformfields) {
        if (
          field.hasOwnProperty("checked") === false ||
          field.hasOwnProperty("value") === false
        ) {
          if (field.type === "radio") {
            field.checked = false;
            field.value = "unchecked";
          } else if (field.type === "checkbox_group") {
            field.checked = false;
            field.value = ["unchecked"];
          } else {
            field.checked = false;
            field.value = "";
          }
        }
      }
      console.log(response.form.customformfields);
      dispatch({
        type: "load_active_form_fields",
        fields: response.form.customformfields,
      });
      dispatch({
        type: "load_active_appointment_form_details",
        details: {
          title: response.title,
          id: response.id,
          form_type: response.form_type,
        },
      });
    });
  }, [props.formId, props.appointmentId]);
  console.log(values);

  useEffect(() => {
    // set the value of textC, based on textA and textB
    if (values) {
      setFieldValue(props.name, true);
    }
  }, [props.name]);
props.formId
  useEffect(() => {
    console.log(props.formId);

    fetchForm(props.formId).then((response) => {
      console.log("Form editor API call is: " + JSON.stringify(response));
      //setFormTitle(response.title);
      //setFormType(response.form_type);
      if (response.form) {
        console.log("response form is: " + JSON.stringify(response.form));
        response.form.customformfields.forEach((field) => {
          if (field.type === "radio") {
            field.checked = false;
            field.value = "unchecked";
          } else if (field.type === "checkbox_group") {
            field.checked = false;
            field.value = ["unchecked"];
          } else {
            field.checked = false;
            field.value = "";
          }
        });
        console.log(
          "modified active appointment form is " +
            response.form.customformfields
        );
        dispatch({
          type: "load_active_form_fields",
          fields: response.form.customformfields,
        });
        setFormTitle(response.title);
        setFormType(response.form_type);
        setInitValues(response);
        //let currentfields = formfields;
        //console.log(formfields);
        //let newfields = [...formfields, ...response.form.customformfields];
        // setFormFields([...formfields, ...response.form.customformfields]);
        //console.log(newfields);
        //setFormFields(newfields);
        //append(response.form.customformfields);
      } else {
        //remove();
        console.log("No response!");
      }
    });
  }, [props.formId]);

const fields = useSelector(
    (state) => state.formsmanager.formpreview.previewfields
  );
 */
