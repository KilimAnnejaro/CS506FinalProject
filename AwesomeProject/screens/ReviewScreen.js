import React, {Component} from 'react';
import {
  AppRegistry,
  ListView,
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

import * as firebase from "firebase";
import { BorderlessButton } from 'react-native-gesture-handler';
import axios from 'axios';
import btoa from 'btoa';

//require("firebase/functions");

export default class ReviewScreen extends React.Component {
  static navigationOptions = {
    title: "Review",
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    /*return axios.post('https://ml.googleapis.com/v1/projects/cs506finalproject/models/abortion/versions/abortionv1:predict', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer `gcloud auth activate-service-account --key-file cs506finalproject-c7fd792fbbbe.json; gcloud auth print-access-token`',
        },
      body: JSON.stringify({
        instances: '[[4,1,0,4,0,1,3,4,4,3,3,2,3,0,1,0,0,1,0,3],[0,3,3,0,4,3,0,1,0,0,0,0,1,3,3,3,4,3,3,1]]'
      }),
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.predictions,
      }, function(){
        console.log(responseJson);
      });
    }).catch((error) =>{
      console.error(error);
    });*/


    //axios.defaults.baseURL = 'https://ml.googleapis.com/v1/projects/cs506finalproject/models/abortion/versions/abortionv1:predict'
    //axios.defaults.headers.common = {'Authorization': 'Bearer `gcloud auth activate-service-account --key-file cs506finalproject-c7fd792fbbbe.json; gcloud auth print-access-token`',
    //'Content-Type': 'application/json'}

    return fetch("https://ml.googleapis.com/v1/projects/cs506finalproject/models/abortion/versions/abortionv1:predict", {
      method: 'POST',
      headers: new Headers({
      accept: 'application/json',
      'Content-Type': 'application/json',
      'authorization': 'gcloud auth activate-service-account --key-file cs506finalproject-c7fd792fbbbe.json; gcloud auth print-access-token`',
      }),
      body: JSON.stringify({
        instances: '[[4,1,0,4,0,1,3,4,4,3,3,2,3,0,1,0,0,1,0,3],[0,3,3,0,4,3,0,1,0,0,0,0,1,3,3,3,4,3,3,1]]'
      }),
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.predictions,
      }, function(){
	      console.log(responseJson);
      });
    }).catch((error) =>{
      console.error(error);
    });


    /*return fetch("https://cs506finalprojectapi.appspot.com/_ah/api/echo/v1/echo", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: '{"message":"hello world"}'
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.message,
      }, function(){
	      console.log(responseJson);
      });
    }).catch((error) =>{
      console.error(error);
    });*/
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
      <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <Text style={styles.text}>Recomended Candidates</Text>
        <FlatList
          data={[
            {key: 'Cory Booker'},
            {key: 'Donald Trump'},
            {key: 'Ted Cruz'},
            {key: 'Kamala Harris'},
            {key: 'Barack Obama'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

      <Text style={styles.text}>Top Issues</Text>
        <FlatList
          data={[
            {key: 'Gun Control'},
            {key: 'Abortion'},
            {key: 'Foreign Policy'},
            {key: 'Economy'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }


  
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22
  },
})
