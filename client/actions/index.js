import { TOGGLE_SECTION, LOAD_ARTICLES } from './ActionTypes';
import { loadArticles as loadArticlesFromData } from '../data';

export function toggleSection(section) {
    return (dispatch, getState) => {
        section.select = !section.select;
        dispatch({
            type: TOGGLE_SECTION,
            section,
        });
    }
}

export function loadArticles(section) {
    const articles = loadArticlesFromData(section)
    console.log(articles);
    return {
        type: LOAD_ARTICLES,
        articles,
    }
}