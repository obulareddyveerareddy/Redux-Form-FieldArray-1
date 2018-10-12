import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import { Field, FieldArray, reduxForm, formValueSelector } from "redux-form";
import FleetFieldArray from "./FleetFieldArray";
import { SubscribeFleetProvider } from "./FleetContext";

class FieldArraysForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    location: PropTypes.shape({
      state: PropTypes.shape({
        selected: PropTypes.arrayOf(PropTypes.object)
      })
    }),
    onSelectionChange: PropTypes.func,
    onSubmit: PropTypes.func
  };
  state = {
    selectedMembers: []
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.onSubmit)}>
        <SubscribeFleetProvider>
          <FieldArray name="selected" component={FleetFieldArray} />
        </SubscribeFleetProvider>
      </form>
    );
  }
}
export default reduxForm({
  form: "fleetForm"
})(FieldArraysForm);
