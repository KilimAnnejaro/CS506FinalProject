import React from 'react';
import { ScrollView, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
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
      candidatesfb: ["Booker", "Trump", "Cruz", "Harris", "Obama"],
      currentParty: 'Democratic',
      parties: ["Democratic", "Republican", "Republican", "Democratic", "Democratic"],
      info: [
        "Booker is a United States Senator from New Jersey. He was first elected in 2013 as the first African American Sentor from New Jersey. Booker supports women's rights, affirmative action, same-sex marriage and single-payer healthcare.",
        "Trump is the 45th President of the United States. Before he was president, Trump was in charge of his family's business, The Trump Organization. He is most know for his America First agenda in foreign policy and the tax cut package he has enabled for individuals and businesses.",
        "Cruz is a United States Senator from Texas. Cruz was first elected in 2013, and in 2016, he was the runner-up for the Republican nomination for the presidential election. He is in favor of the death penalty, the USA Freedom Act, school choice, and gun rights.",
        "Harris is a United States Senator from California. She was first elected in 2017. Harris has supported Medicare-for-all, legalization of recreational marijuana, sanctuary cities, passing a DREAM Act, and lowering taxes for the working and middle classes.",
        "Obama was the 44th President of the United States. He was previously the senator of Illinios. Obama is known for passing the Patient Protection and Affordable Care Act (Obamacare). He also repealed Don't Ask, Don't Tell and reduced nuclear weapons."
      ]
    })
  }

  rank = (rank) => {
    //Store response into firebase    
    var UID = firebase.auth().currentUser.uid;
    firebase.database().ref('Users/' + UID + '/Responses/' + this.state.candidatesfb[this.state.currentIndex]).set({
      candidateName: this.state.currentCandidate,
      ranking: rank
    })

    //Increment to next candidate
    var newVal = (this.state.currentIndex + 1)%5
    this.setState( {
      currentIndex: (this.state.currentIndex + 1)%5,
      currentCandidate: this.state.candidates[newVal],
      currentParty: this.state.parties[newVal],
    })
  }

  candidateInfo = () => {
    Alert.alert(
      this.state.currentCandidate,
      "Party:" + this.state.currentParty + "\n\n" + this.state.info[this.state.currentIndex],
    )
  }

  render() {
    if(this.state.currentIndex == 0) {
      return (
        <ScrollView style={styles.container}>
        <Text style={styles.text}>Candidate: {this.state.currentCandidate}</Text>
        <Text style={styles.textSmall}>Party: {this.state.currentParty}</Text>
        <TouchableOpacity onPress={()=>this.candidateInfo()}>
          <Image source={require('../assets/images/img_booker.jpg')} style={styles.image}/>
          <Text style={styles.helpmeText}>Click for more info!</Text>
        </TouchableOpacity>
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
        <TouchableOpacity onPress={()=>this.candidateInfo()}>
          <Image source={require('../assets/images/img_trump.jpg')} style={styles.image}/>
          <Text style={styles.helpmeText}>Click for more info!</Text>
        </TouchableOpacity>
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
        <TouchableOpacity onPress={()=>this.candidateInfo()}>
          <Image source={require('../assets/images/img_cruz.jpg')} style={styles.image}/>
          <Text style={styles.helpmeText}>Click for more info!</Text>
       </TouchableOpacity>
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
        <TouchableOpacity onPress={()=>this.candidateInfo()}>
          <Image source={require('../assets/images/img_harris.jpg')} style={styles.image}/>
          <Text style={styles.helpmeText}>Click for more info!</Text>
        </TouchableOpacity>
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
        <TouchableOpacity onPress={()=>this.candidateInfo()}>
          <Image source={require('../assets/images/img_obama.jpg')} style={styles.image}/>
          <Text style={styles.helpmeText}>Click for more info!</Text>
        </TouchableOpacity>
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

  helpmeText: {
    color:'rgba(128,128,128,0.6)',
    fontSize: 16,
    textAlign: 'center'
  },
});
