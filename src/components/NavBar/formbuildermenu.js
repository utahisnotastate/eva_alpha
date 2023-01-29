import * as React from 'react'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'

export default function FormBuilderMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const [forms, setForms] = React.useState([
		{
			label: 'physical exam',
			path: '/edit/physicalexam',
			displayInNav: true,
		},
		{
			label: 'review of systems',
			path: '/edit/reviewofsystems',
			displayInNav: true,
		},
		{
			label: 'registration',
			path: '/edit/registration',
			displayInNav: true,
		},
		{ label: 'complaint', path: '/edit/complaint', displayInNav: true },

		'review of systems',
		'complaints',
		'registration',
	])

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	return (
		<div>
			<Button
				aria-describedby={id}
				variant="contained"
				onClick={handleClick}>
				Form Editor
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}>
				{forms.map((form, index) => (
					<NavLink to={form.path} key={index}>
						<Typography>{form.label}</Typography>
					</NavLink>
				))}
			</Popover>
		</div>
	)

	/*
    * <EvaLink path={`/formscenter`} label={}  />
                <Typography sx={{ p: 2 }}>Edit Physical Exam</Typography>
                <Typography sx={{ p: 2 }}>Edit Review of Systems</Typography>
                <Typography sx={{ p: 2 }}>Edit Complaints</Typography>
                <Typography sx={{ p: 2 }}>Edit Registration</Typography>
    *
    * */
}
