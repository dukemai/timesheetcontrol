import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from "react-chartjs";

const propTypes = {
};
const defaultProps = {
};

const chartData = [{
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Applications',
    value: 25
},
{
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Red',
    value: 25
},
{
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Red',
    value: 25
},
{
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Red',
    value: 25
}]

const Applications = ({ }) => (
    <Doughnut data={chartData} options={null} width="600" height="250"/>
);

Applications.propTypes = propTypes;
Applications.defaultProps = defaultProps;
export default Applications;