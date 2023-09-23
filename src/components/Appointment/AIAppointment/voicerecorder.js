import React from 'react'
import { ReactMic } from 'react-mic'
import Button from '@mui/material/Button'

export default function VoiceRecorder({ setNote }) {
	const [record, setRecord] = React.useState(false)

	const startRecording = () => {
		setRecord(true)
	}

	const stopRecording = () => {
		setRecord(false)
	}

	const onData = (recordedBlob) => {
		console.log('chunk of real-time data is: ', recordedBlob)
	}

	const onStop = (recordedBlob) => {
		console.log('recordedBlob is: ', recordedBlob)
	}

	return (
		<div>
			<ReactMic
				record={record}
				className="sound-wave"
				onStop={onStop}
				onData={onData}
				strokeColor="#000000"
				backgroundColor="#FF4081"
			/>
			<Button onClick={startRecording} type="button">
				Start
			</Button>
			<Button onClick={stopRecording} type="button">
				Stop
			</Button>
		</div>
	)
}
