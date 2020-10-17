import React, { Component } from 'react';
import MyPage from "./MyPageMain";
import MyPageSetting from "./MyPageSetting";
import Favourite from "./Favourites";
import {connect} from 'react-redux';
import { Container, Grid } from "semantic-ui-react";

class MyPageTemplete extends Component{

    render(){
        const { mypagecard } = this.props;
        
        const information = mypagecard.map(
            card =>(
                <MyPageSetting
                    id={mypagecard.id}
                    description={mypagecard.description}
                    content={mypagecard.content}
                />
            )
        )
        return(
            <div>
                <MyPage />
                <Grid className="Grid" Column={4} divided>
                    <Grid.Row>
                    {information}
                    </Grid.Row>
                </Grid>
                <Favourite/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        mypagecard: state.Mypage_reducer.mypagecard
    };
}

export default connect(mapStateToProps)(MyPageTemplete);