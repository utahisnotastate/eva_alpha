import React from "react";
import List from "@material-ui/core/List";
import CustomFormsListItem from "./CustomFormsListItem";

export default function CustomFormsList(props) {
  const filteredforms = props.forms.filter(
    (form) => form.form_type === props.typeOfFormToShow
  );
  /*
    <CustomFOrmsList
    forms={}
        typeOfFormToShow={`physical_exam}
    />
     */
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
