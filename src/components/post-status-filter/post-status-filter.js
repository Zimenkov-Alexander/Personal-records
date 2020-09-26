import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = () => {
	return (
		<div className='btn-group'>
			<button className='btn-primary'> Все </button>
			<button className='btn-secondary'>Понравилось</button>
		</div>
	)
};

export default PostStatusFilter;