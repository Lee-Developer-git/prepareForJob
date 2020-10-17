import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainHeader from './Components/Header/MainHeader';
import MiddleSection from './Components/Main/MiddleSection';
import BottomSection from './Components/Main/BottomSection';
import Login from "./Components/Login/Login";
import SignUp from "./Components/Register/SignUp";
import Agreement from "./Components/Register/Agreement";
import MyPageTemplete from './Components/MyPage/MyPageTemplete';
import { Grid, Image, Icon, Header, Container, Card } from 'semantic-ui-react';


class App extends Component{
  state={
    sectionitem : [
      {
          shape:<Building />,
          title:'TITLE',
          text:'얼마나 생생하며 그들의 눈에 무엇이 타오르고 있는가? 우리 눈이 그것을 보는 때에 우리의 귀는 생의 찬미를 듣는다'
      },
      {
          shape:<Tasks />,
          title:'TITLE',
          text:'얼마나 생생하며 그들의 눈에 무엇이 타오르고 있는가? 우리 눈이 그것을 보는 때에 우리의 귀는 생의 찬미를 듣는다'
      },
      {
          shape:<Cloud />,
          title:'TITLE',
          text:'얼마나 생생하며 그들의 눈에 무엇이 타오르고 있는가? 우리 눈이 그것을 보는 때에 우리의 귀는 생의 찬미를 듣는다'
      },
      {
          shape:<Idea />,
          title:'TITLE',
          text:'얼마나 생생하며 그들의 눈에 무엇이 타오르고 있는가? 우리 눈이 그것을 보는 때에 우리의 귀는 생의 찬미를 듣는다'
      }
    ],
    mypagecard :[
      {
        header:'My Page',
        meta: '마이 페이지 수정',
        description: 'Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville.'
      },
      {
        header:'Favourites',
        meta: '즐겨찾기 이동',
        description: 'Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville.'
      },
      {
        header:'My Post',
        meta: '내가 쓴 글',
        description: 'Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville.'
      },
      {
        header:'My Comment',
        meta: '내가 쓴 댓글',
        description: 'Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville. Matthew is a pianist living in Nashville.'
      }
    ]
  }

  render(){
    const {sectionitem, mypagecard}= this.state;

    return (
      <Router>
        <Route path="/" exact className="App" render={()=>
          <div>
            <MainHeader></MainHeader>
            <MiddleSection item={sectionitem}/>
            <BottomSection></BottomSection>
          </div>}
          />
        <Route path="/login" className="login" component={Login}/>
        <Route path="/agreement" component={Agreement}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/mypage" render={()=><MyPageTemplete mypagecard={mypagecard}/>}/>
      </Router>
    );
  };
}


const Building = () => (
  <Icon color='white' name='building outline'/>
)

const Tasks = () => (
  <Icon color='white' name='tasks'/>
)

const Cloud = () => (
  <Icon color='white' name='cloud'/>
)

const Idea = () =>(
  <Icon color='white' name='idea'/>
)

export default App;
