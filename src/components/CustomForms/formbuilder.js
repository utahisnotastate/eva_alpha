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
	Button,
} from '@mui/material'
import CardFooter from '../basestyledcomponents/Card/CardFooter'
import CardActions from '@mui/material/CardActions'

export default function FormBuilder({ form }) {
	return (
		<Card>
			<CardHeader color="primary" title={form.title} />

			<CardBody>
				{form.fields &&
					form.fields.map(
						(
							{
								fullWidth,
								helperText,
								label,
								options,
								type,
								variant,
								zone,
								style,
							},
							index
						) => (
							<div key={index}>
								<Typography>
									<TextField
										className={style}
										name={`${label}.value`}
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

			<CardFooter>
				<CardActions>
					<Button size="small">Add</Button>
					<Button size="small">Save</Button>
				</CardActions>
			</CardFooter>
		</Card>
	)
}

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
