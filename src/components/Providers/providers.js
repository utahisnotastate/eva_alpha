import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MUIDataTable from 'mui-datatables'
import { Button } from '@mui/material'
import ProviderModal from './providermodal'

const ProviderTable = () => {
	const providers = useSelector((state) => state.providers)
	const [selectedProvider, setSelectedProvider] = useState(null)
	const [modalOpen, setModalOpen] = useState(false)

	const handleModalOpen = (provider) => {
		setSelectedProvider(provider)
		setModalOpen(true)
	}

	const handleModalClose = () => {
		setModalOpen(false)
	}

	const columns = [
		{ name: 'title', label: 'Title' },
		{ name: 'first_name', label: 'First Name' },
		{ name: 'last_name', label: 'Last Name' },
		{ name: 'npi', label: 'NPI' },
		{
			name: 'edit',
			label: 'Edit',
			options: {
				customBodyRender: (value, tableMeta) => {
					const provider = providers[tableMeta.rowIndex]
					return (
						<Button
							variant="outlined"
							onClick={() => handleModalOpen(provider)}>
							Edit
						</Button>
					)
				},
				filter: false,
				sort: false,
			},
		},
	]

	const options = {
		print: false,
		download: false,
		filter: false,
		viewColumns: false,
		selectableRows: 'none',
	}

	return (
		<>
			<MUIDataTable
				title={'Providers'}
				data={providers}
				columns={columns}
				options={options}
			/>
			{selectedProvider && (
				<ProviderModal
					provider={selectedProvider}
					open={modalOpen}
					handleClose={handleModalClose}
				/>
			)}
		</>
	)
}

export default ProviderTable
