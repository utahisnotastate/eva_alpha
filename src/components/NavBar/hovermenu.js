import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import EvaLink from './evalink'
import { NavLink } from 'react-router-dom'

export default function HoverMenu() {
	const [forms, setForms] = useState([])
	return (
		<div className="w3-dropdown-hover">
			<button className={'w3-button'}>Forms Editor</button>
			<div className="w3-dropdown-content">
				<NavLink
					to={`/formscenter/physical_exam`}
					className="w3-bar-item w3-button">
					<Typography>Edit Physical Exam</Typography>
				</NavLink>
				<NavLink
					to={`/formscenter/review_of_systems`}
					className="w3-bar-item w3-button">
					<Typography>Edit Review of Systems</Typography>
				</NavLink>
				<NavLink
					to={`/formscenter/scheduling`}
					className="w3-bar-item w3-button">
					<Typography>Edit Scheduling</Typography>
				</NavLink>
				<NavLink
					to={`/formscenter/registration`}
					className="w3-bar-item w3-button">
					<Typography>Edit Registration</Typography>
				</NavLink>
			</div>
		</div>
	)
}
