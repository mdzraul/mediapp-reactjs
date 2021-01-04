//npm add react-native-app-intro-slider //libreria slider
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View,Text,Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Permission from '../navigation/Permissions'


//slides
const slides = [
    {
      key: 'one',
      title: 'Página 1',
      text: 'Bienvenido',
      image: require('../../assets/svg/cardiologia.png'),
      backgroundColor:'#6ED4C8',
      
    },
    {
      key: 'two',
      title: 'Página 2',
      text: 'Descripción página dos',
      image: require('../../assets/svg/cardiologia.png'),
      backgroundColor:'#febe29',
    },
    {
      key: 'three',
      title: 'Página 3',
      text: 'Descripción página tres',
      image: require('../../assets/svg/cardiologia.png'),
      backgroundColor:'#22bcb5',
    }
  ];

  export default class App extends React.Component {
    state = {
      showRealApp: false
    }
    _renderItem = ({ item }) => {
      return (
        <View style={styles.slide}>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={item.image} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      );
    }

    _renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-arrow-round-forward"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        );
      };
      _renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-checkmark"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        );
      };
      
    _onDone = () => {
      // User finished the introduction. Show real app through
      // navigation or simply by controlling state
      this.setState({ showRealApp: true });
    }
    render() {
      
      if (this.state.showRealApp) {
        return <App /> ;
      } else { 
        return  <AppIntroSlider style={{flex: 1,backgroundColor: '#6ED4C8'}} renderItem={this._renderItem} data={slides} onDone={this._onDone} />;
      
      }
    }

  
   
  }

  const styles = StyleSheet.create({
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 96, // Add padding to offset large buttons and pagination in bottom of page
      },

     

  });
