import produce from 'immer';

import { SET_VOCABULARY } from '../actions/app';

const initialState = {
  vocabulary: [],
};

const appReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case SET_VOCABULARY: {
      draft.vocabulary = action.vocabulary[0];
      break;
    }

    default:
      return state;
  }
  return draft;
});

export default appReducer;
