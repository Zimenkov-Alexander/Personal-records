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
				{label: 'Первая запись', important: true, like: false, id: "1"},
			],
			term: '',
			filter: 'all'
		}
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImport = this.onToggleImport.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.filterPost = this.filterPost.bind(this);
		this.onFilterSelect = this.onFilterSelect.bind(this);

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
	onToggleImport(id){
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id),
				  old = data[index],
				  newItem = {...old, important: !old.important},
				  newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
				  return {
					  data: newArr
					}
		})
	}
	onToggleLiked(id){
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id),
				  old = data[index],
				  newItem = {...old, like: !old.like},
				  newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
				  return {
					  data: newArr
					}
		})
	}
	searchPost(items, term){
		if(term.length === 0){
			return items;
		}
		return items.filter((item) =>{
			return item.label.indexOf(term) > -1
		});
	}
	onUpdateSearch(term){
		this.setState({term});
	}
	filterPost(items, filter){
		if (filter === 'like'){
			return items.filter((item) =>item.like)
		}else{
			return items
		}
	}
	onFilterSelect(filter){
		this.setState({filter});
	}
	render() {
		const {data, term, filter} = this.state,
			  liked = data.filter(item => item.like).length,
			  allPosts = data.length,
			  visiblePosts = this.filterPost(this.searchPost(data, term), filter);

		return (
			<div className='app'>
				<AppHeader
					liked = {liked}
					allPosts = {allPosts}
				/>
				<div className="searc-panel d-flex">
					<SearchPanel
						onUpdateSearch= {this.onUpdateSearch}
					/>
					<PostStatusFilter
						filter={filter}
						onFilterSelect={this.onFilterSelect}
					/>
				</div>
				<PostList
					posts={visiblePosts}
					onDelete={this.deleteItem}
					onToggleImport={this.onToggleImport}
					onToggleLiked={this.onToggleLiked}
				/>
				<PostAddForm
					onAdd={this.addItem}
				/>
			</div>
			);
		}
	}

