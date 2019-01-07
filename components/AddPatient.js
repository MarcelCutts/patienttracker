import * as React from "react";
import { Button, Card, Title, Paragraph } from "react-native-paper";

export const AddPatient = ({ token }) => (
  <Card>
    <Card.Content>
      <Title>Add new patient</Title>
      <Paragraph> {token} </Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);
