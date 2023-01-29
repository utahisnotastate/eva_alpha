import MUIDataTable from 'mui-datatables'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import createCache from '@emotion/cache'
import { DevSupport } from '@react-buddy/ide-toolbox'
import { ComponentPreviews, useInitial } from '../../dev'

const muiCache = createCache({
	key: 'mui-datatables',
	prepend: true,
})

function App() {
	const [responsive, setResponsive] = useState('vertical')
	const [tableBodyHeight, setTableBodyHeight] = useState('400px')
	const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState('')
	const [searchBtn, setSearchBtn] = useState(true)
	const [downloadBtn, setDownloadBtn] = useState(true)
	const [printBtn, setPrintBtn] = useState(true)
	const [viewColumnBtn, setViewColumnBtn] = useState(true)
	const [filterBtn, setFilterBtn] = useState(true)

	const columns = [
		{ name: 'Name', options: { filterOptions: { fullWidth: true } } },
		'Title',
		'Location',
	]

	const options = {
		search: searchBtn,
		download: downloadBtn,
		print: printBtn,
		viewColumns: viewColumnBtn,
		filter: filterBtn,
		filterType: 'dropdown',
		responsive,
		tableBodyHeight,
		tableBodyMaxHeight,
		onTableChange: (action, state) => {
			console.log(action)
			console.dir(state)
		},
	}

	const data = [
		['Gabby George', 'Business Analyst', 'Minneapolis'],
		[
			'Aiden Lloyd',
			"Business Consultant for an International Company and CEO of Tony's Burger Palace",
			'Dallas',
		],
		['Jaden Collins', 'Attorney', 'Santa Ana'],
		['Franky Rees', 'Business Analyst', 'St. Petersburg'],
		['Aaren Rose', null, 'Toledo'],
		['Johnny Jones', 'Business Analyst', 'St. Petersburg'],
		['Jimmy Johns', 'Business Analyst', 'Baltimore'],
		['Jack Jackson', 'Business Analyst', 'El Paso'],
		['Joe Jones', 'Computer Programmer', 'El Paso'],
		['Jacky Jackson', 'Business Consultant', 'Baltimore'],
		['Jo Jo', 'Software Developer', 'Washington DC'],
		['Donna Marie', 'Business Manager', 'Annapolis'],
	]

	return (
		<MUIDataTable
			title={'Patients'}
			data={data}
			columns={columns}
			options={options}
		/>
	)
}

ReactDOM.render(
	<DevSupport
		ComponentPreviews={ComponentPreviews}
		useInitialHook={useInitial}>
		<App />
	</DevSupport>,
	document.getElementById('root')
)
