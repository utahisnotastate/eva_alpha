import React from 'react'
import MUIDataTable from 'mui-datatables'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		margin: 'auto',
		width: '50%',
	},
}))

export default function Requests() {
	const classes = useStyles()

	const columns = ['Name', 'Company', 'City', 'State']
	const data = [
		['Joe James', 'Test Corp', 'Yonkers', 'NY'],
		['John Walsh', 'Test Corp', 'Hartford', 'CT'],
		['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
		['James Houston', 'Test Corp', 'Dallas', 'TX'],
	]

	return (
		<div>
			<MUIDataTable title="Requests" data={data} columns={columns} />
		</div>
	)
}
