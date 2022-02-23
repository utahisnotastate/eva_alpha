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

const useStyles = makeStyles({
	root: {
		backgroundColor: 'white',
	},
})

export default function FormsList({ label, form_type, url }) {
	const classes = useStyles()
	const dispatch = useDispatch()
	const forms = useSelector((state) => state.formsmanager.forms)
	const [redirect, setRedirect] = useState(false)
	const [redirectTo, setRedirectTo] = useState('')

	const handleSwitch = () => console.log('clicked~')
	const handleFormSelect = (form) => {
		dispatch({ type: 'set_active_form', form: form })
		setRedirectTo(form.id)
		setRedirect(true)
	}

	return (
		<>
			<List
				className={classes.root}
				subheader={<ListSubheader>{`${label}`}</ListSubheader>}>
				<>
					{redirect ? (
						<Redirect push to={`${url}/${redirectTo}/edit`} />
					) : null}{' '}
				</>
				<Divider />
				{forms && forms.length > 0
					? forms
							.filter((form) => form.form_type === form_type)
							.map((form, index) => (
								<ListItem key={index}>
									<Switch
										edge={`start`}
										onChange={handleSwitch}
										checked={form.active}
									/>
									<ListItemText
										primary={`${form.title} and id ${form.id}`}
										onClick={() => handleFormSelect(form)}
									/>
								</ListItem>
							))
					: null}
				<ListItem>
					<NewFormButton displaytext={`Add`} />
				</ListItem>
			</List>
		</>
	)
}
/*
 const handleFormSelect = useCallback((form) => {
    dispatch({ type: "set_active_form", form: form });
    setRedirect(true);
  });
 */
