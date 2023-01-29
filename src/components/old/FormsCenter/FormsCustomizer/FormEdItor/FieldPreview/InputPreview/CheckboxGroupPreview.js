import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	Checkbox,
	FormControlLabel,
	TextField,
	Typography,
} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Button from '../../../../../../basestyledcomponents/Button'
import { useFieldArray, useFormContext } from 'react-hook-form'

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
	boxcontainer: {
		padding: '15px',
	},
})

export default function CheckBoxGroupPreview(props) {
	const { register, control, watch, getValues, setValue } = useFormContext()
	const classes = useStyles()
	const watchnewcheckbox = watch(
		`customformfields[${props.input.fieldindex}].new_choice`
	)

	const { fields, append, prepend, remove, swap, move, insert } =
		useFieldArray({
			// name: "choices", // unique name for your Field Array
			control,
			name: `customformfields[${props.input.fieldindex}]['choices']`,

			// keyName: "id", default to "id", you can change the key name
		})
	const handleRemoveFields = (position) => {
		remove(position)
	}
	const handleAddField = (field) => {
		append({ label: field })
		setValue(`customformfields[${props.input.fieldindex}].new_choice`, '')
	}
	return (
		<Grid container direction="column">
			<Grid item>
				<Grid container spacing={3} direction="row">
					<Grid item>
						<FormControlLabel
							control={
								<TextField
									fullWidth
									inputRef={register()}
									name={`customformfields[${props.input.fieldindex}].new_choice`}
								/>
							}
							label={`Enter new checkbox field`}
							labelPlacement="start"
							className={classes.fullsize}
						/>
					</Grid>
					<Grid item>
						<Button
							color="primary"
							onClick={() => handleAddField(watchnewcheckbox)}>
							Add field
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item className={classes.margTop}>
				<Typography variant="subtitle2">Field Preview:</Typography>
			</Grid>
			<Grid item>
				<Grid
					container
					className={classes.fieldPreviewContainer}
					direction="column">
					<Grid item>
						<Typography>{props.input.label}</Typography>
					</Grid>
					<Grid item xs={12}>
						<Grid container>
							{fields.length > 0 ? (
								fields.map((field, index) => (
									<div
										key={field.label}
										className={classes.radiorow}>
										<Checkbox />
										<TextField
											name={`customformfields[${props.input.fieldindex}]['choices'][${index}].label`}
											fullWidth
											defaultValue={field.label}
											inputRef={register()}
										/>
										<Button
											color="danger"
											onClick={() => remove(index)}>
											X
										</Button>
									</div>
								))
							) : (
								<Typography></Typography>
							)}
							<Grid item>
								<Typography></Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

/*
<Button color="primary" onClick={() => props.input.choices.append({label: watchnewcheckbox})}>Add
                            field</Button>
<FormControl component={`fieldset`}>
                        <FormLabel component="legend">{props.input.label}</FormLabel>
                        <FormGroup>
                            {props.input.choices.fields.length > 0 ? props.input.choices.fields.map((field, index) => (

                                <div key={field.id}>
                                    <Grid container direction="row">
                                    <Grid item>
                                        <FormControlLabel
                                            control={<Checkbox
                                                checked={false}

                                            />}
                                            label={field.label}
                                            labelPlacement="top"
                                        />
                                    </Grid>

                                    <Grid item>
                                        <Button color={`danger`}
                                                onClick={() => props.input.choices.remove(index)}>X</Button>
                                    </Grid>
                                </Grid>
                                </div>

                            )) : <Typography>Add a field above to see a preview of the field</Typography>}
                        </FormGroup>
                    </FormControl>
name={`customformfields[${props.input.fieldindex}].choices[${index}].label`}
<FormControlLabel
                    control={<Checkbox   />}
                    label={`Checkbox 1`}
                />
                <FormControlLabel
                    control={<Checkbox   />}
                    label={`Checkbox 2`}
                />
                <FormControlLabel
                    control={<Checkbox   />}
                    label={`Checkbox 3`}
                />
 */
