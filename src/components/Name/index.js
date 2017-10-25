import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { nameSelector, setName } from './state';

const connectNameWithRedux = connect(
  state => ({
    name: nameSelector(state),
  }),
  dispatch => ({
    onChange: e => dispatch(setName(e.target.value)),
  }),
);

const Name = ({ text, onChange }) => (
  <TextField
    id="name"
    value={text}
    onChange={onChange}
  />
);

export default connectNameWithRedux(Name);
