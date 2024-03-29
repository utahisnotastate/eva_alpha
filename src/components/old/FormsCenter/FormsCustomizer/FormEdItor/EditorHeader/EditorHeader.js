import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFormikContext } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Button from '../../../../../basestyledcomponents/Button'
import FormikMUISelectField from '../../../FormikFields/FormikMUISelect'
import FormikMUITextField from '../../../FormikFields/FormikMUITextField'

const useStyles = makeStyles({
	horizontal: {
		display: 'flex',
		flexDirection: 'row',
	},
	endOfRow: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
})

export default function EditorHeader(props) {
	const classes = useStyles()
	const { values } = useFormikContext()

	const form_type_options = [
		{ label: 'Review of Systems', value: 'review_of_systems' },
		{ label: 'Physical Exam', value: 'physical_exam' },
	]

	/*
    <EditorHeader
        formId={formId}
    />
     */

	return (
		<Grid container direction="column">
			<Grid item className={classes.endOfRow}>
				<NavLink to={`/formscenter/${props.formId}/preview`}>
					<Button color={`primary`}>Preview Form</Button>
				</NavLink>
			</Grid>
			<Grid item>
				<Grid container direction="row" justify="space-between">
					<Grid item className={classes.horizontal}>
						<Typography>Form Title: {values.title} </Typography>
						<FormikMUITextField name={`form_title`} />
					</Grid>
				</Grid>
			</Grid>
			<Grid item className={classes.horizontal}>
				<Typography>Form Type</Typography>
				<FormikMUISelectField
					label={``}
					name={`form_type`}
					options={form_type_options}
					selecttext={`Choose form type from below`}
				/>
			</Grid>
		</Grid>
	)
}

/*
<Field component={TextField} label="" name={`form_title`} />

           <select name="form_type" ref={register}>
              <option value="">Select Form Type</option>
              <option value="physical_exam">Physical Exam</option>
              <option value="review_of_systems">Review Of Systems</option>
              <option value="medical_history">Medical History</option>
            </select>

<TextField inputRef={register} name={`form_title`} />
<Controller
                                    name={`form_title`}
                                    as={<TextField variant={`outlined`} defaultValue={props.title}  />}
                                />
 */
