import React, { useState, useCallback } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Switch from '@mui/material/Switch'
import { Divider, Typography } from '@mui/material'
import NewFormButton from './newformbutton'
import CreateNewExam from './createnewexam'

const useStyles = makeStyles({
	root: {
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column',
	},
})

export default function FormsList({
	label,
	forms,
	form_type,
	url,
	create_button_text,
}) {
	const classes = useStyles()
	const dispatch = useDispatch()
	const [redirect, setRedirect] = useState(false)
	const [redirectTo, setRedirectTo] = useState('')

	const handleSwitch = () => console.log('clicked')
	const handleFormSelect = (form) => {
		dispatch({ type: 'set_active_form', form: form })
		setRedirectTo(form.id)
		setRedirect(true)
	}

	return (
		<div className={classes.root}>
			<List
				className={classes.root}
				subheader={<ListSubheader>{`${label}`}</ListSubheader>}>
				{redirect ? (
					<Redirect push to={`${url}/${redirectTo}/edit`} />
				) : null}{' '}
				<Divider />
				{forms && forms.length > 0 ? (
					forms.map((form, index) => (
						<ListItem key={index}>
							<ListItemText
								primary={form.title}
								onClick={() => handleFormSelect(form)}
							/>
							<div className={classes.root}>
								<Typography>Active</Typography>
								<Switch
									edge={`start`}
									onChange={handleSwitch}
									checked={form.active}
								/>
							</div>
						</ListItem>
					))
				) : (
					<ListItem>
						<ListItemText>
							{' '}
							Sorry no forms are created. Create one below
						</ListItemText>
					</ListItem>
				)}
			</List>
			<Divider />
			<CreateNewExam
				redirect={redirect}
				setRedirect={setRedirect}
				redirectTo={redirectTo}
				setRedirectTo={setRedirectTo}
				create_button_text={create_button_text}
			/>
		</div>
	)
}
/*
 const handleFormSelect = useCallback((form) => {
    dispatch({ type: "set_active_form", form: form });
    setRedirect(true);
  });
 */
