import { ANY_CATEGORY } from "./AnyCategoryActionTypes";
import axios from "axios";
export function anyCategoryQuiz(data) {
  return {
    type: ANY_CATEGORY,
    data
  };
}
export function fetchAnyCategory() {
  return (dispatch, getState) => {
    axios.get("https://opentdb.com/api.php?amount=10").then(function(response) {
      // handle success
      //   console.log(response.data.results);
      dispatch(anyCategoryQuiz(response.data.results));
    });
  };
}
