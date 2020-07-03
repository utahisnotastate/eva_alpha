export function appointmentcomplaints(state = [], action) {
    switch (action.type) {
        case 'add_new_simple_complaint':
            return [...state, action.complaint];
        case 'load_complaints':
            return action.complaints;
        default:
            return state;
    }
}

export function newcomplaintinputfields(state = {patient_complaint: '', complaint_description: ''}, action) {
    switch (action.type) {
        case 'update_complaint_input_fields':
            return action.newcomplaint;
        default:
            return state;
    }
}

export function appointmentassessments(state = [], action) {
    switch (action.type) {
        case 'load_assessments':
            return action.assessments;
        case 'update_assessments':
            return action.assessments;
        case 'add_new_simple_assessment':
            return [...state, action.assessment];
        default:
            return state;

    }
}

export function assessmentinputfields(state = {
    icdcode: '',
    icd_description: ''
}, action) {
    switch (action.type) {
        case 'updated_icd10':
            return action.icd10value;
        case 'clear_inputs':
            return {icdcode: '', icd_description: ''};

        default:
            return state;
    }

}
export function appointmentforms(state = [], action){
    switch (action.type) {
        case 'load_all_appointment_forms':
            return action.forms;
        default:
            return state
    }
}
export function clinicalexamforms(state = [], action) {
    switch (action.type) {
        case 'load_all_clinical_exam_forms':
            return action.forms
        default:
            return state;

    }

}

export function reviewofsystemforms(state = [], action) {
    switch (action.type) {
        case 'load_all_ROS_forms':
            return action.forms;
        default:
            return state;

    }

}