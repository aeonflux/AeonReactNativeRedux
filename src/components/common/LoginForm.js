import React, { Component } from "react";
import { Text } from "react-native";
import { Button, Card, CardSection, Input } from "./common";
import firebase from "firebase";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: "", loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // User successfully logs in
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        // if authentication request fails
        // Create a New Account
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          // User successfully logs in
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    //Failed Authentication
    //hide spinner
    //display error message
    this.setState({
      loading: false,
      error: "Authentication Failed"
    });
  }

  onLoginSuccess() {
    //clear out the form
    // state.loading = false
    //clear out any error message

    this.setState({
      email: "",
      password: "",
      loading: false,
      error: ""
    });
  }

  renderButton() {
    if (this.state.loading) return <Spinner size="small" />;

    return <Button onPress={this.onButtonPress.bind(this)}>Sign In</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="aeonrocks@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={style.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default LoginForm;
