import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { Button, TextField, Box, Typography, Modal } from '@mui/material'
import { getProviders, addProvider } from '../../api/api'

const validationSchema = Yup.object({
	title: Yup.string().required('Required'),
	first_name: Yup.string().required('Required'),
	last_name: Yup.string().required('Required'),
	npi: Yup.string().required('Required'),
})

const AddNewProviderModal = ({ open, handleClose }) => {
	const dispatch = useDispatch()
	const formik = useFormik({
		initialValues: {
			title: '',
			first_name: '',
			last_name: '',
			npi: '',
		},
		validationSchema,
		onSubmit: (values) => {
			addProvider(values)
				.then(() => {
					getProviders().then((providers) => {
						dispatch({
							type: 'LOAD_PROVIDERS',
							providers: providers,
						})
						handleClose(false)
					})
				})
				.catch((error) => {
					console.log(error)
				})
		},
	})

	return (
		<Modal open={open} onClose={handleClose}>
			<Box
				sx={{
					position: 'fixed',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					bgcolor: 'background.paper',
					boxShadow: 24,
					p: 4,
				}}>
				<Typography variant="h6">Add New Provider</Typography>
				<form onSubmit={formik.handleSubmit}>
					{[
						{ name: 'title', label: 'Title' },
						{ name: 'first_name', label: 'First Name' },
						{ name: 'last_name', label: 'Last Name' },
						{ name: 'npi', label: 'NPI' },
					].map((field) => (
						<TextField
							key={field.name}
							fullWidth
							name={field.name}
							label={field.label}
							onChange={formik.handleChange}
							error={
								formik.touched[field] &&
								Boolean(formik.errors[field])
							}
							helperText={
								formik.touched[field] && formik.errors[field]
							}
							margin="normal"
						/>
					))}
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							mt: 2,
						}}>
						<Button
							variant="contained"
							color="primary"
							type="submit">
							Add New Provider
						</Button>
					</Box>
				</form>
			</Box>
		</Modal>
	)
}

export default AddNewProviderModal
