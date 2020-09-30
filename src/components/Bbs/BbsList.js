import React, { Component } from 'react';
import Header from '../Header/Header';
import BbsItem from './BbsItem';
import { connect } from 'react-redux';

import './css/BbsList.css';

class BbsList extends Component {
    render() {
        const { boards } = this.props;
        
        const itemList = boards.map(
            info => (<BbsItem
                key={info.id}
                id={info.id}
                title={info.title}
                date={info.date}
                category={info.category}
                writer={info.writer}
                views={info.views}
                content={info.content}
            />)
        );

        return (
            <div>
                <Header />
                {itemList}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        boards: state.board_reducer.boards
    };
}

export default connect(mapStateToProps)(BbsList);