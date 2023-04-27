import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Collapse,
	Box,
	Typography,
} from '@material-ui/core'
import { FieldArray, useFormikContext } from 'formik'

const useStyles = makeStyles((theme) => ({
	tableContainer: {
		margin: 'auto',
	},
	tableHeadCell: {
		fontWeight: 'bold',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	prescriptionHistoryTitle: {
		fontWeight: 'bold',
	},
}))

const MedicationTable = () => {
	const [open, setOpen] = useState({})
	const classes = useStyles()
	const { values } = useFormikContext()

	const handleRowClick = (id) => {
		setOpen((prevOpen) => ({ ...prevOpen, [id]: !prevOpen[id] }))
	}

	return (
		<TableContainer className={classes.tableContainer}>
			<Table aria-label="medications table">
				<TableHead>
					<TableRow>
						<TableCell className={classes.tableHeadCell}>
							Medication Name
						</TableCell>
						<TableCell
							align="right"
							className={classes.tableHeadCell}>
							Dosage
						</TableCell>
						<TableCell
							align="right"
							className={classes.tableHeadCell}>
							Status
						</TableCell>
						<TableCell
							align="right"
							className={classes.tableHeadCell}>
							Last Refill
						</TableCell>
						<TableCell
							align="right"
							className={classes.tableHeadCell}>
							Next Refill
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<FieldArray name={`medications`}>
						{({ push, remove }) => (
							<div>
								{values.medications.map((medication, index) => (
									<React.Fragment key={index}>
										<TableRow
											onClick={() =>
												handleRowClick(index)
											}>
											<TableCell
												component="th"
												scope="row">
												{medication.name}
											</TableCell>
											<TableCell align="right">
												{medication.dosage}
											</TableCell>
											<TableCell align="right">
												{medication.status}
											</TableCell>
											<TableCell align="right">
												{medication.lastRefill}
											</TableCell>
											<TableCell align="right">
												{medication.nextRefill}
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell
												style={{
													paddingBottom: 0,
													paddingTop: 0,
												}}
												colSpan={5}>
												<Collapse
													in={open[index]}
													timeout="auto"
													unmountOnExit>
													<Box margin={1}>
														<Typography
															variant="h6"
															gutterBottom
															component="div"
															className={
																classes.prescriptionHistoryTitle
															}>
															Prescription History
														</Typography>
														<Table
															size="small"
															aria-label="prescription history">
															<TableHead>
																<TableRow>
																	<TableCell>
																		Name
																	</TableCell>
																	<TableCell>
																		Dosage
																	</TableCell>
																	<TableCell>
																		Date
																		Written
																	</TableCell>
																	<TableCell>
																		Notes
																	</TableCell>
																</TableRow>
															</TableHead>
															<TableBody></TableBody>
														</Table>
													</Box>
												</Collapse>
											</TableCell>
										</TableRow>
									</React.Fragment>
								))}
							</div>
						)}
					</FieldArray>
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default MedicationTable

/*
* <TableBody>
					{values.medications.map((medication, index) => (
						<React.Fragment key={index}>
							<TableRow onClick={() => handleRowClick(index)}>
								<TableCell component="th" scope="row">
									{medication.name}
								</TableCell>
								<TableCell align="right">
									{medication.dosage}
								</TableCell>
								<TableCell align="right">
									{medication.status}
								</TableCell>
								<TableCell align="right">
									{medication.lastRefill}
								</TableCell>
								<TableCell align="right">
									{medication.nextRefill}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									style={{ paddingBottom: 0, paddingTop: 0 }}
									colSpan={5}>
									<Collapse
										in={open[index]}
										timeout="auto"
										unmountOnExit>
										<Box margin={1}>
											<Typography
												variant="h6"
												gutterBottom
												component="div"
												className={
													classes.prescriptionHistoryTitle
												}>
												Prescription History
											</Typography>
											<Table
												size="small"
												aria-label="prescription history">
												<TableHead>
													<TableRow>
														<TableCell>
															Name
														</TableCell>
														<TableCell>
															Dosage
														</TableCell>
														<TableCell>
															Date Written
														</TableCell>
														<TableCell>
															Notes
														</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{medication.history.map(
														(prescription, idx) => (
															<TableRow key={idx}>
																<TableCell>
																	{
																		prescription.name
																	}
																</TableCell>
																<TableCell>
																	{
																		prescription.dosage
																	}
																</TableCell>
																<TableCell>
																	{
																		prescription.date_written
																	}
																</TableCell>
																<TableCell>
																	{
																		prescription.notes
																	}
																</TableCell>
															</TableRow>
														)
													)}
												</TableBody>
											</Table>
										</Box>
									</Collapse>
								</TableCell>
							</TableRow>
						</React.Fragment>
					))}
				</TableBody>v
*
*
* */
