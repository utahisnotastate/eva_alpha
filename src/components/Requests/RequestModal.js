import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Request from './Request'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '50%',
	boxShadow: 24,
	p: 4,
}

export default function RequestModal() {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<Button onClick={handleOpen}>View Request</Button>
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					<Request />
				</Box>
			</Modal>
		</>
	)
}
