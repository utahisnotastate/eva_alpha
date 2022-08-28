import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import { useDispatch } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Field, FieldArray } from 'formik'
import { TextField } from 'formik-mui'
import Button from '@mui/material/Button'

function Row(props) {
	const { row, headertitle } = props
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
					{row.ICD10diagnosiscode}
				</TableCell>

				<TableCell align="left">
					{row.ICD10diagnosislongdescription}
				</TableCell>
				<TableCell align="left">
					{row.ICD10diagnosisshortdescription}
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell
					style={{ paddingBottom: 0, paddingTop: 0 }}
					colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography
								variant="h6"
								gutterBottom
								component="div">
								{headertitle}
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>Date</TableCell>
										<TableCell>Customer</TableCell>
										<TableCell align="right">
											Amount
										</TableCell>
										<TableCell align="right">
											Total price ($)
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<Typography variant="body2" component="div">
										Coming Soon{' '}
									</Typography>
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	)
}
/*
* <TableCell>Dessert (100g serving)</TableCell>
						<TableCell align="right">Calories</TableCell>
						<TableCell align="right">Fat&nbsp;(g)</TableCell>
						<TableCell align="right">Carbs&nbsp;(g)</TableCell>
						<TableCell align="right">Protein&nbsp;(g)</TableCell>
* */

export default function CollapsibleTable({ tableheaderlabels, values }) {
	const [newICD10diagnosiscode, setNewICD10diagnosiscode] = React.useState('')
	const [
		newICD10diagnosislongdescription,
		setNewICD10diagnosislongdescription,
	] = React.useState('')
	const [
		newICD10diagnosisshortdescription,
		setNewICD10diagnosisshortdescription,
	] = React.useState('')
	return (
		<TableContainer>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell />
						{tableheaderlabels.map((label, index) => (
							<TableCell key={index}>{label}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{values && values.length > 0
						? values.map((row, index) => (
								<Row key={index} row={row} />
						  ))
						: null}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell>
							<Field
								style={{
									margin: '15px',
								}}
								InputLabelProps={{
									shrink: true,
								}}
								name={`newICD10diagnosiscode`}
								label={`Diagnosis Code`}
								type={`text`}
								variant="standard"
								component={TextField}
								fullWidth
							/>
						</TableCell>
						<TableCell>
							<Field
								style={{
									margin: '15px',
								}}
								InputLabelProps={{
									shrink: true,
								}}
								name={`newICD10diagnosislongdescription`}
								label={`Long Description`}
								type={`text`}
								variant="standard"
								component={TextField}
								fullWidth
							/>
						</TableCell>
						<TableCell>
							<Field
								style={{
									margin: '15px',
								}}
								InputLabelProps={{
									shrink: true,
								}}
								name={`newICD10diagnosisshortdescription`}
								label={`Short Description`}
								type={`text`}
								variant="standard"
								component={TextField}
								fullWidth
							/>
						</TableCell>
						<TableCell>
							<Button
								variant="contained"
								color="primary"
								onClick={() => {
									setNewICD10diagnosiscode('')
									setNewICD10diagnosislongdescription('')
									setNewICD10diagnosisshortdescription('')
								}}>
								Add
							</Button>
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	)
}

/*
* <TableBody>
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.date}>
											<TableCell
												component="th"
												scope="row">
												{historyRow.date}
											</TableCell>
											<TableCell>
												{historyRow.customerId}
											</TableCell>
											<TableCell align="right">
												{historyRow.amount}
											</TableCell>
											<TableCell align="right">
												{Math.round(
													historyRow.amount *
														row.price *
														100
												) / 100}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
*
*
* */
