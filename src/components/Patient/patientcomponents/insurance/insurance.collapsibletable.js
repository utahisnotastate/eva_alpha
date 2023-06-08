import React from 'react'
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
import InsuranceCard from './InsuranceCard/insurancecard'
import TableFooter from '@mui/material/TableFooter'
import Divider from '@mui/material/Divider'
import { DoNotDisturb } from '@mui/icons-material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'

function Row(props) {
	const theme = useTheme()
	const { insurance, index } = props
	const [open, setOpen] = React.useState(false)
	const { values, setFieldValue } = useFormikContext()

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
					{insurance.active ? (
						<Chip
							label="Active"
							color="success"
							icon={<CheckCircleOutlineIcon />}
						/>
					) : (
						<Chip
							label="Inactive"
							color="error"
							icon={<DoNotDisturb />}
						/>
					)}
				</TableCell>
				<TableCell>
					<Typography>{insurance.membernumber}</Typography>
				</TableCell>
				<TableCell>
					<Typography>{insurance.company}</Typography>
				</TableCell>
				<TableCell>
					<Typography>{insurance.eligibiltybegan}</Typography>
				</TableCell>
				<TableCell>
					<Typography>{insurance.eligibiltyexpired}</Typography>
				</TableCell>
				<TableCell align={`center`}>
					<Typography>
						{insurance.dateeligibitylastchecked}
					</Typography>
				</TableCell>
				<TableCell align={`center`}>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => {
							const insurance = values.details.insurance
							//remove insurance from array
							insurance.splice(index, 1)

							setFieldValue('details.insurance', insurance)
						}}>
						Delete
					</Button>
				</TableCell>
			</TableRow>
			<TableRow sx={{ bgcolor: '#f3f3f3' }}>
				<TableCell
					style={{ paddingBottom: 0, paddingTop: 0, marginTop: 10 }}
					colSpan={12}>
					<Collapse in={open} timeout="auto">
						<InsuranceCard insurance={insurance} />
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	)
}

/*
* {row.history.map((historyRow) => (
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
*
* */

export default function InsuranceCollapsibleTable() {
	const theme = useTheme()
	const { values, setFieldValue } = useFormikContext()
	const blankInsurance = {
		active: true,
		memberNumber: '',
		company: '',
		eligibilityBegan: '',
		eligibilityEnded: '',
		eligibilityLastCheckedOn: '',
	}
	return (
		<TableContainer component={Paper}>
			<Box style={{ backgroundColor: theme.palette.primary.main }}>
				<Typography
					variant="h4"
					style={{
						color: theme.palette.primary.contrastText,
					}}>
					Insurance
				</Typography>
				<Divider />
			</Box>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>
							<Typography>Active</Typography>
						</TableCell>
						<TableCell>
							<Typography>Member Number</Typography>
						</TableCell>
						<TableCell>
							<Typography>Company</Typography>
						</TableCell>

						<TableCell>
							<Typography>Eligibility Began</Typography>
						</TableCell>
						<TableCell align={`left`}>
							<Typography>Eligibility Ended</Typography>
						</TableCell>
						<TableCell align={`left`}>
							<Typography>Eligibility Last Checked On</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{values.details.insurance &&
					values.details.insurance.length > 0
						? values.details.insurance.map((insurance, index) => (
								<Row
									key={index}
									insurance={insurance}
									index={index}
								/>
						  ))
						: null}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={12}>
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center">
								<Typography>
									{values.details.insurance &&
									values.details.insurance.length > 0
										? `${values.details.insurance.length} insurance(s)`
										: 'No insurance'}
								</Typography>
								<Button
									variant="contained"
									color="primary"
									onClick={() => {
										const insurance =
											values.details.insurance
										const newInsurance = {
											active: true,
											backimage: '',
											frontimage: '',
											membernumber: '',
											company: '',
											eligibilitybegan: '',
											eligibilityexpired: '',
											eligibilityLastCheckedOn: '',
										}
										const merged = [
											...insurance,
											newInsurance,
										]
										setFieldValue(
											'details.insurance',
											merged
										)
									}}>
									<Typography>Add Insurance</Typography>
								</Button>
							</Box>
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	)
}
