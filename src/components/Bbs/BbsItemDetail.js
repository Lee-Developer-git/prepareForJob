import React, { Component } from 'react';
import Header from '../Header/Header';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';

import './css/Detail.css';

//목록, 댓글은
//목록 1개 만들고 댓글 1개 만들고
//목록,댓글 onClick시 뭐 t/f 전환해서
//t이면 목록 띄워주고
//f이면 댓글 띄워주고 

class BbsItemDetail extends Component {
    state= {
        listCommentChange: true
    };
    
    render() {
        const { selectedBoard } = this.props;
        const { listCommentChange } = this.state;

        return (
            <>
            <Header />
            <div className="item2">
                <div className="top2">
                    <div className="title2">
                        {selectedBoard.title}
                    </div>
                    <div>
                        <div className="name2">
                            {selectedBoard.name}
                        </div>
                        <div className="date2">
                            {selectedBoard.date}
                        </div>
                        <div className="right2">
                            <div className="views2">
                                {selectedBoard.views}
                            </div>
                            <div className="wc2">
                                | 즐겨찾기
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="section2">
                    <div>
                        {selectedBoard.content}
                    </div>
                    <div className="sectionRight2">
                        <Link to="/modified" className="modified2">수정</Link>
                        <div className="delete2">삭제</div>
                    </div>
                </div>
                
                <div className="bottom2">
                    
                </div>
            </div>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        selectedBoard: state.board_reducer.selectedBoard
    };
}

export default connect(mapStateToProps)(BbsItemDetail);