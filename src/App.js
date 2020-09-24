import React, {Component} from 'react';
import Header from './Header/Header';
import MiddleSection from './Main/MiddleSection';
import BottomSection from './Main/BottomSection';
import { Icon } from 'semantic-ui-react';


class App extends Component{
  state={
    item : [
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
    ]
  }

  render(){
    return (
      <div className="App">
        <Header></Header>
        <MiddleSection item={this.state.item} />
        <BottomSection></BottomSection>
      </div>
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
