//import React
import React from 'react'
//import combineReducers from 'redux'
import { combineReducers } from 'redux'

import physicalexameditor from './physicalexam'
import reviewofsystemseditor from './reviewofsystems'

//combine physicalexameditor and reviewofsystemseditor into one reducer
const formbuilder = combineReducers({ physicalexameditor, reviewofsystemseditor })

export default formbuilder

