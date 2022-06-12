import React, { useEffect } from "react";
import Post from "./Post/Post";
import useStyles from "./styles.js";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";

function Posts() {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
