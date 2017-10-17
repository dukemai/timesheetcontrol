import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';

import CardButton from './CardButton';
import IfComponent from './IfComponent';

const propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    published: PropTypes.string,
    isReading: PropTypes.bool,
};
const defaultProps = {
    title: '',
    author: '',
    published: '',
    isReading: false,
};

const Card = ({ title, author, published, body, isReading }) => (
    <div className="card">
        <div className="card-content">
            <p className="title">
                {title}
            </p>
            <p className="content">
                @{published}, {author}
            </p>
            <IfComponent
                condition={isReading}
                whenTrue={(
                    <div className="content">
                        <p>
                            {body}
                        </p>
                    </div>    
                )}
                whenFalse={null}
            />
        </div>
        <footer className="card-footer">
            <CardButton
                title="Dela till"
                buttonTitle="Facebook"
            />
            <CardButton
                buttonTitle="Läsa"
            >
                 <IfComponent
                    condition={isReading}
                    whenTrue={(
                        <span className="tag is-primary">
                            <Countdown className="tag" date={Date.now() + 100000} />
                        </span>    
                    )}
                    whenFalse={null}
                />
            </CardButton>
            <CardButton
                buttonTitle="Ta bort"
                buttonClassName="button is-danger"
            />
        </footer>
    </div>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;