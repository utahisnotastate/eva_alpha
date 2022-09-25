import React, { useEffect } from 'react'
import AirlineSeatLegroomExtraIcon from '@material-ui/icons/AirlineSeatLegroomExtra'
import PersonIcon from '@material-ui/icons/Person'
import PeopleIcon from '@material-ui/icons/People'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import CustomTabs from '../basestyledcomponents/CustomTabs/CustomTabs'
import AppointmentsList from '../Home/appointments.table'
import Patients from '../Patients/patients'

export default function ClinicalQueue() {
	const [stages, setStates] = React.useState([
		{ title: 'Todays Appointments' },
		{ title: 'In Waiting Room' },
		{ title: 'Waiting in Exam room' },
		{ title: 'In Progress' },
	])
	return (
		<div
			styles={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-around',
			}}>
			<CustomTabs
				headerColor={`primary`}
				tabs={[
					{
						tabName: 'Todays Appointments',
						tabIcon: AirlineSeatLegroomExtraIcon,
						tabContent: (
							<div>
								<AppointmentsList
									title={`Appointments`}
									data={[
										[
											'Joe James',
											'Test Corp',
											'Yonkers',
											'NY',
										],
										[
											'John Walsh',
											'Test Corp',
											'Hartford',
											'CT',
										],
										[
											'Bob Herm',
											'Test Corp',
											'Tampa',
											'FL',
										],
										[
											'James Houston',
											'Test Corp',
											'Dallas',
											'TX',
										],
									]}
								/>
							</div>
						),
					},
					{
						tabName: 'Requests',
						tabIcon: PeopleIcon,
						tabContent: (
							<div>
								<AppointmentsList
									title={`Requests`}
									data={[
										[
											'Joe James',
											'Test Corp',
											'Yonkers',
											'NY',
										],
										[
											'John Walsh',
											'Test Corp',
											'Hartford',
											'CT',
										],
										[
											'Bob Herm',
											'Test Corp',
											'Tampa',
											'FL',
										],
										[
											'James Houston',
											'Test Corp',
											'Dallas',
											'TX',
										],
									]}
								/>
							</div>
						),
					},
					{
						tabName: 'Patients',
						tabIcon: PersonIcon,
						tabContent: <Patients />,
					},
					{
						tabName: 'Quick Actions',
						tabIcon: HowToRegIcon,
						tabContent: (
							<div>
								<p>Today's appointments</p>
							</div>
						),
					},
				]}
			/>
		</div>
	)
}

/*
<CustomTabs headerColor={`primary`} tabs={[]} />
<GridContainer alignContent="center" direction="column">
			<GridItem sm={9} xs={12}>

			</GridItem>
		</GridContainer>
[
						{
							tabName: 'Todays Appointments',
							tabIcon: AirlineSeatLegroomExtraIcon,
							tabContent: (
								<ClinicalQueueTable
									tableSettings={TodaysAppointmentsSettings}
									tableData={[]}
								/>
							)
						},
						{
							tabName: 'Waiting List',
							tabIcon: PeopleIcon,
							tabContent: (
								<ClinicalQueueTable
									tableSettings={TodaysAppointmentsSettings}
									tableData={[]}
								/>
							)
						},
						{
							tabName: 'Patients',
							tabIcon: PersonIcon,
							tabContent: (
								<ClinicalQueueTable
									tableSettings={TodaysAppointmentsSettings}
									tableData={[]}
								/>
							)
						},
							{
								tabName: 'New Patients',
								tabIcon: HowToRegIcon,
								tabContent: (
									<ClinicalQueueTable
										tableSettings={TodaysAppointmentsSettings}
										tableData={[]}
									/>
								)
							]}
import InWaitingRoomSettings from './ClinicalQueueTable/ClinicalQueueTableSettings/inwaitingroom.settings'
import InExamRoomSettings from './ClinicalQueueTable/ClinicalQueueTableSettings/waitinginexamroom.settings'
import AppointmentInProgressSettings from './ClinicalQueueTable/ClinicalQueueTableSettings/appointmentinprogress.settings'
import RecentlyCompletedAppointmentSettings from './ClinicalQueueTable/ClinicalQueueTableSettings/recentlycompleted.settings'
import API_URL from '../../api/api_url'



<CustomTabs
          headerColor="primary"
          tabs={[
            {
              tabName: "Todays Upcoming Appointments",
              tabIcon: AirlineSeatLegroomExtraIcon,
              tabContent: (
                <ClinicalQueueTable
                  clinicalqueuefilter="scheduled"
                  columnheaders={TodaysAppointmentsSettings.columnheaders}
                  // table_actions={TodaysAppointmentsSettings.actions}
                  data={clinicalqueue}
                  title={TodaysAppointmentsSettings.title}
                />
              ),
            },
            {
              tabName: "In Waiting Room",
              tabIcon: AirlineSeatLegroomExtraIcon,
              tabContent: (
                <ClinicalQueueTable
                  clinicalqueuefilter="arrived"
                  columnheaders={InWaitingRoomSettings.columnheaders}
                  // table_actions={InWaitingRoomSettings.actions}
                  data={clinicalqueue}
                  title={InWaitingRoomSettings.title}
                />
              ),
            },
            {
              tabName: "Waiting in examination room",
              tabIcon: PersonIcon,
              tabContent: (
                <ClinicalQueueTable
                  clinicalqueuefilter="in_exam_room"
                  columnheaders={InExamRoomSettings.columnheaders}
                  // table_actions={InExamRoomSettings.actions}
                  data={clinicalqueue}
                  title={InExamRoomSettings.title}
                />
              ),
            },
            {
              tabName: "Appointment in progress",
              tabIcon: PeopleIcon,
              tabContent: (
                <ClinicalQueueTable
                  columnheaders={AppointmentInProgressSettings.columnheaders}
                  data={clinicalqueue}
                  table_actions={AppointmentInProgressSettings.actions}
                  title={AppointmentInProgressSettings.title}
                />
              ),
            },
            {
              tabName: "Recently Completed",
              tabIcon: HowToRegIcon,
              tabContent: (
                <ClinicalQueueTable
                  columnheaders={
                    RecentlyCompletedAppointmentSettings.columnheaders
                  }
                  data={clinicalqueue}
                  table_actions={RecentlyCompletedAppointmentSettings.actions}
                  title={RecentlyCompletedAppointmentSettings.title}
                />
              ),
            },
          ]}
          title="Clinical Queue"
        />
 */

/*
/ const [{clinicalqueue}, dispatch] = useStateValue();
  console.log(useSelector((state) => state));
  const clinicalqueue = useSelector((state) => state.clinicalqueue);
  const dispatch = useDispatch();

  useEffect(() => {
    // gets appointments on mount
    const fetchData = async () => {
      const result = await axios.get(`${API_URL}/appointmentstoday/`);
      console.log(result);
      const appointments = result.data;

      return appointments;
      // console.log(appointments);
    };
    fetchData()
      .then((response) => {
        console.log(response);
        const modifiedappointments = [];
        response.forEach((appointment) => {
          const formattedstart = moment(appointment.start).format("h:mm");
          const formattedend = moment(appointment.end).format("h:mm");
          modifiedappointments.push({
            ...appointment,
            ...{ start: formattedstart },
          });
        });
        dispatch({
          type: "initial_load",
          newclinicalqueue: modifiedappointments,
        });
      })
      .catch((error) => console.log(error));
  }, []);
 */
