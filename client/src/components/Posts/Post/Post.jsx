import React, { useState } from 'react'
import useStyles from './style'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, colors } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, incLikeCount , decLikeCount } from '../../../Slices/postSlice'


const Post = ({ post }) => {
  const classes = useStyles();
  const[liked , setLiked] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id)=>{
    dispatch(deletePost(id))
  }
  const handleLikeCount = (id)=>{
    liked? dispatch(decLikeCount(id)) : dispatch(incLikeCount(id))
    setLiked(!liked);
  }
  return (

    <Card className={classes.card} >
      <CardMedia  className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>   
      </div>

      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size='small' onClick={() => { }}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>

      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant='h5' gutterBottom >{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={()=>{handleLikeCount(post._id)}}><ThumbUpAltIcon fontSize='small'/> Like {post.likeCount}</Button>
        <Button size='small' color='primary' onClick={()=>{handleDelete(post._id)}}><DeleteIcon fontSize='small'/> Delete </Button>
      </CardActions>

    </Card>
  )
}

export default Post