import React, { useState } from 'react'
import Modal from 'react-modal'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { createNewPhysicalExamForm } from '../../../api/forms.redone.api'
import axios from 'axios'
import API_URL from '../../../api/api_url'

export default function CreateNewExam({
	redirect,
	redirectTo,
	create_button_text,
	setRedirect,
	setRedirectTo,
}) {
	const [modalIsOpen, setIsOpen] = useState(false)
	const [title, setTitle] = useState('')

	const saveFormToDB = async () => {
		const newform = {
			title,
			type: 'physical_exam',
			active: true,
			details: {
				fields: [],
			},
		}
		axios
			.post(`${API_URL}/forms/`, newform)
			.then((res) => {
				console.log(res)
				setIsOpen(false)
				setTitle('')
				const form = res.data
				setRedirectTo(res.data.id)
				setRedirect(true)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<>
			<Button variant={`contained`} onClick={() => setIsOpen(true)}>
				{create_button_text}
			</Button>
			<Modal
				isOpen={modalIsOpen}
				style={{
					overlay: {
						backgroundColor: 'f3f3f3',
					},
					content: {
						top: '50%',
						left: '50%',
						right: 'auto',
						bottom: 'auto',
						marginRight: '-50%',
						transform: 'translate(-50%, -50%)',
						display: 'flex',
						flexDirection: 'column',
					},
				}}>
				<Button
					variant={`contained`}
					color={`error`}
					onClick={() => setIsOpen(false)}>
					X
				</Button>

				<TextField
					InputLabelProps={{ shrink: true }}
					variant={`outlined`}
					label={`Title`}
					type={`text`}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<Button onClick={saveFormToDB}>Create Form</Button>
			</Modal>
		</>
	)
}
