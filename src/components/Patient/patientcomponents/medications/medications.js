import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFormikContext, Formik, Form, Field, FieldArray } from 'formik'
import Grid from '@material-ui/core/Grid'
import GridContainer from '../../../basestyledcomponents/Grid/GridContainer'
import GridItem from '../../../basestyledcomponents/Grid/GridItem'
import Card from '../../../basestyledcomponents/Card/Card'
import CardHeader from '../../../basestyledcomponents/Card/CardHeader'
import CardBody from '../../../basestyledcomponents/Card/CardBody'
import { makeStyles } from '@material-ui/core/styles'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { TextField } from 'formik-mui'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: 20,
	},
	formcontainer: {
		marginBottom: 15,
	},
	areaicon: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 15,
	},
	areatitletext: {
		padding: 20,
	},
})

export default function Allergies() {
	let { id } = useParams()
	const classes = useStyles()
	const dispatch = useDispatch()
	const { values } = useFormikContext()

	return (
		<div style={{ margin: '20px' }}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<Card>
						<CardHeader color="primary">
							<h4 className={classes.cardTitleWhite}>
								<AssignmentIcon /> Medications
							</h4>
						</CardHeader>
						<CardBody>
							<FieldArray name="details.medications">
								{({ insert, remove, push }) => (
									<div>
										{values.details.medications &&
										values.details.medications.length > 0
											? values.details.medications.map(
													(allergy, index) => (
														<div
															key={index}
															style={{
																display: 'flex',
																flexDirection:
																	'row',
															}}>
															<Field
																style={{
																	margin: '15px',
																}}
																InputLabelProps={{
																	shrink: true,
																}}
																name={`details.medications[${index}].drugname`}
																label={`Name`}
																type={`text`}
																variant="standard"
																component={
																	TextField
																}
																fullWidth
															/>
															<Field
																style={{
																	margin: '15px',
																}}
																InputLabelProps={{
																	shrink: true,
																}}
																name={`details.medications[${index}].prescribed_by`}
																label={`Prescribed By`}
																type={`text`}
																variant="standard"
																component={
																	TextField
																}
																fullWidth
															/>
														</div>
													)
											  )
											: null}
										<button
											type="button"
											className="secondary"
											onClick={() =>
												push({
													drugname: '',
													prescribed_by: '',
												})
											}>
											Add Medication
										</button>
									</div>
								)}
							</FieldArray>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	)
}

/*
* <GridContainer>
										<GridItem xs={12} sm={12} md={12}>
											<MUIDataTable
												title={'Allergies'}
												data={values.medications}
												columns={[
													{
														name: 'allergy',
														label: 'Allergy',
														options: {
															filter: true,
															sort: true,
														},
													},
													{
														name: 'reaction',
														label: 'Reaction',
														options: {
															filter: true,
															sort: true,
														},
													},
													{
														name: 'severity',
														label: 'Severity',
														options: {
															filter: true,
															sort: true,
														},
													},
												]}
											/>
										</GridItem>
									</GridContainer>
*
* */
