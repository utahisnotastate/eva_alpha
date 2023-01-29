import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import style from '../../../basestyledcomponents/Table/contentAreas'
import { useFormikContext } from 'formik'
import InsuranceCollapsibleTable from './insurance.collapsibletable'

const useStyles = makeStyles(style)

export default function Insurance() {
	let { id } = useParams()
	const classes = useStyles()
	const { values } = useFormikContext()

	return <InsuranceCollapsibleTable />
}
