import React from 'react';
import AppHeader from '../components/app-header/app-header';
import SearchPanel from '../components/search-panel/search-panel';
import PostStatusFilter from '../components/post-status-filter/post-status-filter';
import PostList from '../components/post-list/post-list';
import PostAddForm from '../components/post-add-form/post-add-form';

import './app.css';

const App = () =>{
	return (
		<div className='app'>
			<AppHeader/>
			<div className="searc-panel d-flex">
				<SearchPanel/>
				<PostStatusFilter/>
			</div>
			<PostList/>
			<PostAddForm/>
		</div>
	);
}

export default App;