import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from './Card';

const propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({})),
};
const defaultProps = {
    articles: [],
};

const ArticlesList = ({ articles }) => (
    <div className="article-list">
        {articles.map(article => (
            <Card
                title={article.title}
                author={article.author}
                key={article.id}
                published={article.published}
            />
        ))}
    </div>    
);

ArticlesList.propTypes = propTypes;
ArticlesList.defaultProps = defaultProps;

const mapStateToProps = state => ({
    articles: state.page.readingArticles,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);