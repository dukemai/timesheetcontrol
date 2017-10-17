import _ from 'lodash';

import { TOGGLE_SECTION, LOAD_ARTICLES, REMOVE_ARTICLE_FROM_READING, READ_ARTICLE, COUNT_DOWN_ARTICLE, STOP_COUNT_DOWN } from './ActionTypes';
import { loadArticles as loadArticlesFromData,
    removeArticleFromReading as removeArticleFromReadingFromData } from '../data';

export function toggleSection(section) {
    return (dispatch, getState) => {
        section.select = !section.select;
        dispatch({
            type: TOGGLE_SECTION,
            section,
        });
        dispatch(loadArticles());
    }
}

export function loadArticles() {
    return (dispatch, getState) => {
        const state = getState();
        const { sections } = state.page;
        const activeSections = _.filter(sections, { select: true }).map(s => s.title);
        const articles = loadArticlesFromData([...activeSections]);
        dispatch({
            type: LOAD_ARTICLES,
            articles,
        });
    }
}
export function removeArticleFromReading(article) {
    return (dispatch, getState) => {
        const readingArticles = removeArticleFromReadingFromData(article);
        dispatch({
            type: REMOVE_ARTICLE_FROM_READING,
            article,
            readingArticles
        });
    }
}
export function readArticle(article) {
   return {
        type: READ_ARTICLE,
        article,
   };
}
export function countDownArticle(articleId, readingTime) {
   return {
        type: COUNT_DOWN_ARTICLE,
        articleId,
        readingTime,
   };
}

export function stopCountDown(articleId) {
   return {
        type: STOP_COUNT_DOWN,
        articleId,
   };
}