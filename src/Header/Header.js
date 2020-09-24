import React from 'react';
import './Header.css';
import { Input } from 'semantic-ui-react';

function Header() {
    return (
        <div className="Header">
            <div className ="Navigation">
                <div className="Searchbar">
                    <InputExampleAction />
                </div>
            </div>
            <div className="main">
                <div className="main-text">
                취뿌단에서 IT취업 정보를 얻으세요.<br/><br/><br/>
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