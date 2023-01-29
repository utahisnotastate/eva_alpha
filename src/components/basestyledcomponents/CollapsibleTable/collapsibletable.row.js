import * as React from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function Row(props) {
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
