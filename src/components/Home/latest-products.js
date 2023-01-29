import * as React from 'react'
import { formatDistanceToNow, subHours } from 'date-fns'
import { v4 as uuid } from 'uuid'
import {
	Box,
	Button,
	Card,
	CardHeader,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const products = [
	{
		id: uuid(),
		name: 'Utah Hans',
		imageUrl: '/static/images/products/product_1.png',
		updatedAt: subHours(Date.now(), 2),
	},
	{
		id: uuid(),
		name: 'Chris Mulik',
		imageUrl: '/static/images/products/product_2.png',
		updatedAt: subHours(Date.now(), 2),
	},
	{
		id: uuid(),
		name: 'Sofi Turner',
		imageUrl: '/static/images/products/product_3.png',
		updatedAt: subHours(Date.now(), 3),
	},
	{
		id: uuid(),
		name: 'Melissa',
		imageUrl: '/static/images/products/product_4.png',
		updatedAt: subHours(Date.now(), 5),
	},
	{
		id: uuid(),
		name: 'Sanna',
		imageUrl: 'https://pbs.twimg.com/media/DAJYVA_VoAAMBCD.jpg',
		updatedAt: subHours(Date.now(), 9),
	},
]

const LatestProducts = (props) => (
	<Card {...props}>
		<CardHeader
			subtitle={`${products.length} in total`}
			title="Open Requests"
		/>
		<Divider />
		<List>
			{products.map((product, i) => (
				<ListItem divider={i < products.length - 1} key={product.id}>
					<ListItemAvatar>
						<img
							alt={product.name}
							src={product.imageUrl}
							style={{
								height: 48,
								width: 48,
							}}
						/>
					</ListItemAvatar>
					<ListItemText
						primary={product.name}
						secondary={`Updated ${formatDistanceToNow(
							product.updatedAt
						)}`}
					/>
					<IconButton edge="end" size="small">
						<MoreVertIcon />
					</IconButton>
				</ListItem>
			))}
		</List>
		<Divider />
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'flex-end',
				p: 2,
			}}>
			<Button
				color="primary"
				endIcon={<ArrowRightIcon />}
				size="small"
				variant="text">
				View all
			</Button>
		</Box>
	</Card>
)

export default LatestProducts
