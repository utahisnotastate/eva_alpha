import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'

import { useFormContext, useFieldArray, Controller } from 'react-hook-form'
import {
	TextField,
	Typography,
	Divider,
	Checkbox,
	Radio,
	FormControl,
	FormControlLabel,
	FormLabel,
	FormGroup,
} from '@material-ui/core'
import Button from '../../../../../../../basestyledcomponents/Button'
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

export default function RadioOptionsEditor(props) {
	const classes = useStyles()
	const { register, watch, getValues, control, setValue } = useFormContext()
	const watchlabel = watch('new_field.label')
	const watchnewchoice = watch('new_choice')
	// const SelectionType = props.selectiontype;

	const resetNewFieldInput = () => {
		setValue('new_field.type', '')
		setValue('new_field.label', '')
	}
	const addRadioFieldToForm = () => {
		const fieldsvalue = getValues()
		console.log({
			label: fieldsvalue.new_field.label,
			type: 'radio',
			choices: [],
		})
		/*props.handleAddField({
      label: fieldsvalue.new_field.label,
      type: "radio",
      choices: [],
    });*/
		props.append({
			label: fieldsvalue.new_field.label,
			type: 'radio',
			choices: [],
		})
		resetNewFieldInput()
	}
	return (
		<Grid container direction="column">
			<Grid item>
				<TextField
					fullWidth
					placeholder={`Enter Field Label`}
					inputRef={register}
					name="new_field.label"
				/>
			</Grid>
			<Grid item>
				<Typography variant={`subtitle2`}>
					To edit choices of this field, please enter in a label then
					add it to the form via the button below2.
				</Typography>
			</Grid>
			<Grid item>
				<Grid container direction="column">
					<Grid item>
						<Button
							type={`button`}
							color="primary"
							onClick={() => addRadioFieldToForm()}>
							Add to form
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

/*

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: "new_field.choices", // unique name for your Field Array
      control,
      // defaultValue: [],
      // keyName: "id", default to "id", you can change the key name
    }
  );
<Grid item>
                        <Grid container direction="row">
                            <Grid item>
                                <TextField fullWidth placeholder={`Enter Choice`}
                                           inputRef={register} name="new_choice"/>
                            </Grid>
                            <Grid item>
                                <Button type={`button`} color="primary" onClick={() => addNewChoice()}>Add choice</Button>
                            </Grid>
                        </Grid>
                    </Grid>
<Grid item className={classes.fieldPreviewContainer}>
                        <Typography variant="subtitle2">Field Preview:</Typography>
                        <FormControl component={`fieldset`}>
                            {watchlabel && <FormLabel component="legend">{watchlabel}</FormLabel> }
                            <FormGroup className={classes.radiorow}>
                                {fields.length > 0 ? fields.map((field, index) => (
                                    <div key={field.id}>
                                        <Grid container direction={`row`}>
                                            <Grid item>
                                                <Radio />
                                            </Grid>
                                            <Grid item>
                                                <FormControlLabel
                                                    control={<TextField name={`new_field.choices[${index}].label`} defaultValue={field.label} inputRef={register()}  />}

                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button type={`button`} color="danger" onClick={() => remove(index)}>X</Button>
                                            </Grid>
                                        </Grid>

                                    </div>

                                )): <Typography></Typography>}
                            </FormGroup>

                        </FormControl>
                    </Grid>
<Radio name={`choices[${index}][${field.label}]`} inputRef={register()}  />
<Radio name={`choices[${index}][${field.label}]`} inputRef={register()}  />
 */
