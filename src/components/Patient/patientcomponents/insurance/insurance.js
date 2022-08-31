import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import style from '../../../basestyledcomponents/Table/contentAreas'
import { useFormikContext } from 'formik'
import InsuranceCollapsibleTable from './insurance.collapsibletable'

const useStyles = makeStyles(style)

export default function Insurance() {
	let { id } = useParams()
	const classes = useStyles()
	const { values } = useFormikContext()

	// <Modal buttontext={`Add Insurance`} form={AddInsuranceForm} />

	return <InsuranceCollapsibleTable />
}

/*
<Card>
			<CardBody>
				<CardHeader color="primary">
					<h4 className={classes.cardTitleWhite}>
						<AssignmentIcon /> Insurance
					</h4>
				</CardHeader>
				<InsuranceCollapsibleTable />
			</CardBody>
			<CardActions>
				<Button
					color="primary"
					onClick={() => {
						props.setOpen(true)
					}}>
					Add Insurance
				</Button>
			</CardActions>
		</Card>

* <FieldArray name="details.insurance">
								{({ insert, remove, push }) => (
									<div>
										{values.details.insurance &&
										values.details.insurance.length > 0 ? (
											values.details.insurance.map(
												(insurance, index) => (
													<div
														key={index}
														style={{
															display: 'flex',
															flexDirection:
																'row',
															marginBottom: 15,
														}}>
														<InsuranceCard
															insurance={
																insurance
															}
															index={index}
															remove={remove}
															insert={insert}
															push={push}
														/>
													</div>
												)
											)
										) : (
											<NoInsuranceListed />
										)}
									</div>
								)}
							</FieldArray>
*
*
*
* */

/*async function getPatientInsurances() {
        const result = await axios.get(`${API_URL}/patients/${id}/insurance/`)
        const insurances = result.data;
        return insurances;

    }*/
/*const data = [
  {
    id: 1,
    insurance_name: "name 1",
    tradingPartnerId: "tp 1",
    group_ID: "sdfsdf",
    bin_number: "sdsdsdds",
    pcn: "ddd",
    type: "primary",
    member_id: "dfsdfsdf",
    relationship_code: "ssss",
    active: true,
    date_effective: "2020-05-24",
    date_terminated: "",
    copay_amount: "50",
  },
  {
    id: 2,
    insurance_name: "name 2",
    tradingPartnerId: "tp 2",
    group_ID: "asasd",
    bin_number: "aa",
    pcn: "2222",
    type: "secondary",
    member_id: "222222",
    relationship_code: "22222",
    active: true,
    date_effective: "2020-05-24",
    date_terminated: "",
    copay_amount: "100",
  },
  {
    id: 3,
    insurance_name: "name 3",
    tradingPartnerId: "tp 3",
    group_ID: "3333",
    bin_number: "3333",
    pcn: "3333",
    type: "333",
    member_id: "333",
    relationship_code: "333",
    active: true,
    date_effective: "333",
    date_terminated: "333",
    copay_amount: "3333",
  },
  {
    id: 4,
    insurance_name: "name 4",
    tradingPartnerId: "tp 4",
    group_ID: "4444",
    bin_number: "44",
    pcn: "4444",
    type: "444",
    member_id: "4444444",
    relationship_code: "444444",
    active: true,
    date_effective: "44444",
    date_terminated: "4444",
    copay_amount: "4444",
  },
  {
    id: 5,
    insurance_name: "name 5",
    tradingPartnerId: "5555",
    group_ID: "5555",
    bin_number: "5555",
    pcn: "5555",
    type: "secondary",
    member_id: "55555",
    relationship_code: "5555",
    active: true,
    date_effective: "",
    date_terminated: "",
    copay_amount: "444444",
  },
];*/

/*
        /*if(response.length === 0) {
                dispatch({type: 'patient_has_no_insurance'});
            } else {
                dispatch({type: 'patient_has_insurance'});
                console.log(response.find(findPrimaryInsurance));
                dispatch({type: 'set_primary_insurance', primary_insurance: response.find(findPrimaryInsurance) });
                console.log(response.find(findSecondaryInsurance));
                if(response.find(findSecondaryInsurance) === false) {
                    dispatch({type: 'set_secondary_insurance', secondary_insurance: null})
                } else {
                    dispatch({type: 'set_secondary_insurance', secondary_insurance: response.find(findSecondaryInsurance) })
                }
            }


  const hasinsurance = useSelector((state) => state.patient.hasinsurance);
  const primary_insurance = useSelector(
    (state) => state.patient.primaryinsurance
  );
  const secondary_insurance = useSelector(
    (state) => state.patient.secondaryinsurance
  );
  function findPrimaryInsurance(insurance) {
    return (
      insurance.type === "primary" &&
      insurance.date_effective &&
      insurance.date_terminated === null
    );
  }

  function findSecondaryInsurance(insurance) {
    return (
      insurance.type === "secondary" &&
      insurance.date_effective &&
      insurance.date_terminated === null
    );
  }
      {hasinsurance ? (
        <GridContainer justify="center">
          <InsuranceCard
            insurance_type="primaryinsurance"
            insurance={primary_insurance}
          />
          <InsuranceCard
            insurance_type="secondaryinsurance"
            insurance={secondary_insurance}
          />
        </GridContainer>
      ) : (
        <NoInsuranceListed />
      )}
 */
