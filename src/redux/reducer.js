/**
 * Contains action types constant for redux.
 *
 * @author vajid
 * @since 09.15.2021
 */

import { SAMPLE_REDUX_KEY } from './actionTypes'

const initialState = {
  SAMPLE_REDUX_KEY: 'SAMPLE_REDUX_VALUE',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_REDUX_KEY:
      return {
        SAMPLE_REDUX_KEY: action.SAMPLE_REDUX_KEY,
      }
    default:
      return state
  }
}

export default reducer
