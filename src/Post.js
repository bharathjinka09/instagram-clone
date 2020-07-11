import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar'

function Post({ username, caption, imageUrl }){
	return (
		<div className="post">
		<div className="post__header">
			<Avatar
			className="post__avatar"
			alt='Avatar'
			src={imageUrl} 
			/>
			<h3>{username}</h3>
		</div>
			

			<img 
			className="post__image"
			src={imageUrl} 
			alt="postImage" />

			<h4 className="post__text"><strong>{username}</strong> {caption}</h4>

		</div>
	)
}

export default Post