import React from 'react';
import TopHeader from './TopHeader';
import './css/MainHeader.css';
import { Input } from 'semantic-ui-react';

function Header() {
    return (
        <div className="Header">
            <div className ="TopHeader">
                <TopHeader />
                <div className="Searchbar">
                    <InputExampleAction />
                </div>
            </div>
            <div className="main">
                <div className="main-text">
                    ___에서 IT취업 정보를 얻으세요.<br/><br/><br/>
                <button className="button-blue">
                    게시판 가기
                </button>
                </div>
            </div>
        </div>
    );
};

const InputExampleAction = () => (
    <Input size='big' action='Search' placeholder='Search...' />
  )

export default Header;