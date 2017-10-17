import _ from 'lodash';
import articles from './articles';

export function loadArticles(sections) {
    if(!sections || !sections.length) {
        return articles;
    } else {
        const arr = _.filter(articles, (article) => {
            return sections.indexOf(article.section) > -1
        });
        return arr;
    }
}

export function removeArticleFromReading(article) {
   _.remove(articles, article);
   return articles;
}