import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
	return (
		<div className='app-header d-flex'>
			<h1 className='app-header title'>Александр Зименков</h1>
			<h2>Всего: {allPosts} записи, из них выполнено: {liked}</h2>
		</div>
	)
}

export default AppHeader;