import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'

export default function FormsList({ forms, setFields }) {
	const dispatch = useDispatch()
	return (
		<List
			sx={{
				width: '100%',

				bgcolor: 'background.paper',
			}}>
			{forms.map((form, index) => (
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
								{form.title}
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
			))}
		</List>
	)
}
