import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import CardTravel from '@material-ui/icons/CardTravel'

export default function PatientRequestsTimeline(
	updates = [
		{
			// First story
			inverted: false,
			badgeColor: 'danger',
			badgeIcon: CardTravel,
			titleColor: 'danger',
			body: <p>Something Random</p>,
		},
	]
) {
	const firststory = {
		// First story
		inverted: false,
		badgeColor: 'danger',
		badgeIcon: CardTravel,

		titleColor: 'danger',
		body: <p>Test</p>,
	}
	return (
		<Timeline position="alternate">
			{updates.map((update, index) => (
				<TimelineItem key={index}>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<p>{update.body}</p>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	)
}
