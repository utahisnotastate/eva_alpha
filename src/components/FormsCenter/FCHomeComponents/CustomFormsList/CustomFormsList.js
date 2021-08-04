import React from "react";
import List from "@material-ui/core/List";
import CustomFormsListItem from "./CustomFormsListItem";
import _ from "lodash";

export default function CustomFormsList(props) {
  const filteredforms = props.forms.filter(
    (form) => form.form_type === props.typeOfFormToShow
  );
  /*
  key={() => _.uniqId()}
    <CustomFOrmsList
    forms={}
        typeOfFormToShow={`physical_exam}
    />
     */
  function generateKey() {
    return _.uniqId();
  }
  return (
    <List>
      {filteredforms.map((form) => (
        <CustomFormsListItem
          key={form.id}
          active={form.active}
          id={form.id}
          title={form.title}
          url={props.url}
        />
      ))}
    </List>
  );
}
