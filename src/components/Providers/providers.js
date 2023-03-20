import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MUIDataTable from 'mui-datatables'
import { Button, Paper } from '@mui/material'
import ProviderModal from './providermodal'
import AddNewProviderModal from './addNewProvider'

const ProviderTable = () => {
	const providers = useSelector((state) => state.providers)
	const [selectedProvider, setSelectedProvider] = useState(null)
	const [modalOpen, setModalOpen] = useState(false)
	const [addNewProviderModalOpen, setAddNewProviderModalOpen] =
		useState(false)

	const handleModalOpen = (provider) => {
		setSelectedProvider(provider)
		setModalOpen(true)
	}

	const handleModalClose = () => {
		setModalOpen(false)
	}

	const handleAddNewProviderModalOpen = () => {
		setAddNewProviderModalOpen(true)
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
	const handleAddProvider = () => {
		handleModalOpen({
			id: null,
			title: '',
			first_name: '',
			last_name: '',
			npi: '',
		})
	}

	return (
		<Paper>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: 16,
				}}>
				<h2>Providers</h2>
				<Button onClick={() => setAddNewProviderModalOpen(true)}>
					Add New Provider
				</Button>
				<AddNewProviderModal
					open={addNewProviderModalOpen}
					handleClose={setAddNewProviderModalOpen}
				/>
			</div>
			<MUIDataTable
				data={providers}
				columns={columns}
				options={options}
			/>
			{selectedProvider && (
				<ProviderModal
					provider={selectedProvider}
					title="Edit Provider"
					open={modalOpen}
					handleClose={handleModalClose}
				/>
			)}
		</Paper>
	)
}

export default ProviderTable
