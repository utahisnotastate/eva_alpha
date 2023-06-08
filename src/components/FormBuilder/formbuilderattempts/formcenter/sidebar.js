import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'

export default function FormsList({ setFields }) {
	const forms = useSelector((state) => state.forms)
	const dispatch = useDispatch()
	return (
		<List
			sx={{
				width: '100%',
				bgcolor: 'background.paper',
			}}>
			{forms && forms.length > 0
				? forms.map((form, index) => (
						<ListItem
							key={index}
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
							}}>
							<ListItemText
								primary={
									<Typography
										sx={{
											fontSize: '1rem',
											fontWeight: 'bold',
											color: '#000',
										}}>
										{form.details.title}
									</Typography>
								}
								secondary={
									<Button
										variant={`text`}
										onClick={() => {
											dispatch({
												type: 'LOAD_EDITFORM',
												editform: form,
											})
										}}>
										Edit
									</Button>
								}
							/>
						</ListItem>
				  ))
				: null}
		</List>
	)
}
