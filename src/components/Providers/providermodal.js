import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { Button, TextField, Box, Typography, Modal } from '@mui/material'
import { updateProvider, getProviders } from '../../api/api'

const validationSchema = Yup.object({
	title: Yup.string().required('Required'),
	first_name: Yup.string().required('Required'),
	last_name: Yup.string().required('Required'),
	npi: Yup.string().required('Required'),
})

const ProviderModal = ({ provider, open, handleClose, title }) => {
	const dispatch = useDispatch()
	const formik = useFormik({
		initialValues: provider,
		validationSchema,
		onSubmit: (values) => {
			updateProvider(values.id, values).then(() => {
				getProviders().then((providers) => {
					dispatch({ type: 'LOAD_PROVIDERS', providers: providers })
					handleClose()
				})
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
				<Typography variant="h6">Update Provider</Typography>
				<form onSubmit={formik.handleSubmit}>
					{['title', 'first_name', 'last_name', 'npi'].map(
						(field) => (
							<TextField
								key={field}
								fullWidth
								id={field}
								name={field}
								label={
									field.charAt(0).toUpperCase() +
									field.slice(1).replace('_', ' ')
								}
								value={formik.values[field]}
								onChange={formik.handleChange}
								error={
									formik.touched[field] &&
									Boolean(formik.errors[field])
								}
								helperText={
									formik.touched[field] &&
									formik.errors[field]
								}
								margin="normal"
							/>
						)
					)}
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
							Update
						</Button>
					</Box>
				</form>
			</Box>
		</Modal>
	)
}

export default ProviderModal
