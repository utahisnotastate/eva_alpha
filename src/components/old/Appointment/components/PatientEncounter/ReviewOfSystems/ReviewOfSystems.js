import React from 'react'
import { Typography } from '@mui/material'
import { Field } from 'formik'

export default function ReviewOfSystems({ systems }) {
	return (
		<div>
			<Typography variant="h6">Review of Systems</Typography>
			<>
				<>
					<Typography>System Name</Typography>
					<ul style={{ listStyleType: 'none' }}>
						<li>
							<Typography variant={`body1`}>Field 1</Typography>
							<>
								<label>
									<Field
										type="radio"
										name="picked"
										value="One"
									/>
									One
								</label>
								<label>
									<Field
										type="radio"
										name="picked"
										value="Two"
									/>
									Two
								</label>
							</>
						</li>
						<li>
							<Typography variant={`body1`}>Field 2</Typography>
						</li>
						<li>
							<Typography variant={`body1`}>Field 3</Typography>
						</li>
					</ul>
				</>
			</>
		</div>
	)
}
