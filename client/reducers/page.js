import { TOGGLE_SECTION, LOAD_ARTICLES, REMOVE_ARTICLE_FROM_READING, READ_ARTICLE, COUNT_DOWN_ARTICLE } from '../actions/ActionTypes';
import _ from 'lodash';

const INITIAL_STATE = {
  sections: [
    {
      title: 'Nyheter',
      select: true,
    },
    {
      title: 'Sthlm',
      select: true,
    },
  ],
  readingArticles: [
  ],
  basketList: [

  ],
  readingTime: 60000/6,
};

const page = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SECTION:
      const { section } = action;
      const modified = _.find(state.sections, { title: section.title });
      modified.select = section.select;
      return {
        ...state,
        sections: [...state.sections],
      }
    case LOAD_ARTICLES:
      const { articles } = action;
      const readingArticles = articles.map((article) => {
        return article;
      });
      return {
        ...state,
        readingArticles: [...articles],
      };
    case READ_ARTICLE: {
      const { article } = action;
      const {readingArticles} = state;
      const modified = _.find(readingArticles, article);
      modified.isReading = true;
      modified.readingTime = state.readingTime;
      return {
        ...state,
        readingArticles: [...readingArticles],
      };
    }
    case COUNT_DOWN_ARTICLE: {
      const { articleId, readingTime } = action;
      const {readingArticles} = state;
      const modified = _.find(readingArticles, { id: articleId });
      if (modified) {
        modified.readingTime = readingTime;
      }
      return {
        ...state,
        readingArticles: [...readingArticles],
      };
    }
    case REMOVE_ARTICLE_FROM_READING: {
      const { article } = action;
      const { basketList, readingArticles } = state;
      basketList.push(article);
      _.remove(readingArticles, article);
      return {
        ...state,
        basketList: [...basketList],
        readingArticles: [...readingArticles],
      };
    }
    default:
      return state;
  }
};
export default page;
