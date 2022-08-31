import * as React from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { useFormikContext } from 'formik'
import { useTheme } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import TableFooter from '@mui/material/TableFooter'

function Row(props) {
	const theme = useTheme()
	const { request } = props
	const [open, setOpen] = React.useState(false)

	return (
		<React.Fragment>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}>
						{open ? (
							<KeyboardArrowUpIcon />
						) : (
							<KeyboardArrowDownIcon />
						)}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					<Typography>{request.type}</Typography>
				</TableCell>
				<TableCell>
					<Typography>{request.status}</Typography>
				</TableCell>
				<TableCell>
					<Typography>{request.description}</Typography>
				</TableCell>
			</TableRow>
			<TableRow sx={{ bgcolor: '#f3f3f3' }}>
				<TableCell
					style={{ paddingBottom: 0, paddingTop: 0, marginTop: 10 }}
					colSpan={12}>
					<Collapse in={open} timeout="auto">
						<Paper>
							<Typography variant="body2" gutterBottom>
								Updates
							</Typography>
						</Paper>
						<Paper>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>Date Prescribed</TableCell>
										<TableCell>Refills</TableCell>
										<TableCell align="right">
											Dosage
										</TableCell>
										<TableCell align="right">
											Notes
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<Typography variant="body2">
										{' '}
										Soon{' '}
									</Typography>
								</TableBody>
								<TableFooter>
									<TableRow>
										<TableCell colSpan={3}>Total</TableCell>
										<TableCell align="right">
											$0.00
										</TableCell>
									</TableRow>
								</TableFooter>
							</Table>
						</Paper>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	)
}

export default function RequestsCollapsibleTable() {
	const theme = useTheme()
	const { values } = useFormikContext()
	const requests = [
		{
			type: 'Medication Refill',
			status: 'In Progress',
			description: 'This is the description',
			updates: [],
		},
		{
			type: 'Adverse Event',
			status: 'Urgent',
			description: 'This is the Adverse description',
			updates: [],
		},
		{
			type: 'Health Questions',
			status: 'Completed',
			description: 'This is the  description of the health question',
			updates: [],
		},
	]
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>
							<Typography>Expand</Typography>
						</TableCell>
						<TableCell>
							<Typography>Type</Typography>
						</TableCell>
						<TableCell>
							<Typography>Status</Typography>
						</TableCell>
						<TableCell>
							<Typography>Description</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{requests && requests.length > 0
						? requests.map((request, index) => (
								<Row key={index} request={request} />
						  ))
						: null}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
