import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { AppBar, Toolbar, Autocomplete, TextField } from '@mui/material'
import { AccountPopover } from './account-popover'

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	boxShadow: theme.shadows[3],
}))

export const DashboardNavbar = (props) => {
	const { onSidebarOpen, patients, ...other } = props
	const settingsRef = useRef(null)
	const [openAccountPopover, setOpenAccountPopover] = useState(false)

	return (
		<>
			<DashboardNavbarRoot
				sx={{
					left: {
						lg: 280,
					},
					width: {
						lg: 'calc(100% - 280px)',
					},
				}}
				{...other}>
				<Toolbar
					disableGutters
					sx={{
						minHeight: 64,
						left: 0,
						px: 2,
					}}>
					<Autocomplete
						options={patients}
						sx={{ width: '100vw' }}
						renderInput={(params) => (
							<TextField
								sx={{ width: '80%' }}
								{...params}
								label="Search Patient"
								InputProps={{
									...params.InputProps,
									type: 'search',
								}}
								variant="outlined"
							/>
						)}
					/>
				</Toolbar>
			</DashboardNavbarRoot>
			<AccountPopover
				anchorEl={settingsRef.current}
				open={openAccountPopover}
				onClose={() => setOpenAccountPopover(false)}
			/>
		</>
	)
}

DashboardNavbar.propTypes = {
	onSidebarOpen: PropTypes.func,
}
