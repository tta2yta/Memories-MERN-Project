import * as actions from "../constants/actionTypes";

// const reducer=(state=[], action)=>{
// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case actions.DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case actions.UPDATE:
    case actions.LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case actions.FETCH_AL:
      return action.payload;
    case actions.CREATE:
      return [...posts, action.payload];

    default:
      return posts;
  }
};
