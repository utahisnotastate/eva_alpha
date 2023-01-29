import * as React from 'react'
import { Box, Container, Grid } from '@mui/material'
import Appointments from './appointments'
import MetricsTracker from './MetricsTracker'
import TotalProfit from './total-profit'

function Metric({ label, value, feedback, col }) {
	return (
		<Grid item lg={col.lg} sm={col.sm} xl={col.xl} xs={col.xs}>
			<MetricsTracker label={label} value={value} feedback={feedback} />
		</Grid>
	)
}

const Home = () => (
	<>
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				py: 8,
			}}>
			<Container maxWidth={false}>
				<Grid container spacing={3}>
					<Metric
						label={`Patients in Waiting Room`}
						value={5}
						feedback={`Test This`}
						col={{ lg: 3, sm: 6, xl: 3, xs: 12 }}
					/>
					<Metric
						label="Appointments in Progress"
						value={1.6}
						feedback="Test This"
						col={{ lg: 3, sm: 3, xl: 3, xs: 12 }}
					/>
					<Metric
						label="Requests in Progress"
						value={1.6}
						feedback="Test This"
						col={{ lg: 3, sm: 6, xl: 3, xs: 12 }}
					/>
					<Grid item xl={3} lg={3} sm={6} xs={12}>
						<TotalProfit sx={{ height: '100%' }} />
					</Grid>
					<Grid item lg={8} md={12} xl={9} xs={12}>
						<Appointments />
					</Grid>
				</Grid>
			</Container>
		</Box>
	</>
)

export default Home

/*

<Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress/>
          </Grid>


* <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers/>
          </Grid>
*
*
*
*
* */
