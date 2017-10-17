import _ from 'lodash';
import articles from './articles';

export function loadArticles(section) {
    if(!section) {
        console.log(articles);
        return articles;
    } else {
        return _.find(articles, { section });
    }
}