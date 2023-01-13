import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { useArray } from 'react-hanger'
import { useFormContext, useFieldArray, Controller } from 'react-hook-form'
import {
	TextField,
	Checkbox,
	Typography,
	Divider,
	Radio,
	FormControl,
	FormControlLabel,
	FormLabel,
	FormGroup,
	RadioGroup,
} from '@material-ui/core'
import Button from '../../../../../../basestyledcomponents/Button'
import Grid from '@material-ui/core/Grid'

function NoCheckboxFieldsDisplay() {
	return (
		<Typography>No checkboxs have been added. Add some below. </Typography>
	)
}

const useStyles = makeStyles({
	fullsize: {
		width: '100%',
	},
	radiorow: {
		display: 'flex',
		flexDirection: 'row',
	},
	fieldPreviewContainer: {
		borderStyle: 'solid',
		borderColor: '#000',
		borderWidth: '3',
		padding: '10px',
		marginTop: '15px',
	},
	margTop: {
		marginTop: '15px',
	},
})

export default function RadioFieldPreview(props) {
	const classes = useStyles()
	const { register, watch, getValues, control, setValue } = useFormContext()
	const [choices, setChoices] = useState(props.input.choices)
	const watchlabel = watch('new_field.label')
	const watchnewchoice = watch(
		`customformfields[${props.input.fieldindex}].new_choice`
	)

	const handleRemove = (label) => {
		setChoices(choices.filter((choice) => choice.label !== label))
	}
	//console.log(fields, props);
	const addNewChoice = (watchnewchoice) => {
		// append({ label: watchnewchoice });
		let newchoices = [...choices, { label: watchnewchoice }]
		setChoices(newchoices)
		setValue(`customformfields[${props.input.fieldindex}].new_choice`, '')
	}

	const randomNumber = () => {
		return Math.floor(Math.random() * 100) + 1
	}

	useEffect(() => {
		//choices.push(props.input.choices);
		setChoices(props.input.choices)
		// props.input.choices.forEach((choice) => prepend(choice));
	}, [props.input.choices])

	return (
		<Grid container direction="column">
			<Grid item>
				<Grid container direction="column">
					<Grid item>
						<Grid container direction="row">
							<Grid item xs={8}>
								<TextField
									fullWidth
									placeholder={`Enter Choice`}
									inputRef={register()}
									defaultValue={``}
									name={`customformfields[${props.input.fieldindex}].new_choice`}
								/>
							</Grid>
							<Grid item xs={4}>
								<Button
									type={`button`}
									color="primary"
									onClick={() =>
										addNewChoice(watchnewchoice)
									}>
									Add choice
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container direction="column">
							{choices.length > 0 ? (
								choices.map((field, index) => (
									<div key={index}>
										<Grid item>
											<Grid container direction="row">
												<Grid item>
													{props.input.fieldtype ===
													'radio' ? (
														<Radio />
													) : (
														<Checkbox />
													)}
												</Grid>
												<Grid item>
													<TextField
														fullWidth
														placeholder={`Enter Choice`}
														inputRef={register()}
														defaultValue={
															field.label
														}
														name={`${props.input.name}[${index}].label`}
													/>
												</Grid>
												<Grid item>
													<Button
														color={`danger`}
														onClick={() =>
															handleRemove(
																field.label
															)
														}>
														X
													</Button>
												</Grid>
											</Grid>
										</Grid>
									</div>
								))
							) : (
								<Typography>
									Add choices above to create choices for this
									field
								</Typography>
							)}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
//append({ label: watchnewchoice });
//const valuechoices = getValues();
//console.log(
//newchoices.customformfields[`${props.input.fieldindex}`].choices
//);
//const arrchoices = props.input.choices;
//const pushchoices = arrchoices.push({ label: watchnewchoice });
//const arrcopy =
//valuechoices.customformfields[`${props.input.fieldindex}`].choices;
//const newchoice = arrcopy.push({ label: watchnewchoice });
//const newchoices = [...valuechoices.customformfields[`${props.input.fieldindex}`].choices, ...{label: "test"}]
//append({ label: "TEst" });
//let newfield =
//radiochoices.customformfields[props.input.fieldindex]["new_choice"];
//append({label: newfield, value: null});
//append({ label: newfield, value: null })
//console.log(newfield);
//append({ label: newfield });
//setValue(`customformfields[${props.input.fieldindex}].new_choice`, "");
//setValue(props.input.name, pushchoices);
//console.log(fields);
//console.log(radiochoices);
//console.log(valuechoices);
// setValue(`customformfields[${props.input.fieldindex}].choices[${}]`, "");
/*

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: props.input.name, // unique name for your Field Array
    }
  );
<input
                              key={field.id}
                              name={`customformfields[${props.input.fieldindex}].choices[${index}].label`}
                              ref={register()}
                              defaultValue={field.label}
                            />
<Grid item className={classes.margTop}>
                        <Typography variant="subtitle2">Field Preview:</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container className={classes.fieldPreviewContainer}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">{props.input.label}</FormLabel>

                                    {fields.length > 0 ? fields.map((field, index) => (
                                        <div key={field.id} className={classes.radiorow}>
                                            <Radio />
                                            <TextField fullWidth placeholder={`Enter Choice`} defaultValue={field.label}
                                                       inputRef={register()} name={`customformfields[${props.input.fieldindex}].choices[${index}].label`}/>
                                                       <Button color="danger" onClick={() => remove(index)}>X</Button>

                                        </div>
                                    )): <Typography></Typography>}

                            </FormControl>
                        </Grid>

                    </Grid>
<FormControlLabel name={`customformfields[${props.input.fieldindex}].choices[${index}].name`} defaultValue={false} control={<Radio inputRef={register()} />} label={field.label} />
<Grid item>
                        {props.input.choices.length > 0 ? props.input.choices.map((field, index) => (
                            <div key={field.label}>
                                <Grid container>
                                    <Grid item>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend">{field.label}</FormLabel>
                                            <RadioGroup name={``}  value={field.value}>
                                                <FormControlLabel defaultValue={`present`} control={<Radio inputRef={register()} />} label={field.label} />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </div>
                            ))
                        : <Typography></Typography>}
                    </Grid>
<Grid item className={classes.fieldPreviewContainer}>
                        <Typography variant="subtitle2">Field Preview:</Typography>
                        <FormControl component={`fieldset`}>
                            {watchlabel && <FormLabel component="legend">{watchlabel}</FormLabel> }
                            {fields &&
                            <FormGroup className={classes.radiorow}>
                                {fields.map((field, index) => (
                                    <div key={field.id}>
                                        <Grid container direction={`row`}>
                                            <Grid item>
                                                <FormControlLabel
                                                    control={<Radio name={`choices[${index}][${field.label}]`} inputRef={register()}  />}
                                                    label={field.label}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button type={`button`} color="danger" onClick={() => remove(index)}>X</Button>
                                            </Grid>
                                        </Grid>

                                    </div>

                                ))}
                            </FormGroup>
                            }
                        </FormControl>
                    </Grid>
<Radio name={`choices[${index}][${field.label}]`} inputRef={register()}  />
 */
