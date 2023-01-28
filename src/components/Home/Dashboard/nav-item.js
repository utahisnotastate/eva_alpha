import * as React from 'react'
import { Box, Button, ListItem } from '@mui/material'

export const NavItem = (props) => {
	const { href, icon, title, ...others } = props

	return (
		<ListItem
			disableGutters
			sx={{
				display: 'flex',
				mb: 0.5,
				py: 0,
				px: 2,
				color: '#002F6C',
			}}
			{...others}>
			<Button
				component="a"
				startIcon={icon}
				disableRipple
				sx={{
					borderRadius: 1,
					justifyContent: 'flex-start',
					px: 3,
					textAlign: 'left',
					textTransform: 'none',

					'&:hover': {
						backgroundColor: 'rgba(255,255,255, 0.08)',
					},
				}}>
				<Box sx={{ flexGrow: 1 }}>{title}</Box>
			</Button>
		</ListItem>
	)
}
