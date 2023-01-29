import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//import FormGenerator from '../../FormsCenter/FormGenerator/FormGenerator.js'
import './appointmentform.css'
import ActiveAppointmentForm from './activeappointmentform'

export default function AppointmentForm(props) {
	let { formId } = useParams()
	const dispatch = useDispatch()
	const allforms = useSelector((state) => state.allpracticeforms)
	//const [activeform, setActiveForm] = useState();
	// const formfields = useSelector(state => state.appointment.appointmentformfields);
	//allforms.find((form) => form.id == formId);

	return (
		<ActiveAppointmentForm
			appointmentId={props.appointmentId}
			formId={formId}
		/>
	)
}

/*
  const getAppointmentForm = async (appointmentId, formId) => {
    const result = await axios(
      `${API_URL}/appointments/${appointmentId}/forms/${formId}/`
    );
    return result.data;
  };

<Card>
      <CardHeader color={`primary`}>
        <h4>{appointmentform.title}</h4>
        <h4>{appointmentform.form_type}</h4>
      </CardHeader>
      <CardBody>
        <ActiveAppointmentForm
          appointmentId={props.appointmentId}
          formId={formId}
        />
      </CardBody>
    </Card>


  useEffect(() => {
    //check if appointment has any forms associated with it
    getAppointmentForm(props.appointmentId, formId).then((result) => {
      console.log("form id response is " + JSON.stringify(result));
      dispatch({
        type: "load_active_appointment_form_details",
        details: {
          title: result.title,
          id: result.id,
          form_type: result.form_type,
        },
      });
      dispatch({ type: "load_active_form_fields", fields: result.form });
    });
  }, [props.appointmentId, formId]);
<FormTemplate appointmentId={props.appointmentId} formId={formId} />
<FormTemplate appointmentId={props.appointmentId} formId={formId} />

<Card>
            <CardHeader color={`primary`}>
                <h4>{title}</h4>
            </CardHeader>
            <CardBody>
                <FormGenerator formfields={form} />
            </CardBody>
        </Card>
 */
