import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import { TextField } from 'formik-mui'
import Typography from '@mui/material/Typography'
import { FieldArray, Field } from 'formik'
import EditOptions from './editoptions'

export default function Fields({ name, view }) {
	const theme = useTheme()
	return (
		<FieldArray name={name}>
			{({ move, swap, remove, push, insert, unshift, pop, form }) => {
				return (
					<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
						{form.values.fields && form.values.fields.length > 0
							? form.values.fields.map((field, index) => (
									<ListItem
										divider
										key={index}
										sx={{
											display: 'flex',
											flexDirection: 'column',
										}}
										secondaryAction={
											view === 'edit' ? (
												<IconButton
													edge="end"
													color={`error`}
													aria-label="delete"
													onClick={() =>
														remove(index)
													}>
													<DeleteIcon />
												</IconButton>
											) : null
										}>
										<ListItemText
											sx={{ width: '100%' }}
											primary={
												<Field
													component={TextField}
													name={`fields.${index}.label`}
													label={`Label`}
													margin={`normal`}
													fullWidth
												/>
											}
										/>
										<ListItemText
											sx={{ width: '100%' }}
											primary={
												<Field
													label={`Placeholder`}
													margin={`normal`}
													component={TextField}
													name={`fields.${index}.placeholder`}
													fullWidth
												/>
											}
										/>
										<ListItemText
											sx={{ width: '100%' }}
											primary={
												<Field
													label={`Helper Text`}
													margin={`normal`}
													component={TextField}
													name={`fields.${index}.helperText`}
													fullWidth
												/>
											}
										/>
										{
											<div>
												{field.type === 'select' &&
												view === 'edit' ? (
													<EditOptions
														field={field}
														name={`fields.${index}.options`}
													/>
												) : null}
											</div>
										}
									</ListItem>
							  ))
							: null}
					</List>
				)
			}}
		</FieldArray>
	)
}
