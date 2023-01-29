import React from 'react'
import { useParams } from 'react-router-dom'
import { Field, FieldArray, useFormikContext } from 'formik'
import Card from '../../../basestyledcomponents/Card/Card'
import CardHeader from '../../../basestyledcomponents/Card/CardHeader'
import CardBody from '../../../basestyledcomponents/Card/CardBody'
import { makeStyles } from '@material-ui/core/styles'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { TextField } from 'formik-mui'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button'

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
			<Card>
				<CardHeader color="primary">
					<h4 className={classes.cardTitleWhite}>
						<AssignmentIcon /> Allergies
					</h4>
				</CardHeader>
				<CardBody>
					<FieldArray name="details.allergies">
						{({ remove, push }) => (
							<div>
								{values.details.allergies &&
								values.details.allergies.length > 0
									? values.details.allergies.map(
											(allergy, index) => (
												<div
													key={index}
													style={{
														display: 'flex',
														flexDirection: 'row',
													}}>
													<Field
														style={{
															margin: '15px',
														}}
														InputLabelProps={{
															shrink: true,
														}}
														name={`details.allergies[${index}].allergy`}
														label={`Allergy`}
														type={`text`}
														variant="standard"
														component={TextField}
														fullWidth
													/>
													<Field
														style={{
															margin: '15px',
														}}
														InputLabelProps={{
															shrink: true,
														}}
														name={`details.allergies[${index}].notes`}
														label={`Notes`}
														type={`text`}
														variant="standard"
														component={TextField}
														fullWidth
													/>
													<Button
														color={`error`}
														variant={`contained`}
														onClick={() =>
															remove(index)
														}>
														-
													</Button>
												</div>
											)
									  )
									: null}
								<Button
									color="primary"
									onClick={() => {
										push({ allergy: '', notes: '' })
									}}>
									Add New Allergy
								</Button>
							</div>
						)}
					</FieldArray>
				</CardBody>
			</Card>
		</div>
	)
}

/*
* <GridContainer>
										<GridItem xs={12} sm={12} md={12}>
											<MUIDataTable
												title={'Allergies'}
												data={values.allergies}
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
