import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  condition: PropTypes.bool,
  whenTrue: PropTypes.node,
  whenFalse: PropTypes.node,
};

const defaultProps = {
  condition: false,
  whenFalse: null,
  whenTrue: null,
};

const IfComponent = ({ condition, whenFalse, whenTrue }) => (condition ? whenTrue : whenFalse);

IfComponent.propTypes = propTypes;
IfComponent.defaultProps = defaultProps;

export default IfComponent;
