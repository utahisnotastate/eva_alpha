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

export default function FormsBuilderHome() {
	const { url } = useRouteMatch()
	const classes = useStyles()

	const typesofforms = [
		{ label: 'Physical Exam', form_type: 'physical_exam' },
		{ label: 'Review Of Systems', form_type: 'review_of_systems' },
	]

	return (
		<div className={classes.root}>
			{typesofforms.map((form, index) => (
				<FormsList
					key={index}
					form={form}
					form_type={form.form_type}
					label={form.label}
					url={url}
				/>
			))}
		</div>
	)
}
