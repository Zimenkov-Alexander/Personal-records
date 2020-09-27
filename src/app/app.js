import React, {Component} from 'react';

import AppHeader from '../components/app-header/app-header';
import SearchPanel from '../components/search-panel/search-panel';
import PostStatusFilter from '../components/post-status-filter/post-status-filter';
import PostList from '../components/post-list/post-list';
import PostAddForm from '../components/post-add-form/post-add-form';

import './app.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{label: 'Going to lealrn React', important: true, id: "1"},
				{label: 'That is so good', important: false, id: "2"},
				{label: 'I need a break', important: false, id: "3"},
			]
		}
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);

		this.maxId = 4;
	}
	deleteItem(id){
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id),
				  newArr = [...data.slice(0, index), ...data.slice(index + 1)];

			return{
				data: newArr
			}
		});
	}
	addItem(body){
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++
		};

		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}

	render() {
		return (
			<div className='app'>
				<AppHeader/>
				<div className="searc-panel d-flex">
					<SearchPanel/>
					<PostStatusFilter/>
				</div>
				<PostList
					posts={this.state.data}
					onDelete={this.deleteItem}
				/>
				<PostAddForm
					onAdd={this.addItem}
				/>
			</div>
			);
		}
	}

