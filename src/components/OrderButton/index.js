import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import withHandlers from 'recompose/withHandlers';

const withOnClick = withHandlers({
  onClick: ({ name, dishes }) => () => {
    console.log('Order ', `${name}: ${dishes}`);
  },
});

const OrderButton = ({ onClick }) => (
  <RaisedButton
    label="Order"
    primary
    onClick={onClick}
  />
);

export default withOnClick(OrderButton);
