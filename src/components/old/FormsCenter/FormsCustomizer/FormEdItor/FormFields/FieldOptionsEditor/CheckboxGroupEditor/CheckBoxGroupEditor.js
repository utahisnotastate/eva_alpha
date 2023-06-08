import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { useFormContext } from 'react-hook-form'
import { TextField, Typography } from '@material-ui/core'
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

export default function CheckboxGroupEditor(props) {
	const classes = useStyles()
	const { register, watch, setValue } = useFormContext()
	const watchlabel = watch('new_field.label')

	const addCheckboxGroupFieldToForm = (label) => {
		props.append({ label: label, type: 'checkbox_group', choices: [] })
		setValue('new_field.label', '')
		setValue('new_field.type', '')
	}
	return (
		<Grid container direction="column">
			<Grid item>
				<TextField
					fullWidth
					placeholder={`Enter Field Label`}
					inputRef={register}
					label={`Field Label`}
					name="new_field.label"
				/>
			</Grid>
			<Grid item>
				<Grid container direction="column">
					<Grid item>
						<Typography variant={`subtitle2`}>
							To edit choices of this field, please enter in a
							label then add it to the form via the button below.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Button
					color="primary"
					onClick={() => addCheckboxGroupFieldToForm(watchlabel)}>
					Add to form
				</Button>
			</Grid>
		</Grid>
	)
}

/*
const addNewChoice = (watchedchoice) => {
        //const choice = getValues("new_choice");
        console.log({label: watchedchoice});

        append({label: watchedchoice});
        const bocgroupvalues = getValues();
        console.log(bocgroupvalues)
        //setValue("new_choice", "");
    }
const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        // name: "choices", // unique name for your Field Array
        name: 'new_field.choices',
        control,
        // keyName: "id", default to "id", you can change the key name
    });
<Grid item>
                <TextField fullWidth placeholder={`Enter Field Label`}
                           inputRef={register}
                           label={`Field Label`}
                           name="new_field.label"
                />
            </Grid>
 <Grid item>
                                <TextField fullWidth placeholder={`Enter Choice`}
                                           inputRef={register()} name="new_choice"/>
                            </Grid>
                            <Grid item>
                                <Button type={`button`} color="primary" onClick={() => addNewChoice(watchnewchoice)}>Add choice</Button>
                            </Grid>
<FormControl component={`fieldset`}>
                            {watchlabel && <FormLabel component="legend">{watchlabel}</FormLabel> }
                            <FormGroup>
                                {fields.length > 0 ? fields.map((field, index) => (
                                    <div key={field.id}>
                                        <Grid container direction={`row`}>
                                            <Grid item>
                                                <Checkbox />
                                                <TextField fullWidth
                                                           inputRef={register()}  defaultValue={field.label} name={`new_field.choices[${index}].label`}/>
                                            </Grid>
                                            <Grid item>
                                                <Button type={`button`} color="danger" onClick={() => remove(index)}>X</Button>
                                            </Grid>
                                        </Grid>

                                    </div>

                                )): <Typography></Typography>}
                            </FormGroup>

                        </FormControl>
<Button color="primary" onClick={() => props.handleAddField({label: watchlabel, type: 'checkbox_group', choices: watchchoices }) }>Add to form</Button>
<FormControlLabel
                                                    control={<Checkbox name={`new_field.choices[${index}].value`} defaultValue={`new_field.choices[${index}].value`} inputRef={register()} />}
                                                    label={field.label}
                                                    labelPlacement="top"
                                                />
control={<Checkbox name={`${props.input.name}[${index}][${field.label}]`} inputRef={register()}  />}
 */
