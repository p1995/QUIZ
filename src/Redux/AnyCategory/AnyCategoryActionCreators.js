import { ANY_CATEGORY } from "./AnyCategoryActionTypes";
import axios from "axios";
export function anyCategoryQuiz(data) {
  return {
    type: ANY_CATEGORY,
    data
  };
}
export function fetchAnyCategory(url) {
  return (dispatch, getState) => {
    axios.get(url).then(function(response) {
      // handle success
      //   console.log(response.data.results);
      dispatch(anyCategoryQuiz(response.data.results));
    });
  };
}
