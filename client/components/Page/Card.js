import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CardButton from './CardButton';
import IfComponent from './IfComponent';
import CountDown from './CountDown';
import { countDownArticle, stopCountDown } from '../../actions';

const propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    author: PropTypes.string,
    published: PropTypes.string,
    isReading: PropTypes.bool,
    section: PropTypes.string,
    removeClicked: PropTypes.func,
    readClicked: PropTypes.func,
    onTicked: PropTypes.func,
    timerCompleted: PropTypes.func,
    body: PropTypes.string,
    readingTime: PropTypes.number,
    showCountDown: PropTypes.bool,
};
const defaultProps = {
    title: '',
    id: '',
    author: '',
    published: '',
    isReading: false,
    section: '',
    removeClicked: () => {},
    readClicked: () => {},
    onTicked: () => {},
    timerCompleted: () => {},
    body: '',
    readingTime: 0,
    showCountDown: true,
};

class Card extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { title, author, published, body, isReading, section, removeClicked, readClicked,
            readingTime, timerCompleted, onTicked, id, showCountDown, stopCountingClicked }
            = this.props;

        return (
            <div className="card">
                <div className="card-content">
                    <IfComponent
                        condition={isReading && showCountDown}
                        whenTrue={(
                                <span className="tag card-content__count-down is-warning">
                                <CountDown
                                    className="tag"
                                    time={readingTime}
                                    onComplete={timerCompleted}
                                    onNextTick={(span) => { onTicked(id, span); }}
                                    id={id}
                                />
                            </span>    
                        )}
                        whenFalse={null}
                    />
                    <p className="title">
                        {title}
                    </p>
                    <p className="content">
                        <span className="tag is-primary">
                            {section}
                        </span> @{published}, {author}
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
                     <IfComponent
                        condition={isReading}
                        whenTrue={(
                            <CardButton
                                onClick={readClicked}
                            >
                                <div className="tags has-addons">
                                    <span className="tag is-info">Läser...</span>
                                    <a
                                        href="#"
                                        className="tag is-warning"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            stopCountingClicked(id);
                                        }}
                                    >Avsluta räkna</a>
                                </div>
                            </CardButton>
                        )}
                        whenFalse={(
                            <CardButton
                                buttonTitle="Läsa"
                                onClick={readClicked}
                            />
                        )}
                     />   
                    <CardButton
                        buttonTitle="Ta bort"
                        buttonClassName="button is-danger"
                        onClick={removeClicked}
                    />
                </footer>
            </div>
        );
    }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    timerCompleted: () => {
        ownProps.removeClicked();
    },
    onTicked: (id, readingTime) => {
        dispatch(countDownArticle(id, readingTime));
    },
    stopCountingClicked: (id) => {
       dispatch(stopCountDown(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);