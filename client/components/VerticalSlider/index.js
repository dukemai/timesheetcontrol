import React from 'react';
import PropTypes from 'prop-types';

import Piece from '../Piece'
import Seperator from '../Seperator'

import './style.scss';

const propTypes = {
};
const defaultProps = {
};

const VerticalSlider = ({ }) => (
    <div className="slider slider--vertical">
        <Piece />
        <Seperator />
        <Piece />
    </div>    
);

VerticalSlider.propTypes = propTypes;
VerticalSlider.defaultProps = defaultProps;

export default VerticalSlider;