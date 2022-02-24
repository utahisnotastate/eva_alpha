import React, { useEffect, useState } from 'react'
import { Formik, useFormikContext, Form } from 'formik'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import FormHeader from './FormHeader/FormHeader'
import FormFields from './FormFields/FormFieldsEditor'
import Container from '@material-ui/core/Container'
import { fetchForm, updateForm } from '../../../api/forms.api'

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

export default function FormEditor({ activeEditForm }) {
	let { id } = useParams()
	const dispatch = useDispatch()

	const [loading, setLoading] = useState(true)
	const classes = useStyles()

	const handleSaveForm = async (values) => {
		updateForm(values)
			.then((form) => {
				dispatch({ type: 'SET_ACTIVE_EDIT_FORM', form })
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const handlePreviewForm = async (form) => {
		console.log(form)
	}

	useEffect(() => {
		const getForm = async () => {
			return fetchForm(id)
		}
		getForm().then((form) => {
			dispatch({
				type: 'SET_ACTIVE_EDIT_FORM',
				form,
			})
			setLoading(false)
		})
	}, [id])

	return (
		<Container>
			{loading ? (
				<p>Loading...</p>
			) : (
				<Formik
					initialValues={activeEditForm}
					enableReinitialize
					onSubmit={(values) => handleSaveForm(values)}>
					<Form className={classes.form}>
						<FormHeader handlePreviewForm={handlePreviewForm} />
						<FormFields />
					</Form>
				</Formik>
			)}
		</Container>
	)
}

/*
<FormFieldsEditor />

const [initialvalues, setInitialValues] = useState({
		id: '',
		type: '',

		active: '',
		title: '',
		details: { fields: [] },
		addField: {
			type: '',
			label: '',
			choices: null,
		},
	})

 */
