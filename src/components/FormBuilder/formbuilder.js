import * as React from 'react'
import { useSelector } from 'react-redux'
import CardBody from '../basestyledcomponents/Card/CardBody'
import Card from '../basestyledcomponents/Card/Card'
import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import CardFooter from '../basestyledcomponents/Card/CardFooter'
import CardActions from '@mui/material/CardActions'
import CustomForm from '../CustomForm/customform'

//create a MUI style object for the form builder

export default function FormBuilder() {
	const zones = useSelector((state) => state.zones)
	return (
		<Card>
			<CardBody style={{ display: 'flex', flexDirection: 'row' }}>
				<List style={{ flexGrow: 1 }}>
					{zones && zones.length > 0
						? zones.map((zone, index) => (
								<ListItem key={index} disablePadding>
									<ListItemButton>
										<ListItemText primary={zone.zone} />
									</ListItemButton>
								</ListItem>
						  ))
						: null}
				</List>
				<div style={{ flexGrow: 3 }}>
					<CustomForm fields={[]} />
				</div>
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
