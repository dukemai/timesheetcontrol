import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';

const propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    published: PropTypes.string,
    isReading: PropTypes.bool,
    section: PropTypes.string,
    body: PropTypes.string,
};
const defaultProps = {
    title: '',
    author: '',
    published: '',
    isReading: false,
    section: '',
    body: '',
};

const Modal = ({ title, author, published, body, section }) => (
    <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
            <div className="modal-card-body">
                <h4>
                    <strong>
                        {title}
                    </strong>
                </h4>
                <p className="content">
                    <span className="tag is-primary">
                        {section}
                    </span> @{published}, {author}
                </p>
                <p className="content">
                    {body}
                </p>
            </div>
            <footer className="modal-card-foot">
                <span className="tag is-primary">
                    <Countdown className="tag" date={Date.now() + 60000} />
                </span>    
            </footer>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
    </div>   
);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;