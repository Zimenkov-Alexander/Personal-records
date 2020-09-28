import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component{

	render(){
		const {label, onDelete, onToggleImport, onToggleLiked,  important, like} = this.props;

		let classNames = 'app-list-item d-flex justify-content-between';
		// console.log(like);
		if (!important) {
			classNames += ' important';
			}
		if (like) {
			classNames += ' like';
			}

		return (
			<div className={classNames}>
				<span onClick={onToggleLiked} className="app-list-item-label">
					{label}
				</span>
				<div className="d-flex justify-content-center align-items-center">
					<i className="fa fa-check"></i>
					<button onClick={onToggleImport}  type="button" className="btn-star btn-sm">
						<i className="fa fa-star"></i>
					</button>
					<button onClick={onDelete} type="button" className="btn-trash btn-sm">
						<i className="fa fa-trash-o"></i>
					</button>
					
				</div>
			</div>
		)
	}
}