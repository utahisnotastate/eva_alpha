import React, { useEffect, useState } from 'react'
import { Formik, useFormikContext, Form } from 'formik'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import FormHeader from './FormHeader/FormHeader'
import FormFieldsEditor from './FormFieldsEditor/FormFieldsEditor'
import Container from '@material-ui/core/Container'
import { fetchForm } from '../../../api/forms.api'

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: 'white',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'lightgray',
	},
}))

export default function FormEditor() {
	let { id } = useParams()
	const [loading, setLoading] = useState(true)
	const classes = useStyles()
	const [initialvalues, setInitialValues] = React.useState({
		id: '',
		active: '',
		title: '',
		form: { fields: [] },
	})
	useEffect(() => {
		const getFormDetails = async () => {
			const form = await fetchForm(id)
			setInitialValues(form)
			setLoading(false)
		}
		getFormDetails()
	}, [id])

	return (
		<Container>
			{loading ? (
				<div>Loading...</div>
			) : (
				<Formik
					initialValues={initialvalues}
					enableReinitialize
					onSubmit={(values) => console.log(values)}>
					<Form className={classes.form}>
						<FormHeader />
						<FormFieldsEditor />
					</Form>
				</Formik>
			)}
		</Container>
	)
}

/*

 */
