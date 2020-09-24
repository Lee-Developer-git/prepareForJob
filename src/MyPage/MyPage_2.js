import React from "react";
import { Grid, Image, Icon, Header, Container, Card } from "semantic-ui-react";

const paragraph = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);

const description = [
  "Amy is a violinist with 2 years experience in the wedding industry.",
  "She enjoys the outdoors and currently resides in upstate New York.",
].join(" ");

const MyPage_2 = () => (
  <Container>
    <style>
      {`
    .ui.grid.divided:not([class*="vertically divided"]) > .row > .column {
      box-shadow: -1px 0 0 0 #d4d4d4;
    }
    .ui[class*="vertically divided"].grid > .row:before {
      box-shadow: 0 -1px 0 0 rgba(212, 212, 212, 1.0);
    }
  `}
    </style>
    <Header as="h2" inverted textAlign="center">
      Divided
    </Header>
    <Grid columns={4} divided>
      <Grid.Row>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>My Page</Card.Header>
              <Card.Meta>마이 페이지 수정</Card.Meta>
              <Card.Description>
                Matthew is a pianist living in Nashville. Matthew is a pianist
                living in Nashville. Matthew is a pianist living in Nashville.
                Matthew is a pianist living in Nashville. Matthew is a pianist
                living in Nashville. Matthew is a pianist living in Nashville.
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>Favourites</Card.Header>
              <Card.Meta>즐겨찾기 이동</Card.Meta>
              <Card.Description>
                Matthew is a pianist living in Nashville. Matthew is a pianist
                living in Nashville. Matthew is a pianist living in Nashville.
                Matthew is a pianist living in Nashville. Matthew is a pianist
                living in Nashville. Matthew is a pianist living in Nashville.
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>My Post</Card.Header>
              <Card.Meta>내가 쓴 글</Card.Meta>
              <Card.Description>
                Matthew is a pianist living in Nashville. Matthew is a pianist
                living in Nashville. Matthew is a pianist living in Nashville.
                Matthew is a pianist living in Nashville. Matthew is a pianist
                living in Nashville. Matthew is a pianist living in Nashville.
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>My Comment</Card.Header>
              <Card.Meta>내가 쓴 댓글</Card.Meta>
              <Card.Description>
                Matthew is a pianist living in Nashville. Matthew is a pianist
                living in Nashville. Matthew is a pianist living in Nashville.
                Matthew is a pianist living in Nashville. Matthew is a pianist
                living in Nashville. Matthew is a pianist living in Nashville.
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default MyPage_2;
