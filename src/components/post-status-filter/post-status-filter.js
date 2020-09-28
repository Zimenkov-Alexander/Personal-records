import React, {Component}from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
	constructor(props) {
		super(props);
		this.buttons = [
			{name: 'all', label: 'Все'},
			{name: 'like', label: 'Выполненные'}
		]
	}

	render() {
		const buttons = this.buttons.map(({name, label}) => {
			const {filter, onFilterSelect} = this.props;
			const active = filter === name;
			const clazz = active ? 'info' : 'btn-outline-secondary'
			
			return (
				<Button
					key={name}
					outline
					color={`btn ${clazz}`}
					onClick={()=>onFilterSelect(name)}>{label}
				</Button>
			)
		})

		return (
			<div className='btn-group'>
				{buttons}
			</div>
		)
	}
};