import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { board_read } from '../reducer/App_reducer';

class BbsItem extends Component {
    handleUpdateForm = (id) => {
        this.props.dispatch(board_read(id));
    }

    render() {
        const { id, title, date, category, writer, views, content } = this.props;

        return (
            <div className="item1">
                <div className="top-left1">
                    <Link to="/item" onClick={() => {this.handleUpdateForm(id) }} className="title1">
                        {title}
                    </Link>
                    <div className="date1">
                        {date}
                    </div>
                </div>
                <div className="top-right1">
                    <div className="writer1">
                        {writer}
                    </div>
                    <div className="views1">
                        {views}
                    </div>
                </div>
                <div className="bottom1">
                    <div className="category1">
                        {category}
                    </div>
                    <div className="content1">
                        {content.slice(0, 120)}...
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(BbsItem);