import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

export default function FormsList({ forms, setFields }) {
	return (
		<List
			sx={{
				width: '100%',

				bgcolor: 'background.paper',
			}}>
			{forms.map((form) => (
				<ListItem
					key={form.id}
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
								onClick={() => setFields(form.fields)}>
								Edit
							</Button>
						}
					/>
				</ListItem>
			))}
		</List>
	)
}
