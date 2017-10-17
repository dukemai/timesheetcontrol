import React from 'react';
import PropTypes from 'prop-types';

import SectionOptions from './SectionOptions';
import ArticlesList from './ArticlesList';

const propTypes = {
};
const defaultProps = {
};

const Page = ({ }) => (
    <div>
        <SectionOptions />
        <ArticlesList />
    </div>    
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;