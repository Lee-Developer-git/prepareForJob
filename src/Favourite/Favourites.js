import React from "react";
import { List, Image, Header } from "semantic-ui-react";

const Favourites = () => (
  <List textAlign="center" verticalAlign="middle" centered>
    <Header as="h3" style={{ fontSize: "2em" }} textAlign="center">
      Favourites
    </Header>

    <List.Item textAlign="center" padding-left="20px">
      <Image
        avatar
        src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
      />
      <List.Content>
        <List.Header as="a">알고리즘</List.Header>
        <List.Description>
          Last seen watching{" "}
          <a>
            <b>Arrested Development</b>
          </a>{" "}
          just now.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item textAlign="center">
      <Image
        avatar
        src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
      />
      <List.Content>
        <List.Header as="a">자료구조</List.Header>
        <List.Description>
          Last seen watching{" "}
          <a>
            <b>Bob's Burgers</b>
          </a>{" "}
          10 hours ago.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item textAlign="center">
      <Image
        avatar
        src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
      />
      <List.Content>
        <List.Header as="a">기술 면접 정보</List.Header>
        <List.Description>
          Last seen watching{" "}
          <a>
            <b>The Godfather Part 2</b>
          </a>{" "}
          yesterday.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item textAlign="center">
      <Image
        avatar
        src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
      />
      <List.Content>
        <List.Header as="a">버블 정렬</List.Header>
        <List.Description>
          Last seen watching{" "}
          <a>
            <b>Twin Peaks</b>
          </a>{" "}
          3 days ago.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item textAlign="center">
      <Image
        avatar
        src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg"
      />
      <List.Content>
        <List.Header as="a">Veronika Ossi</List.Header>
        <List.Description>Has not watched anything recently</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default Favourites;
