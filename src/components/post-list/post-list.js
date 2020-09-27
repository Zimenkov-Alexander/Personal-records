import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

const PostList = ({posts}) => {

	const elements = posts.map((item) => {
		return (
			<li key={item.id} className='list-group-item'>
				<PostListItem
					label={item.label}
					important={item.important}
				/>
				{/* <PostListItem {...item}/> ES8 */ } 
			</li>
		)
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
};

export default PostList;