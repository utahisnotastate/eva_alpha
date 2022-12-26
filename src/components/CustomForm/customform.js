import React from 'react'
import CardHeader from '../basestyledcomponents/Card/CardHeader'
import CardBody from '../basestyledcomponents/Card/CardBody'
import Card from '../basestyledcomponents/Card/Card'
import {
	Typography,
	TextField,
	List,
	ListItem,
	ListItemText,
} from '@mui/material'

const CustomForm = (zone, fields, title, style) => (
	<Card>
		<CardHeader color="primary">
			<Typography>{title}</Typography>
		</CardHeader>
		<CardBody>
			{fields &&
				fields.map(
					(
						{
							class_name,
							fullWidth,
							helperText,
							label,
							options,
							type,
							variant,
							zone,
						},
						index
					) => (
						<div key={index}>
							<Typography>
								<TextField
									className={class_name}
									name={zone}
									label={label}
									type={type}
									variant={variant}
									fullWidth={fullWidth}
									helperText={helperText}
									options={options}
								/>
							</Typography>
							<List>
								{options &&
									options.map((option, index) => (
										<ListItem key={index}>
											<ListItemText>
												{option.label}
											</ListItemText>
										</ListItem>
									))}
							</List>
						</div>
					)
				)}
		</CardBody>
	</Card>
)
export default CustomForm

/*

{fields &&
fields.map(
	(
		{
			class_name,
			fullWidth,
			helperText,
			label,
			options,
			type,
			variant,
			zone,
		},
		index
	) => (
		<div key={index}>
			<Typography>
				<TextField
					className={class_name}
					name={zone}
					label={label}
					type={type}
					variant={variant}
					fullWidth={fullWidth}
					helperText={helperText}
					options={options}
				/>
			</Typography>
			<List>
				{options &&
					options.map((option, index) => (
						<ListItem key={index}>
							<ListItemText>{option.label}</ListItemText>
						</ListItem>
					))}
			</List>
		</div>
	)
)}*/
