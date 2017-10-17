import React from 'react';
import PropTypes from 'prop-types';

import Toggle from './Toggle';

const propTypes = {
    title: PropTypes.string,
    isEnabled: PropTypes.bool,
    onToggle: PropTypes.func,
};
const defaultProps = {
    title: '',
    isEnabled: false,
    onToggle: () => {},
};

const SectionOption = ({ title, isEnabled, onToggle }) => (
    <li className="is-pulled-left section-option">
        <Toggle onClick={onToggle} title={title} isEnabled={isEnabled} />
    </li>    
);

SectionOption.propTypes = propTypes;
SectionOption.defaultProps = defaultProps;

export default SectionOption;