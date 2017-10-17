import { TOGGLE_SECTION, LOAD_ARTICLES } from '../actions/ActionTypes';
import _ from 'lodash';

const INITIAL_STATE = {
  sections: [
    {
      title: 'Nyheter',
      select: true,
    },
    {
      title: 'Shtlm',
      select: true,
    },
  ],
  readingArticles: [
  ],
  basketList: [

  ],
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
      return {
        ...state,
        readingArticles: [...articles],
      };
    default:
      return state;
  }
};
export default page;
