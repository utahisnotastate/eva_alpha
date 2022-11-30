import Grid from '@material-ui/core/Grid'
import { Field } from 'formik'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import React from 'react'
import Card from '../../../../../../basestyledcomponents/Card/Card'
import Button from '../../../../../../basestyledcomponents/Button'
import CardHeader from '../../../../../../basestyledcomponents/Card/CardHeader'
import CardBody from '../../../../../../basestyledcomponents/Card/CardBody'
import DynamicAppointmentField from '../../../DynamicAppointmentForm/DynamicAppointmentField/dynamicappointmentfield'

export function Complaint(props) {
	return (
		<Grid item>
			<Box
				border={2}
				borderColor={`primary.main`}
				style={{ padding: '10px', margin: '10px' }}>
				<Grid container direction="column">
					<Grid item>
						<Grid
							container
							direction="row"
							justify={`space-between`}>
							<Grid item>
								<Typography>Complaint</Typography>
							</Grid>
							<Grid item>
								<Button
									color={`danger`}
									onClick={() =>
										props.arrayHelpers.remove(props.index)
									}>
									X
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid item>
							<Grid container direction="column">
								<Grid
									item
									className={props.classes.sectioncontainer}>
									<DynamicAppointmentField
										formname={props.name}
										index={props.index}
										label={`Onset`}
										type={`Date`}
										fieldname={`onset`}
									/>
								</Grid>
								<Grid
									item
									className={props.classes.headercontainer}>
									<DynamicAppointmentField
										formname={props.name}
										index={props.index}
										fullWidth
										fieldname={`complaint_name`}
									/>
								</Grid>
								<Grid
									item
									className={props.classes.headercontainer}>
									<DynamicAppointmentField
										formname={props.name}
										index={props.index}
										fullWidth
										multiline
										fieldname={`complaint_description`}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container direction="column">
							<Grid
								item
								className={props.classes.sectioncontainer}>
								<Typography>Provider's Notes</Typography>
								<DynamicAppointmentField
									formname={props.name}
									index={props.index}
									type={`TextArea`}
									fieldname={`other_notes`}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</Grid>
	)
}

/*
 */
