import * as React from 'react'
import { Box, Container, Grid } from '@mui/material'
import MetricsTracker from './MetricsTracker'
import Schedule from '../Scheduling/Schedule'
import Requests from '../Requests/Requests'

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
					<Grid item lg={8} md={12} xl={9} xs={12}>
						<Schedule />
					</Grid>
					<Grid item lg={4} md={6} xl={3} xs={12}>
						<Requests />
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
