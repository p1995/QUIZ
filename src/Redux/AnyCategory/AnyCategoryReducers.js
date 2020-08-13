// https://opentdb.com/api.php?amount=10
// import React from 'react'
const init = { Anycategory: [] };
function AnyCategoryReducers(state = init, action) {
  switch (action.type) {
    case "ANY_CATEGORY":
      return { ...state, Anycategory: action.data };
    default:
      return state;
  }
}

export default AnyCategoryReducers;
