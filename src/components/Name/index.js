import React from 'react';
import TextField from 'material-ui/TextField';

const Name = ({ text, onChange }) => (
  <TextField
    id="name"
    value={text}
    onChange={onChange}
  />
);

export default Name;
