import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css';

const PostList = ({posts}) => {

	const elements = posts.map((item) => {
		return (
			<ListGroupItem key={item.id} className='list-group-item'>
				<PostListItem
					label={item.label}
					important={item.important}
				/>
				{/* <PostListItem {...item}/> ES8 */ } 
			</ListGroupItem>
		)
	});

	return (
		<ListGroup className="app-list">
			{elements}
		</ListGroup>
	)
};

export default PostList;