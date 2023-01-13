import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GridItem from '../../../../basestyledcomponents/Grid/GridItem'
import Button from '../../../../basestyledcomponents/Button'
import { Paper, Typography } from '@material-ui/core'
import Modal from '../../../../basestyledcomponents/Modal/modal'
import AddInsuranceForm from '../../../../old/Forms/Administrative/addinsuranceform'

import Editinsuranceform from '../../../../old/Forms/Administrative/editinsuranceform'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Collapse from '@mui/material/Collapse'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import { Field } from 'formik'
import { CardActionArea } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { red } from '@mui/material/colors'
import { ExpandMore } from '@material-ui/icons'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { TextField } from 'formik-mui'

export default function InsuranceCard({ insurance }) {
	const [expanded, setExpanded] = useState(false)
	const handleExpandClick = () => {
		setExpanded(!expanded)
	}
	const insurancefields = [
		{ name: 'group', label: 'Group' },
		{ name: 'Issuer', label: 'Issuer' },
		{ name: 'membernumber', label: 'ID' },
	]
	const pharmacyfields = [
		{ name: 'rxbin', label: 'RxBIN' },
		{ name: 'rxpcn', label: 'RxPCN' },
		{ name: 'rxgroup', label: 'RxGroup' },
		{ name: 'rxid', label: 'RxID' },
	]

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-evenly',
				gap: '10px',
			}}>
			<Card>
				<CardContent>
					<Typography gutterBottom component="div">
						Scanned Card
					</Typography>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p">
							Front of Card
						</Typography>
						<CardMedia
							component="img"
							height="140"
							image={insurance.frontimage}
							alt="Front of Insurance Card"
						/>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p">
							Back of card
						</Typography>
						<CardMedia
							component="img"
							height="140"
							image={insurance.backimage}
							alt="green iguana"
						/>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardContent>
					<Typography paragraph>Insurance Details</Typography>
					{insurancefields.map((field, index) => (
						<Field
							key={index}
							InputLabelProps={{
								shrink: true,
							}}
							name={`details.insurance[${index}].${field.name}`}
							label={field.label}
							type={`text`}
							variant="standard"
							component={TextField}
							fullWidth
						/>
					))}
				</CardContent>
			</Card>
			<Card>
				<CardContent>
					<Typography paragraph>Pharmacy Benefits</Typography>
					{pharmacyfields.map((field, index) => (
						<Field
							key={index}
							InputLabelProps={{
								shrink: true,
							}}
							name={`details.insurance[${index}].${field.name}`}
							label={field.label}
							type={`text`}
							variant="standard"
							component={TextField}
							fullWidth
						/>
					))}
				</CardContent>
			</Card>
		</div>
	)
}

/*
<Card variant={`outlined`}>

			<CardContent>
				<Typography gutterBottom component="div">
					Scanned Card
				</Typography>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<CardMedia
						component="img"
						height="140"
						image={insurance.frontimage}
						alt="Front of Insurance Card"
					/>
					<CardMedia
						component="img"
						height="140"
						image={insurance.backimage}
						alt="green iguana"
					/>
				</div>
			</CardContent>
			<CardActions disableSpacing>
				<Typography variant="body2" color="textSecondary" component="p">
					Expand to see details
				</Typography>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more">
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>

			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Insurance Details</Typography>
					{insurancefields.map((field, index) => (
						<Field
							key={index}
							style={{
								margin: '15px',
							}}
							InputLabelProps={{
								shrink: true,
							}}
							name={`details.insurance[${index}].${field.name}`}
							label={field.label}
							type={`text`}
							variant="standard"
							component={TextField}
							fullWidth
						/>
					))}
					<Typography paragraph>Pharmacy Benefits</Typography>
					{pharmacyfields.map((field, index) => (
						<Field
							key={index}
							style={{
								margin: '15px',
							}}
							InputLabelProps={{
								shrink: true,
							}}
							name={`details.insurance[${index}].${field.name}`}
							label={field.label}
							type={`text`}
							variant="standard"
							component={TextField}
							fullWidth
						/>
					))}
				</CardContent>
				<CardContent>
					<Typography paragraph>
						Heat oil in a (14- to 16-inch) paella pan or a large,
						deep skillet over medium-high heat. Add chicken, shrimp
						and chorizo, and cook, stirring occasionally until
						lightly browned, 6 to 8 minutes. Transfer shrimp to a
						large plate and set aside, leaving chicken and chorizo
						in the pan. Add pimentón, bay leaves, garlic, tomatoes,
						onion, salt and pepper, and cook, stirring often until
						thickened and fragrant, about 10 minutes. Add saffron
						broth and remaining 4 1/2 cups chicken broth; bring to a
						boil.
					</Typography>
					<Typography paragraph>
						Add rice and stir very gently to distribute. Top with
						artichokes and peppers, and cook without stirring, until
						most of the liquid is absorbed, 15 to 18 minutes. Reduce
						heat to medium-low, add reserved shrimp and mussels,
						tucking them down into the rice, and cook again without
						stirring, until mussels have opened and rice is just
						tender, 5 to 7 minutes more. (Discard any mussels that
						don&apos;t open.)
					</Typography>
					<Typography>
						Set aside off of the heat to let rest for 10 minutes,
						and then serve.
					</Typography>
				</CardContent>
			</Collapse>
		</Card>




* <GridItem xs={4}>
            <Card>
                <div style={{padding: 15}}>
                    <div style={{marginBottom: 15}}>
                        <Typography variant={`h5`}>{insurance.type}</Typography>
                    </div>
                    <div>
                        <Typography>Insurance Name:{insurance.insurance_name}</Typography>
                        <Typography>Member Number: {insurance.member_id} </Typography>
                        <Typography>Group Number: {insurance.group_ID}</Typography>
                        <Typography>Bin Number: {props.insurance.bin_number}</Typography>
                        <Typography>PCN Number: {insurance.pcn}</Typography>
                        <Typography>Relationship to Subscriber: {insurance.relationship_code}</Typography>
                        <Typography>Date Coverage Began {insurance.date_effective}</Typography>
                        <Typography>Copay Amount: {insurance.copay_amount}</Typography>
                    </div>
                    <div>
                        <Modal button form={Editinsuranceform} formprops={insurance}  buttontext={`Edit`}/>
                    </div>
                </div>
            </Card>
        </GridItem>
*
* */
