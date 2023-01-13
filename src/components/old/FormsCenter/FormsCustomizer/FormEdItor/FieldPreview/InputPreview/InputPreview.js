import React, { useEffect, useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
	TextField,
	Checkbox,
	Typography,
	FormControl,
	FormControlLabel,
	FormLabel,
	FormGroup,
	InputLabel,
	RadioGroup,
	Radio,
	Input,
} from '@material-ui/core'
import {
	useForm,
	Controller,
	useFieldArray,
	useFormContext,
} from 'react-hook-form'
import Grid from '@material-ui/core/Grid'
import Button from '../../../../../../basestyledcomponents/Button'
import CheckboxGroupPreview from './CheckboxGroupPreview'
import CheckboxPreview from './CheckboxPreview'
import TextFieldPreview from './TextFieldPreview'
import NumberFieldPreview from './NumberFieldPreview'
import TextAreaFieldPreview from './TextAreaFieldPreview'
import DateFieldPreview from './DateFieldPreview'
import RadioFieldPreview from './RadioFieldPreview'

const useStyles = makeStyles({
	fullsize: {
		width: '100%',
	},
})

export default function InputPreview(props) {
	const classes = useStyles()
	const { register, control } = useFormContext()
	switch (props.input.type) {
		case 'checkbox':
			return (
				<CheckboxPreview
					input={{
						name: `customformfields[${props.input.fieldindex}].label`,
					}}
				/>
			)
		case 'checkbox_group':
			return (
				<CheckboxGroupPreview
					input={{
						fieldindex: props.input.fieldindex,
						label: props.input.label,
						type: props.input.type,
						choices: props.input.choices,
					}}
				/>
			)
		case 'radio':
			return (
				<RadioFieldPreview
					input={{
						fieldindex: props.input.fieldindex,
						label: props.input.label,
						choices: props.input.choices,
					}}
				/>
			)
		case 'number':
			return (
				<NumberFieldPreview
					input={{
						name: `customformfields[${props.input.fieldindex}].label`,
					}}
				/>
			)
		case 'textarea':
			return (
				<TextAreaFieldPreview
					input={{
						name: `customformfields[${props.input.fieldindex}].label`,
					}}
				/>
			)
		case 'TextInput':
			return (
				<TextFieldPreview
					input={{
						name: `customformfields[${props.input.fieldindex}].label`,
					}}
				/>
			)
		case 'present_not_present':
			return (
				<FormControl component="fieldset">
					<FormLabel component="legend">
						{props.input.label}
					</FormLabel>
					<RadioGroup>
						<FormControlLabel
							value={`present`}
							control={<Radio />}
							label={`Present`}
						/>
						<FormControlLabel
							value={`not_present`}
							control={<Radio />}
							label={`Not Present`}
						/>
					</RadioGroup>
				</FormControl>
			)
		case 'date':
			return (
				<DateFieldPreview
					input={{
						name: `customformfields[${props.input.fieldindex}].label`,
					}}
				/>
			)
		case 'normal_abnormal':
			return (
				<FormControl component="fieldset">
					<FormLabel component="legend">
						{props.input.label}
					</FormLabel>
					<RadioGroup>
						<FormControlLabel
							value={`normal`}
							control={<Radio />}
							label={`Normal`}
						/>
						<FormControlLabel
							value={`abnormal`}
							control={<Radio />}
							label={`Abnormal`}
						/>
					</RadioGroup>
				</FormControl>
			)
		default:
			return <Typography>Please choose an input type above</Typography>
	}
}
/*
    const {fields, append, remove} = useFieldArray({
        control,
        name: `customformfields[${props.input.fieldindex}].choices`,

    })
<Grid container direction="column">
                    <Grid item>
                        <FormControl component="fieldset">
                        <FormLabel component="legend">{props.input.label}</FormLabel>
                        <RadioGroup>
                            {fields.length > 0 ? fields.map((field, index) => (
                                <div key={field.id}>
                                    <FormControlLabel
                                        control={
                                            <Radio checked={false}
                                                   />}
                                        label={field.label}
                                    />
                                    <Button color="danger" onClick={() => remove(index)}>X</Button>
                                </div>
                            )) : <Typography>No choices have been entered. Please add one above.</Typography>}

                        </RadioGroup>
                    </FormControl>
                    </Grid>
                </Grid>
inputRef={register()}
                                                   name={`customformfields[${props.input.fieldindex}].choices[${index}][${field.label}]`}
<FormControl fullWidth>
                    <InputLabel htmlFor="previewtextinput">{props.input.label}</InputLabel>
                    <Input id="previewtextinput" multiline rows={7}  />
                </FormControl>
<FormControl>
                <InputLabel htmlFor="previewtextinput">{props.input.label}</InputLabel>
                <Input id="previewtextinput"  />
            </FormControl>
return (<TextField fullWidth label={props.input.label} />)
 */
