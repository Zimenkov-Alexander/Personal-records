import React from 'react';
import './post-add-form.css';


const PostAddFrom = ({onAdd}) => {
	return (
		<div className='bottom-panel d-flex'>
			<input
				type='text'
				className='form-control new-post-label'
				placeholder='Добавить запись'
			/>
			<button
				onClick={() => onAdd('Hello')}
				type='submit'
				className='btn btn-outline-secondary'
			>
				Добавить
			</button>
		</div>
	)
};

export default PostAddFrom;