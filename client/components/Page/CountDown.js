import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment-duration-format';

const propTypes = {
    time: PropTypes.number,
    onNextTick: PropTypes.func,
    onComplete: PropTypes.func,
    id: PropTypes.string,
};
const defaultProps = {
    time: 0,
    onNextTick: () => {},
    onComplete: () => {},
    id: '',
};

const step = 1000;

class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.setupTimeComputing = this.setupTimeComputing.bind(this);
        const { onNextTick, time, onComplete, id } = props;
        this.timers = {};
        this.setupTimeComputing(onNextTick, time, onComplete);
    }
    componentWillReceiveProps(nextProps) {
        const { onNextTick, time, id, onComplete } = nextProps;
        clearTimeout(this.timers[id]);
        this.setupTimeComputing(onNextTick, time, onComplete, id);
    }
    setupTimeComputing(onNextTick, time, onComplete, id) {
        if ( time === 0) {
            onComplete();   
        } else {
            const nextTick = time-step > 0 ? time-step : 0;
            this.timers[id] = setTimeout(() =>{ onNextTick(nextTick); }, step);
        }
    }
    componentWillUnmount() {
        const { id } = this.props;
        clearTimeout(this.timers[id]);
    }
    render() {
        const { time } = this.props;
        const timeToDisplay = moment.duration(time);
        return (
            <span className="timmer">
                {timeToDisplay.format('hh:mm:ss', { trim: false })}
            </span>    
        );
    }
}

CountDown.propTypes = propTypes;
CountDown.defaultProps = defaultProps;

export default CountDown;