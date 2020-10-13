import React, { Component } from 'react';
import {
  ImageBackground,
  Image,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import ImagemInicial from '../../assets/images/IconHome.png';
import Tutorial from './Tutorial'
import Button from '../components/Button';
import Theme from '../../Theme';


class Home extends Component {


  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.viewImage}>
          <Image source={ImagemInicial} resizeMode='stretch' tintColor={'black'} />
        </View>
        <View style={styles.viewText}>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>
            BrSafe
          </Text>
          <Text style={styles.text}>
            BioFace
          </Text>
        </View>
        <Button
          style={{ fontFamily: Theme.fonts.primary, alignSelf: 'center' }}
          mode='text'
          onPress={() => this.props.navigation.navigate('Login')}
          text='Iniciar'
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  viewImage: {
    marginTop: 140,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  viewText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontFamily: Theme.fonts.primary,
    fontSize: 18,
    color: Theme.colors.textDark,
    alignSelf: 'center',
    marginRight: 5,
  }
});

export default Home;
