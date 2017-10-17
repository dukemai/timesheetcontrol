import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    isEnabled: PropTypes.bool,
    title: PropTypes.string,
    onClick: PropTypes.func,
};
const defaultProps = {
    isEnabled: false,
    title: '',
    onClick: () => {},
};
const Toggle = ({ title, isEnabled, onClick }) => (
    <div className="control">
        <div className="tags has-addons">
        <span className="tag">{title}</span>
            <a
                href="#"
                className={`tag ${isEnabled ? 'is-success' : 'is-danger'}`}
                onClick={onClick}
            >
                {isEnabled ? 'On' : 'Off'}
            </a>
        </div>
    </div>
);

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;