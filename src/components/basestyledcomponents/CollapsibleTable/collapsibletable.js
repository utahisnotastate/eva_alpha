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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function Row(props) {
	const { row } = props
	const [open, setOpen] = React.useState(false)
	return React.createElement(
		React.Fragment,
		null,
		React.createElement(
			TableRow,
			{ sx: { '& > *': { borderBottom: 'unset' } } },
			React.createElement(
				TableCell,
				null,
				React.createElement(
					IconButton,
					{
						'aria-label': 'expand row',
						size: 'small',
						onClick: () => setOpen(!open),
					},
					open
						? React.createElement(KeyboardArrowUpIcon, null)
						: React.createElement(KeyboardArrowDownIcon, null)
				)
			),
			React.createElement(
				TableCell,
				{ component: 'th', scope: 'row' },
				row.name
			),
			React.createElement(TableCell, { align: 'right' }, row.calories),
			React.createElement(TableCell, { align: 'right' }, row.fat),
			React.createElement(TableCell, { align: 'right' }, row.carbs),
			React.createElement(TableCell, { align: 'right' }, row.protein)
		),
		React.createElement(
			TableRow,
			null,
			React.createElement(
				TableCell,
				{ style: { paddingBottom: 0, paddingTop: 0 }, colSpan: 6 },
				React.createElement(
					Collapse,
					{ in: open, timeout: 'auto', unmountOnExit: true },
					React.createElement(
						Box,
						{ sx: { margin: 1 } },
						React.createElement(
							Typography,
							{
								variant: 'h6',
								gutterBottom: true,
								component: 'div',
							},
							'History'
						),
						React.createElement(
							Table,
							{ size: 'small', 'aria-label': 'purchases' },
							React.createElement(
								TableHead,
								null,
								React.createElement(
									TableRow,
									null,
									React.createElement(
										TableCell,
										null,
										'Date'
									),
									React.createElement(
										TableCell,
										null,
										'Customer'
									),
									React.createElement(
										TableCell,
										{ align: 'right' },
										'Amount'
									),
									React.createElement(
										TableCell,
										{ align: 'right' },
										'Total price ($)'
									)
								)
							),
							React.createElement(
								TableBody,
								null,
								row.history.map((historyRow) =>
									React.createElement(
										TableRow,
										{ key: historyRow.date },
										React.createElement(
											TableCell,
											{ component: 'th', scope: 'row' },
											historyRow.date
										),
										React.createElement(
											TableCell,
											null,
											historyRow.customerId
										),
										React.createElement(
											TableCell,
											{ align: 'right' },
											historyRow.amount
										),
										React.createElement(
											TableCell,
											{ align: 'right' },
											Math.round(
												historyRow.amount *
													row.price *
													100
											) / 100
										)
									)
								)
							)
						)
					)
				)
			)
		)
	)
}

export function CollapsibleTable({ headers, rows }) {
	return React.createElement(
		TableContainer,
		{ component: Paper },
		React.createElement(
			Table,
			{ 'aria-label': 'collapsible table' },
			React.createElement(
				TableHead,
				null,
				React.createElement(
					TableRow,
					null,
					React.createElement(TableCell, null),
					headers && headers.length > 0
						? headers.map((header, index) =>
								React.createElement(
									TableCell,
									{ key: index },
									header
								)
						  )
						: null
				)
			),
			React.createElement(
				TableBody,
				null,
				rows.map((row, index) =>
					React.createElement(Row, { key: index, row: row })
				)
			)
		)
	)
}
