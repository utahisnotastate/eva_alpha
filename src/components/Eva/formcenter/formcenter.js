import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import Fields from './fields/fields'
import AddFieldButton from './fields/addfieldbutton'
import EVAFormFieldsPreview from './fields/preview'
import { useTheme } from '@mui/material/styles'
import FormsList from './sidebar'
import { getSettings } from '../../../api/utility.api'

export default function FormEditor() {
	const theme = useTheme()
	const dispatch = useDispatch()
	const forms = useSelector((state) => state.forms)
	const [title, setTitle] = React.useState()
	const editform = useSelector((state) => state.editform)
	const [view, setView] = React.useState('edit')
	const inputs = [
		{
			buttontext: 'Text',
			blankitem: {
				label: '',
				type: 'text',
				placeholder: '',
				helperText: '',
			},
		},
		{
			buttontext: 'Number',
			blankitem: {
				label: '',
				type: 'number',
				placeholder: '',
				helperText: '',
			},
		},
		{
			buttontext: 'Select',
			blankitem: {
				label: '',
				type: 'select',
				options: [{ label: '' }],
				placeholder: '',
				helperText: '',
			},
		},
		{
			buttontext: 'Range',
			blankitem: {
				label: '',
				type: 'range',
				placeholder: '',
				helperText: '',
			},
		},
	]

	React.useEffect(() => {
		dispatch({ type: 'UPDATE_EDITFORM', editform: forms })
		getSettings()
			.then((data) => {
				setTitle(data.settings.details.title)
			})
			.catch((err) => {
				console.log(err)
			})
	})

	return (
		<Formik
			initialValues={editform}
			enableReinitialize
			onSubmit={(values) => {
				console.log(values)
			}}>
			{(formikProps) => (
				<Grid container spacing={3}>
					<Grid item xs={2}>
						<FormsList forms={forms} formikProps={formikProps} />
					</Grid>
					<Grid item xs={10}>
						{' '}
						<Card sx={{ boxShadow: 3 }}>
							<CardHeader
								title={title}
								sx={{
									bgcolor: 'primary.main',
									color: 'primary.contrastText',
								}}
								action={
									<ButtonGroup>
										<Button
											variant="outlined"
											sx={{
												color: 'primary.contrastText',
											}}
											onClick={() => setView('edit')}>
											View
										</Button>
										<Button
											sx={{
												color: 'primary.contrastText',
											}}
											variant="outlined"
											onClick={() => setView('preview')}>
											Preview
										</Button>
										<Button
											sx={{
												color: 'primary.contrastText',
											}}
											variant="outlined"
											onClick={() => setView('preview')}>
											Save
										</Button>
									</ButtonGroup>
								}
							/>
							<CardContent>
								<Form>
									{view === 'edit' ? (
										<Fields name={`fields`} view={view} />
									) : (
										<EVAFormFieldsPreview name={`fields`} />
									)}
								</Form>
							</CardContent>
							<CardActions
								sx={{ display: 'flex', flexDirection: 'row' }}>
								{view === 'edit'
									? inputs.map((input, index) => (
											<AddFieldButton
												key={index}
												formikProps={formikProps}
												blankitem={input.blankitem}
												buttontext={input.buttontext}
											/>
									  ))
									: null}
								{view === 'edit' ? (
									<input type="submit" />
								) : null}
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			)}
		</Formik>
	)
}

/*
*
*
* <Grid
			container
			spacing={3}
			sx={{
				marginTop: '10px',
			}}>
			<Grid item xs={2}>
				<FormsList forms={forms} setFields={setFields} />
			</Grid>

			<Grid item xs={10}>

			</Grid>
		</Grid>
*
*
* <Formik
					initialValues={{ fields: activeform.fields }}
					enableReinitialize
					onSubmit={(values) => {
						console.log(values)
					}}>
					{(formikProps) => (
						<Card sx={{ boxShadow: 3 }}>
							<CardHeader
								title={title}
								sx={{
									bgcolor: 'primary.main',
									color: 'primary.contrastText',
								}}
								action={
									<ButtonGroup>
										<Button
											variant="outlined"
											sx={{
												color: 'primary.contrastText',
											}}
											onClick={() => setView('edit')}>
											Edit
										</Button>
										<Button
											sx={{
												color: 'primary.contrastText',
											}}
											variant="outlined"
											onClick={() => setView('preview')}>
											Preview
										</Button>
										<Button
											sx={{
												color: 'primary.contrastText',
											}}
											variant="outlined"
											onClick={() => setView('preview')}>
											Save
										</Button>
									</ButtonGroup>
								}
							/>
							<CardContent>
								<Form>
									{view === 'edit' ? (
										<Fields name={`fields`} view={view} />
									) : (
										<EVAFormFieldsPreview name={`fields`} />
									)}
								</Form>
							</CardContent>
							<CardActions
								sx={{ display: 'flex', flexDirection: 'row' }}>
								{view === 'edit'
									? inputs.map((input, index) => (
											<AddFieldButton
												key={index}
												formikProps={formikProps}
												blankitem={input.blankitem}
												buttontext={input.buttontext}
											/>
									  ))
									: null}
								{view === 'edit' ? (
									<input type="submit" />
								) : null}
							</CardActions>
						</Card>
					)}
				</Formik>*/
