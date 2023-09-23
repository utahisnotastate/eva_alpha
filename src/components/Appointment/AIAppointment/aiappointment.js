import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import MicIcon from '@mui/icons-material/Mic'
import VoiceRecorder from './voicerecorder'
import {
	MainContainer,
	ChatContainer,
	MessageList,
	Message,
	MessageInput,
	InputToolbox,
} from '@chatscope/chat-ui-kit-react'

export default function AIAppointment() {
	const [note, setNote] = useState('')
	const [messagelist, setMessageList] = useState([])

	const handleNoteChange = (value) => {
		setNote(value)
	}

	// onClick handler for the send button should use the note state variable above. It should also update the messagelist state variable above. The message should be sent from the user (not Eva) and should be appended to the end of the messagelist array.

	const handleSendClick = () => {
		setMessageList([
			...messagelist,
			{
				message: note,
				sender: 'User',
			},
		])
		setNote('')
	}
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography
					sx={{ fontSize: 14 }}
					color="text.secondary"
					gutterBottom>
					Chatbot AI
				</Typography>
				<MainContainer>
					<ChatContainer>
						<MessageList>
							{messagelist && messagelist.length > 0
								? messagelist.map((message, index) => (
										<Message
											key={index}
											model={{
												message: message.message,
												sentTime: 'just now',
												sender: message.sender,
											}}
										/>
								  ))
								: null}
						</MessageList>
					</ChatContainer>
				</MainContainer>
			</CardContent>
			<CardActions>
				<InputToolbox>
					<MicIcon />
				</InputToolbox>
				<VoiceRecorder setNote={setNote} />
				<MessageInput
					placeholder="Type message here"
					attachButton={false}
					onChange={handleNoteChange}
					onSend={() => handleSendClick()}
					value={note}
				/>
			</CardActions>
		</Card>
	)
}
