import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "../../basestyledcomponents/Button";
import { useParams, useRouteMatch, NavLink } from "react-router-dom";
import Card from "../../basestyledcomponents/Card/Card";
import CardHeader from "../../basestyledcomponents/Card/CardHeader";
import CardBody from "../../basestyledcomponents/Card/CardBody";
import CardFooter from "../../basestyledcomponents/Card/CardFooter";
import FormGenerator from "../FormGenerator/FormGenerator";
import MedicalAppointmentForm from "../../Forms/components/MedicalAppointmentForm/medicalappointmentform";

const API_URL = "http://127.0.0.1:8000/api";

export default function FormPreview(props) {
  const dispatch = useDispatch();
  let { path, url } = useRouteMatch();

  let { formId } = useParams();
  const [title, setFormTitle] = useState("");
  const [type, setFormType] = useState("");
  const [formfields, setFormFields] = useState([]);

  // const title = useSelector(state => state.formsmanager.newform.newformtitle);
  //const fields = useSelector(state => state.formsmanager.newform.newformfields);
  // const previewtitle = useSelector(state => state.formsmanager.formpreview.previewtitle);
  // const previewfields = useSelector(state => state.formsmanager.formpreview.previewfields);

  /*    useEffect(() => {

        fetchForm(formId).then(response => {
            console.log(response);
            //setTitle(response.title);
            //setFields(response.form);
            // dispatch({type: 'update_preview_title', title: response.title})
            /!*fetchFormFields(formId).then(response => {
                dispatch({type: 'load_fields', fields: response});
            })*!/

        })
    }, []);*/

  return (
    <Grid container>
      <Grid item xs={10}>
        <Card>
          <CardHeader color={`primary`}>
            <NavLink to={`/formscenter/${formId}/edit/`}>
              <Button color={`primary`}>Back to form editor</Button>
            </NavLink>
          </CardHeader>
          <CardBody>
            <MedicalAppointmentForm formId={formId} showSubmitButton={true} />
          </CardBody>
        </Card>
      </Grid>
    </Grid>
  );
}

/*
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control: methods.control, // control props comes from useForm (optional: if you are using FormContext)
      name: "customformfields", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );
  const methods = useForm({
    defaultValues: {
      customformfields: [],
    },
  });
  useEffect(() => {
    console.log(formId);

    fetchForm(formId).then((response) => {
      console.log("Form editor API call is: " + JSON.stringify(response));
      setFormTitle(response.title);
      setFormType(response.form_type);
      if (response.form) {
        console.log("response form is: " + JSON.stringify(response.form));
        let currentfields = formfields;
        //console.log(formfields);
        let newfields = [...formfields, ...response.form.customformfields];
        // setFormFields([...formfields, ...response.form.customformfields]);
        //console.log(newfields);
        setFormFields(newfields);
        append(response.form.customformfields);
      } else {
        remove();
      }
    });
  }, [formId]);
 <FormGenerator fields={fields} />
const fetchFormDetails = async () => {
            const result = await axios(`${API_URL}/forms/${formId}/`);
            return result.data;
        };
 */
