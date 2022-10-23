import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'
import columns from './FCHomeComponents/formscentertable.columns'
import './formscenter.css'

const useStyles = makeStyles({
	root: {
		padding: 15,
	},
})
const options = {
	elevation: 0,
	enableNestedDataAccess: '.',
	selectableRows: 'none',
}

export default function FormsCenterHome() {
	const { url } = useRouteMatch()
	const classes = useStyles()
	const dispatch = useDispatch()
	const forms = useSelector((state) => state.forms)

	return (
		<MUIDataTable
			title={'Forms'}
			data={forms}
			columns={columns}
			options={options}
		/>
	)
}

/*
* <div className={classes.root}>
			<GridContainer>
				<GridItem md={4} xs={10}>
					<CustomFormsCard
						forms={forms}
						listlabel={`Physical Exam`}
						typeOfFormToShow={'physical_exam'}
						url={url}
					/>
				</GridItem>
				<GridItem md={4} xs={10}>
					<CustomFormsCard
						forms={forms}
						listlabel={`Review Of Systems`}
						typeOfFormToShow={'review_of_systems'}
						url={url}
					/>
				</GridItem>
			</GridContainer>
		</div>
*
* */
