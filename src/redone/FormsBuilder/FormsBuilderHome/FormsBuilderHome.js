import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import FormsList from '../FormsList/FormsList'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
})

export default function FormsBuilderHome({ forms }) {
	const { url } = useRouteMatch()
	const classes = useStyles()
	const physical_exam_forms = forms.filter(
		(form) => form.type === 'physical_exam'
	)
	const review_of_systems_forms = forms.filter(
		(form) => form.type === 'review_of_systems'
	)

	const typesofforms = [
		{
			label: 'Physical Exam',
			form_type: 'physical_exam',
			create_button_text: 'Create New Physical Exam Form',
		},
		{
			label: 'Review Of Systems',
			form_type: 'review_of_systems',
			create_button_text: 'Add New System',
		},
	]

	return (
		<div className={classes.root}>
			<FormsList
				forms={physical_exam_forms}
				type={`physical_exam`}
				create_button_text={`Create New Physical Exam Form`}
				label={`Physical Exam Forms`}
				url={url}
			/>
			<FormsList
				forms={review_of_systems_forms}
				type={`review_of_systems`}
				create_button_text={`Create New Review Of Systems Form`}
				label={`Review Of Systems Forms`}
				url={url}
			/>
		</div>
	)
}
