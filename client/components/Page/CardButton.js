import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    buttonTitle: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    buttonClassName: PropTypes.string,
    children: PropTypes.node,
};
const defaultProps = {
    title: '',
    buttonTitle: '',
    onClick: () => {},
    className: '',
    buttonClassName: '',
    children: null,
};

const CardButton = ({ className, buttonClassName, title, buttonTitle, onClick, children }) => (
    <div className={`card-footer-item ${className}`}>
        <span>
            {title} <a className={buttonClassName} onClick={(e) => { e.preventDefault(); onClick(e); }} href="#">{buttonTitle}</a>
        </span>
        {children}
    </div>
);

CardButton.propTypes = propTypes;
CardButton.defaultProps = defaultProps;

export default CardButton;