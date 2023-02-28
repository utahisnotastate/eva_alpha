import * as React from 'react'
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material'
import RequestModal from './RequestModal'

//the react router link component
import { Link as RouterLink } from 'react-router-dom'

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
	return { id, date, name, shipTo, paymentMethod, amount }
}

const rows = [
	createData(
		0,
		'16 Mar, 2019',
		'Elvis Presley',
		'Tupelo, MS',
		'VISA ⠀•••• 3719',
		312.44
	),
	createData(
		1,
		'16 Mar, 2019',
		'Paul McCartney',
		'London, UK',
		'VISA ⠀•••• 2574',
		866.99
	),
	createData(
		2,
		'16 Mar, 2019',
		'Tom Scholz',
		'Boston, MA',
		'MC ⠀•••• 1253',
		100.81
	),
	createData(
		3,
		'16 Mar, 2019',
		'Michael Jackson',
		'Gary, IN',
		'AMEX ⠀•••• 2000',
		654.39
	),
	createData(
		4,
		'15 Mar, 2019',
		'Bruce Springsteen',
		'Long Branch, NJ',
		'VISA ⠀•••• 5919',
		212.79
	),
]

function preventDefault(event) {
	event.preventDefault()
}

export default function Requests() {
	return (
		<Card>
			<CardHeader title="Requests" />
			<Divider />
			<CardContent>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Type</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Status</TableCell>
							<TableCell align="right">View</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.id}>
								<TableCell>{row.date}</TableCell>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.paymentMethod}</TableCell>
								<TableCell align="right">
									<RequestModal />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
			<Divider />
			<CardActions>
				<Button color="primary" size="small" variant="text">
					View all <Box component="span" sx={{ pl: 1 }} />
				</Button>
			</CardActions>
		</Card>
	)
}
