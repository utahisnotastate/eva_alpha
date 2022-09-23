import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import { Field } from 'formik'
import { TextField } from 'formik-mui'
import Button from '@mui/material/Button'
import Row from './collapsibletable.row'
import { useState } from 'react'

export default function CollapsibleTable({ tableheaderlabels, values }) {
	const [newIcd10, setnewIcd10] = useState('')
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
								value={newIcd10}
								onChange={(e) => {
									setnewIcd10(e.target.value)
								}}
								label={`Diagnosis Code`}
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
									console.log('click')
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
* function Row(props) {
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
*
*
* */
