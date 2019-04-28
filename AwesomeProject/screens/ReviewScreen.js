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
//import axios from 'axios';
//import btoa from 'btoa';

//require("firebase/functions");

export default class ReviewScreen extends React.Component {
  static navigationOptions = {
    title: "Review",
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource: [], dataSource2: [], dataSource3: [], dataSource4: [], dataSource5: []}
  }

format(issue){
	if(issue<=1.49){
		return 'Abortion';
	}
	else if(issue<=2.49){
		return 'Military funding';
	}
	else if(issue<=3.49){
		return 'Immigration';
	}
	else if(issue<=4.49){
		return 'Healthcare';
	}
	else if(issue<=5.49){
		return 'The Environment';
	}
	return issue;
	
}

  componentDidMount(){
let data = {
	"instances": [
		[4, 1, 0, 4, 0, 1, 3, 4, 4, 3, 3, 2, 3, 0, 1, 0, 0, 1, 0, 3],
	]
};
    fetch("https://ml.googleapis.com/v1/projects/cs506finalproject/models/most_important_issue/versions/mostimportantissuev1:predict", {
        	body: JSON.stringify(data),
        	headers: {
                	Authorization: "Bearer ya29.Glz5Blx2tFoBzql9fp9hyCEOeYGUvNBUfqeF-m3Z2-uOW1KPaAdOA2v4BAPWnQB6p589PnpW2iQncMmzeEAQt8C0eoBF-UlyI9ZWZfi1OhtKiI6XYjvvhO_bE6kTBQ", "Content-Type": "application/json" },
        	method: "POST" }).then((response) => response.json())
    .then((responseJson) => {
console.log("hello1");
console.log(JSON.stringify(responseJson));
      this.setState({
        isLoading: false,
        dataSource: responseJson.predictions,
      }, function(){
console.log("hello2");
	      console.log(responseJson);
      });
    }).catch((error) =>{
      console.error(error);
    });


    fetch("https://ml.googleapis.com/v1/projects/cs506finalproject/models/third_most_important_issue/versions/v1:predict", {
        	body: JSON.stringify(data),
        	headers: {
                	Authorization: "Bearer ya29.Glz5Blx2tFoBzql9fp9hyCEOeYGUvNBUfqeF-m3Z2-uOW1KPaAdOA2v4BAPWnQB6p589PnpW2iQncMmzeEAQt8C0eoBF-UlyI9ZWZfi1OhtKiI6XYjvvhO_bE6kTBQ", "Content-Type": "application/json" },
        	method: "POST" }).then((response) => response.json())
    .then((responseJson) => {
console.log("hello1");
console.log(JSON.stringify(responseJson));
      this.setState({
        isLoading: false,
        dataSource3: responseJson.predictions,
      }, function(){
console.log("hello2");
	      console.log(responseJson);
      });
    }).catch((error) =>{
      console.error(error);
    });

    fetch("https://ml.googleapis.com/v1/projects/cs506finalproject/models/fourth_most_important_issue/versions/v1:predict", {
        	body: JSON.stringify(data),
        	headers: {
                	Authorization: "Bearer ya29.Glz5Blx2tFoBzql9fp9hyCEOeYGUvNBUfqeF-m3Z2-uOW1KPaAdOA2v4BAPWnQB6p589PnpW2iQncMmzeEAQt8C0eoBF-UlyI9ZWZfi1OhtKiI6XYjvvhO_bE6kTBQ", "Content-Type": "application/json" },
        	method: "POST" }).then((response) => response.json())
    .then((responseJson) => {
console.log("hello1");
console.log(JSON.stringify(responseJson));
      this.setState({
        isLoading: false,
        dataSource4: responseJson.predictions,
      }, function(){
console.log("hello2");
	      console.log(responseJson);
      });
    }).catch((error) =>{
      console.error(error);
    });

    fetch("https://ml.googleapis.com/v1/projects/cs506finalproject/models/fifth_most_important_issue/versions/v1:predict", {
        	body: JSON.stringify(data),
        	headers: {
                	Authorization: "Bearer ya29.Glz5Blx2tFoBzql9fp9hyCEOeYGUvNBUfqeF-m3Z2-uOW1KPaAdOA2v4BAPWnQB6p589PnpW2iQncMmzeEAQt8C0eoBF-UlyI9ZWZfi1OhtKiI6XYjvvhO_bE6kTBQ", "Content-Type": "application/json" },
        	method: "POST" }).then((response) => response.json())
    .then((responseJson) => {
console.log("hello1");
console.log(JSON.stringify(responseJson));
      this.setState({
        isLoading: false,
        dataSource5: responseJson.predictions,
      }, function(){
console.log("hello2");
	      console.log(responseJson);
      });
    }).catch((error) =>{
      console.error(error);
    }); 

  return fetch("https://ml.googleapis.com/v1/projects/cs506finalproject/models/second_most_important_issue/versions/v1:predict", {
        	body: JSON.stringify(data),
        	headers: {
                	Authorization: "Bearer ya29.Glz5Blx2tFoBzql9fp9hyCEOeYGUvNBUfqeF-m3Z2-uOW1KPaAdOA2v4BAPWnQB6p589PnpW2iQncMmzeEAQt8C0eoBF-UlyI9ZWZfi1OhtKiI6XYjvvhO_bE6kTBQ", "Content-Type": "application/json" },
        	method: "POST" }).then((response) => response.json())
    .then((responseJson) => {
console.log("hello3");
console.log(JSON.stringify(responseJson));
      this.setState({
        isLoading: false,
        dataSource2: responseJson.predictions,
      }, function(){
console.log("hello4");
	      console.log(responseJson);
      });
    }).catch((error) =>{
      console.error(error);
    });


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
            {key: this.format(this.state.dataSource[0])},
            {key: this.format(this.state.dataSource2[0])},
            {key: this.format(this.state.dataSource3[0])},
            {key: this.format(this.state.dataSource4[0])},
	          {key: this.format(this.state.dataSource5[0])},
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

