import React from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';
import { Button } from 'native-base';
import * as firebase from "firebase";

export default class RankingScreen extends React.Component {
  static navigationOptions = {
    title: 'Ranking',
  };

  constructor(props){
    super(props)
 
    this.state = ({
      currentIndex: 0,
      currentCandidate: 'Cory Booker',
      candidates: ["Cory Booker", "Donald Trump", "Ted Cruz", "Kamala Harris", "Barack Obama"],
      currentParty: 'Democratic',
      parties: ["Democratic", "Republican", "Republican", "Democratic", "Democratic"],
      currentCandidateImage: '../assets/images/img_booker.jpg',
      candidateImages: [
        '../assets/images/img_booker.jpg',
        '../assets/images/img_trump.jpg',
        '../assets/images/img_cruz.jpg',
        '../assets/images/img_harris.jpg',
        '../assets/images/img_obama.jpg',
      ]
    })
  }

  rank = (rank) => {
    //Store response into firebase    
    var UID = firebase.auth().currentUser.uid;
    firebase.database().ref('Users/' + UID + '/Responses/' + this.state.currentCandidate).set({
      candidateName: this.state.currentCandidate,
      ranking: rank
    })

    //Increment to next candidate
    var newVal = (this.state.currentIndex + 1)%5
    this.setState( {
      currentIndex: (this.state.currentIndex + 1)%5,
      currentCandidate: this.state.candidates[newVal],
      currentParty: this.state.parties[newVal],
      currentCandidateImage: this.state.candidateImages[newVal]
    })
  }

  render() {
    if(this.state.currentIndex == 0) {
      return (
        <ScrollView style={styles.container}>
        <Text style={styles.text}>Candidate: {this.state.currentCandidate}</Text>
        <Text style={styles.textSmall}>Party: {this.state.currentParty}</Text>
        <Image source={require('../assets/images/img_booker.jpg')} style={styles.image}/>
        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(5)}
              >
          <Text style={{color: 'white'}}>Great</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(4)}
              >
          <Text style={{color: 'white'}}>Good</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(3)}
              >
          <Text style={{color: 'white'}}>Average</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(2)}
              >
          <Text style={{color: 'white'}}>Lacking</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(1)}
              >
          <Text style={{color: 'white'}}>Terrible</Text>
        </Button>
        </ScrollView>
      ) 
    } else if(this.state.currentIndex == 1) {
      return (
        <ScrollView style={styles.container}>
        <Text style={styles.text}>Candidate: {this.state.currentCandidate}</Text>
        <Text style={styles.textSmall}>Party: {this.state.currentParty}</Text>
        <Image source={require('../assets/images/img_trump.jpg')} style={styles.image}/>
        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(5)}
              >
          <Text style={{color: 'white'}}>Great</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(4)}
              >
          <Text style={{color: 'white'}}>Good</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(3)}
              >
          <Text style={{color: 'white'}}>Average</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(2)}
              >
          <Text style={{color: 'white'}}>Lacking</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(1)}
              >
          <Text style={{color: 'white'}}>Terrible</Text>
        </Button>
        </ScrollView>
      )
    } else if(this.state.currentIndex == 2) {
      return (
        <ScrollView style={styles.container}>
        <Text style={styles.text}>Candidate: {this.state.currentCandidate}</Text>
        <Text style={styles.textSmall}>Party: {this.state.currentParty}</Text>
        <Image source={require('../assets/images/img_cruz.jpg')} style={styles.image}/>
        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(5)}
              >
          <Text style={{color: 'white'}}>Great</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(4)}
              >
          <Text style={{color: 'white'}}>Good</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(3)}
              >
          <Text style={{color: 'white'}}>Average</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(2)}
              >
          <Text style={{color: 'white'}}>Lacking</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(1)}
              >
          <Text style={{color: 'white'}}>Terrible</Text>
        </Button>
        </ScrollView>
      )
    } else if(this.state.currentIndex == 3) {
      return (
        <ScrollView style={styles.container}>
        <Text style={styles.text}>Candidate: {this.state.currentCandidate}</Text>
        <Text style={styles.textSmall}>Party: {this.state.currentParty}</Text>
        <Image source={require('../assets/images/img_harris.jpg')} style={styles.image}/>
        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(5)}
              >
          <Text style={{color: 'white'}}>Great</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(4)}
              >
          <Text style={{color: 'white'}}>Good</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(3)}
              >
          <Text style={{color: 'white'}}>Average</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(2)}
              >
          <Text style={{color: 'white'}}>Lacking</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(1)}
              >
          <Text style={{color: 'white'}}>Terrible</Text>
        </Button>
        </ScrollView>
      )
    } else if(this.state.currentIndex == 4) {
      return (
        <ScrollView style={styles.container}>
        <Text style={styles.text}>Candidate: {this.state.currentCandidate}</Text>
        <Text style={styles.textSmall}>Party: {this.state.currentParty}</Text>
        <Image source={require('../assets/images/img_obama.jpg')} style={styles.image}/>
        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(5)}
              >
          <Text style={{color: 'white'}}>Great</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(4)}
              >
          <Text style={{color: 'white'}}>Good</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(3)}
              >
          <Text style={{color: 'white'}}>Average</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(2)}
              >
          <Text style={{color: 'white'}}>Lacking</Text>
        </Button>

        <Button style={{marginTop: 20, marginLeft: 25, marginRight: 25}}
              full
              rounded
              color="skyblue"
              onPress={()=> this.rank(1)}
              >
          <Text style={{color: 'white'}}>Terrible</Text>
        </Button>
        </ScrollView>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },

  image: {
    height: 200,
    width: null,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  
  text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24
  },

  textSmall: {
    textAlign: 'center',
    paddingTop: 15,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  },
});
