import React from 'react';
import { Text, StyleSheet, Alert} from 'react-native';
import {Container, Form, Button} from "native-base"
import * as firebase from "firebase";


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };
  
  SignOut = (context) => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      context.props.navigation.navigate('Login')
    }).catch(function(error) {
      // An error happened.
      alert(error)
    });
  }

  helpme = () => {
    Alert.alert(
      "Vote For You Information",
      "Vote For You is an app to get the average American excited and involved " 
      + "in politics! To use this app, navigate to the \"Rankings\" page and start "
      + "ranking candidates. If you want to know more about each candidate, simply "
      + "click on their picture and a short summary will pop up. Once you have gone "
      + "through all the candidates, you can switch to the \"Review\" page. On that "
      + "page, you can see your top candidates and issues. Once you know what issues "
      + "you should support, go out and vote!",
    )
  }

  render() {
    return (
      <Container style={styles.container }>
        <Form>
           <Button style={{marginTop: 20}}
            full
            rounded
            color="skyblue"
            onPress={()=> this.SignOut(this)}
            >
            <Text style={{color: 'white'}}>Sign Out</Text>
            </Button>
            <Button style={{marginTop: 20}}
            full
            rounded
            color="skyblue"
            onPress={()=>this.helpme()}
            >
            <Text style={{color: 'white'}}>Help Me</Text>
            </Button>
        </Form>
      </Container>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    padding: 10
  },

  name: {
    padding: 50,
    fontSize: 24,
  }

});
