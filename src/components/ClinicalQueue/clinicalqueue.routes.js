import AirlineSeatLegroomExtraIcon from '@material-ui/icons/AirlineSeatLegroomExtra'
import ClinicalQueueTable from './ClinicalQueueTable/clinicalqueuetable'

const clinicalqueueRoutes = [
	{
		tabName: 'Todays Upcoming Appointments',
		tabIcon: AirlineSeatLegroomExtraIcon,
		clinicalqueuefilter:"scheduled",
		columnheaders:
		tabContent() {
			return (
				<ClinicalQueueTable />
			);
		}
	},
]
