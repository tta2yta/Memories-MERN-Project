import React from 'react'
import useStyles from './style.js'
import {useSelector} from 'react-redux'


function Post() {
  const posts= useSelector((state)=>state.posts);
  const classes= useStyles()
  console.log(posts)
  return (
    <div>Post</div>
  )
}

export default Post