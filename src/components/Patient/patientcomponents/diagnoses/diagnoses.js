import React from 'react'
import { useParams } from 'react-router-dom'
import { useFormikContext } from 'formik'
import GridContainer from '../../../basestyledcomponents/Grid/GridContainer'
import GridItem from '../../../basestyledcomponents/Grid/GridItem'
import Card from '../../../basestyledcomponents/Card/Card'
import CardHeader from '../../../basestyledcomponents/Card/CardHeader'
import CardBody from '../../../basestyledcomponents/Card/CardBody'
import { makeStyles } from '@material-ui/core/styles'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { useDispatch } from 'react-redux'
import CollapsibleTable from './collapsibletable'

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

export default function Diagnoses() {
	let { id } = useParams()
	const classes = useStyles()
	const dispatch = useDispatch()
	const { values } = useFormikContext()
	const tableheaderlabels = [
		'ICD10 Diagnosis code',
		'ICD10 Long Dx Description',
		'ICD10 Short Dx Description',
	]

	return (
		<div style={{ margin: '20px' }}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					<Card>
						<CardHeader color="primary">
							<h4 className={classes.cardTitleWhite}>
								<AssignmentIcon /> Diagnoses
							</h4>
						</CardHeader>
						<CardBody>
							<CollapsibleTable
								headertitle={`Details`}
								tableheaderlabels={tableheaderlabels}
								values={values.details.diagnoses}
							/>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	)
}
