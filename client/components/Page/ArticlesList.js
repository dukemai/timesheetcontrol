import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from './Card';
import { removeArticleFromReading, readArticle } from '../../actions';

const propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({})),
    removeCardClicked: PropTypes.func,
    readClicked: PropTypes.func,
    onTicked: PropTypes.func,
};
const defaultProps = {
    articles: [],
    removeCardClicked: () => {},
    readClicked: () => {},
    onTicked: () => {},
};

const ArticlesList = ({ articles, removeCardClicked, readClicked, readingTime, onTicked }) => (
    <div className="article-list">
        {articles.map(article => (
            <Card
                title={article.title}
                author={article.author}
                key={article.id}
                published={article.published}
                section={article.section}
                removeClicked={() => removeCardClicked(article)}
                readClicked={() => readClicked(article)}
                isReading={article.isReading}
                body={article.body}
                readingTime={article.readingTime}
                id={article.id}
                showCountDown={article.showCountDown}
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
    removeCardClicked: (article) => {
        dispatch(removeArticleFromReading(article));
    },
    readClicked: (article) => {
        dispatch(readArticle(article));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);