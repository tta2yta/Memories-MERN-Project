import axios from "axios";

const url = "http://localhost:5000/posts";

// export const fetchPosts = async () => {
//   let PostData = "";
//   await axios.get(url).then((res) => {
//     PostData = res.data;
//   });
//   return PostData;
// };

export const fetchPosts = () => axios.get(url);

export const createPost = (newData) => axios.post(url, newData);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatePost);
