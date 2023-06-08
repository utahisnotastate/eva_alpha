import React from 'react'
//import muidatatable component
import MUIDataTable from 'mui-datatables'

export default function AppointmentsList({ title, columns, data, options }) {
	return (
		<MUIDataTable
			title={title}
			data={data}
			columns={columns}
			options={options}
		/>
	)
}
