import React, { useState, useEffect } from 'react'
import {
	Container,
	TextField,
	Typography,
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material'

const ConditionsAPI = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [conditions, setConditions] = useState([])

	const fetchConditions = async () => {
		const response = await fetch(
			`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${searchTerm}`
		)
		const data = await response.json()
		setConditions(data[3])
	}

	useEffect(() => {
		if (searchTerm) {
			fetchConditions()
		}
	}, [searchTerm])

	return (
		<Container>
			<Typography variant="h4" gutterBottom>
				Conditions API
			</Typography>
			<TextField
				label="Search"
				variant="outlined"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<Button
				variant="contained"
				color="primary"
				onClick={() => fetchConditions()}>
				Search
			</Button>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Condition Name</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{conditions.map((condition, index) => (
							<TableRow key={index}>
								<TableCell>{condition[0]}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	)
}

export default ConditionsAPI
