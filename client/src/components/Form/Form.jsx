import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import useStyles from './styles'
import {useDispatch } from 'react-redux'
import {createNewPost} from '../../Slices/postSlice'

const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '', })
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createNewPost(postData))
        clear()
    }
    const clear = ()=>{
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '', });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.form} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a Memory</Typography>
                <TextField name='creator'
                    variant='outlined'
                    label='Creator'
                    fullWidth
                    margin='dense'
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}>
                </TextField>
                <TextField name='title'
                    variant='outlined'
                    label='Title'
                    fullWidth
                    margin='dense'
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}>
                </TextField>
                <TextField name='message'
                    variant='outlined'
                    label='Message'
                    fullWidth
                    margin='dense'
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}>
                </TextField>
                <TextField name='tags'
                    variant='outlined'
                    label='Tags'
                    fullWidth
                    margin='dense'
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}>
                </TextField>

                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color='primary' size='large' type="submit" fullWidth>Submit </Button>
                <Button className={classes.buttonSubmit} variant="contained" color='secondary' size='small' onClick={clear} fullWidth>Clear </Button>
            </form>
        </Paper>
    )
}

export default Form