import React, { Component } from 'react';
import './MiddleSectionItem.css';


class MiddleSectionItem extends Component{
    render() {
        const {
            DropdownExample,
            Tasks,
            Building,
            ButtonExample, 
            Cloud,
            Idea } = this.props;

        return(
            <div className="SectionItem">
                <div className="Searchbar">
                { DropdownExample }
                </div>
                <div className="main">
                <div className="main-text">취뿌단에서 IT취업 정보를 얻으세요.</div>
                { ButtonExample }
                </div>
                <div className="Information">
                <div className="Information-box">
                    { Building }
                    <div className="Information-text">
                        얼마나 생생하며 그들의 눈에 무엇이 타오르고 있는가? 우리 눈이 그것을 보는 때에 우리의 귀는 생의 찬미를 듣는다 그것은 웅대한 관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인
                    </div>
                </div>
                <div className="Information-box">
                    { Tasks }
                    <div className="Information-text">
                        얼마나 생생하며 그들의 눈에 무엇이 타오르고 있는가? 우리 눈이 그것을 보는 때에 우리의 귀는 생의 찬미를 듣는다 그것은 웅대한 관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인
                    </div>
                </div>
                <div className="Information-box">
                    { Cloud }
                    <div className="Information-text">
                        얼마나 생생하며 그들의 눈에 무엇이 타오르고 있는가? 우리 눈이 그것을 보는 때에 우리의 귀는 생의 찬미를 듣는다 그것은 웅대한 관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인
                    </div>
                </div>
                <div className="Information-box">
                    { Idea }
                    <div className="Information-text">
                        얼마나 생생하며 그들의 눈에 무엇이 타오르고 있는가? 우리 눈이 그것을 보는 때에 우리의 귀는 생의 찬미를 듣는다 그것은 웅대한 관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인
                    </div>
                </div>
                </div>
            </div>
        );
    }
};

export default MiddleSectionItem;