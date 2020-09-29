import React, { Component } from 'react';
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import './css/Modified.css';

class BbsModified extends Component {
    render() {    
        const { selectedBoard } = this.props;

        return (
            <>
                <Header />
                <div className="modified">
                    <div className="inner">
                        <div className="write">
                            글쓰기
                            <div className="modifiedDate">{selectedBoard.date}</div>
                        </div>
                        <div className="ctg">
                            카테고리
                        </div>
                        <div className="modifiedName">
                            {selectedBoard.name}
                        </div>
                        <input className="title-input" value="제목을 입력해주세요"/>
                        <input className="content-input" />
                        <div>
                            <div className="submit">등록</div>
                            <div className="cancel">취소</div>
                            <Link to="/" className="list">목록</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        selectedBoard: state.selectedBoard
    };
}

export default connect(mapStateToProps)(BbsModified);