import * as React from 'react'
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
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

function Row(props) {
	const theme = useTheme()
	const { request } = props
	const [open, setOpen] = React.useState(false)
	const { values } = useFormikContext()

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
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>Time</TableCell>
										<TableCell>Update</TableCell>
										<TableCell>Notes</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{props.request.updates.map(
										(update, index) => (
											<TableRow key={index}>
												<TableCell
													component="th"
													scope="row">
													<Typography>
														{update.time}
													</Typography>
												</TableCell>
												<TableCell>
													<Typography>
														{update.update}
													</Typography>
												</TableCell>
												<TableCell align="right">
													<Typography>
														{update.notes}
													</Typography>
												</TableCell>
											</TableRow>
										)
									)}
								</TableBody>
								<TableFooter>
									<TableRow>
										<TableCell colSpan={3}>
											<Button
												variant="contained"
												color="primary"
												startIcon={<AddIcon />}
												onClick={() => {
													values.requests.updates.push(
														{
															time: '',
															update: '',
															notes: '',
														}
													)
												}}>
												Add Update
											</Button>
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

export default function RequestsCollapsibleTable({ requests, arrayHelpers }) {
	const theme = useTheme()
	const { values } = useFormikContext()

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
								<Row
									key={index}
									request={request}
									arrayHelpers={arrayHelpers}
								/>
						  ))
						: null}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>
							<Button
								variant="contained"
								color="primary"
								startIcon={<AddIcon />}
								onClick={() => {
									values.requests.push({
										type: '',
										status: '',
										description: '',
										updates: [
											{
												time: '',
												update: '',
												notes: '',
											},
										],
									})
								}}>
								Add Request to maintain
							</Button>
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	)
	// create button that will add a new request
}

/*
<TableRow>
						<TableCell colSpan={4}>
							<Button
								variant="contained"
								color="primary"
								onClick={() => {
									requests.push({
										type: '',
										status: '',
										description: '',
										updates: [],
									})
								}}
								startIcon={<AddIcon />}>
								Add Request
							</Button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>

* <TableFooter>
									<TableRow>
										<TableCell colSpan={3}>Total</TableCell>
										<TableCell align="right">
											$0.00
										</TableCell>
									</TableRow>
								</TableFooter>
*
*
* */
