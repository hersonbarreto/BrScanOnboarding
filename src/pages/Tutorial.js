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
import ImagemTutorial1 from '../../assets/images/DocIconFrenteDocumento.png';
import ImagemTutorial2 from '../../assets/images/DocIconAcessoCamera.png';
import ImagemTutorial3 from '../../assets/images/DocIconLuz.png';
import ImagemTutorial4 from '../../assets/images/DocIconPlastico.png';
import ImagemTutorial5 from '../../assets/images/DocIconFundoEstampado.png';
import ImagemTutorial6 from '../../assets/images/DocIconReflexo.png';
import ImagemTutorial7 from '../../assets/images/DocInicioIcon.png';
import ImagemTutorial8 from '../../assets/images/DocIconTrasDocumento.png';
import Button from '../components/Button';
import Theme from '../../Theme';
import Swiper from 'react-native-swiper'
import Header from '../components/Header'


class Tutorial extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* <View style={styles.viewImage}>
          <Image source={ImagemInicial} resizeMode='stretch' tintColor={'black'} />
        </View>
        <View style={styles.viewText}>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>
            Vamos Lá!
          </Text>
          <Text style={styles.text}>
            Tenha seus documentos em mãos, RG ou CNH
          </Text>
        </View>
        <Button
          style={{ fontFamily: Theme.fonts.primary, alignSelf: 'center' }}
          mode='text'
          onPress={() => this.props.navigation.navigate('Login')}
          text='Iniciar'
        ></Button> */}

        <Swiper style={styles.wrapper} loop={false} showsPagination={false} nextButton={true} scrollEnabled={false} index={0} >
          <View style={styles.viewImage}>
            <View style={styles.viewImage}>
              <Image source={ImagemTutorial1} resizeMode='stretch' tintColor={'black'} />
            </View>
            <View style={styles.viewText}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>
                Vamos Lá!
          </Text>
              <Text style={styles.text}>
                Tenha seus documentos em mãos, RG ou CNH
          </Text>
            </View>
            <Button
              style={{ fontFamily: Theme.fonts.primary, alignSelf: 'center' }}
              mode='text'
              onPress={() => Swiper.scrollBy(1)}
              text='Avançar'
            ></Button>
          </View>
          <View style={styles.viewImage}>
            <View style={styles.viewImage}>
              <Image source={ImagemTutorial2} resizeMode='stretch' tintColor={'black'} />
            </View>
            <View style={styles.viewText}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>
                Você precisa liberar o acesso à câmera para fotografar os documentos.
          </Text>

            </View>
            <Button
              style={{ fontFamily: Theme.fonts.primary, alignSelf: 'center' }}
              mode='text'
              onPress={() => Swiper.scrollTo('next')}
              text='Autorizar'
            ></Button>
          </View>
          <View style={styles.viewImage}>
            <View style={styles.viewImage}>
              <Image source={ImagemTutorial3} resizeMode='stretch' tintColor={'black'} />
            </View>
            <View style={styles.viewText}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>
                Escolha um local iluminado
          </Text>
              <Text style={styles.text}>
                Posicione seu documento em uma superfície lisa e, de preferência, escura
          </Text>
            </View>
            <Button
              style={{ fontFamily: Theme.fonts.primary, alignSelf: 'center' }}
              mode='text'
              onPress={() => Swiper.scrollTo('next')}
              text='Entendi'
            ></Button>
          </View>
          <View style={styles.viewImage}>
            <View style={styles.viewImage}>
              <Image source={ImagemTutorial4} resizeMode='stretch' tintColor={'black'} />
            </View>
            <View style={styles.viewText}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>
                Retire o documento do plástico
          </Text>
            </View>
            <Button
              style={{ fontFamily: Theme.fonts.primary, alignSelf: 'center' }}
              mode='text'
              onPress={() => Swiper.scrollTo('next')}
              text='Entendi'
            ></Button>
          </View>
          <View style={styles.viewImage}>
            <View style={styles.viewImage}>
              <Image source={ImagemTutorial5} resizeMode='stretch' tintColor={'black'} />
            </View>
            <View style={styles.viewText}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>
                Evite fundos estampados
          </Text>
            </View>
            <Button
              style={{ fontFamily: Theme.fonts.primary, alignSelf: 'center' }}
              mode='text'
              onPress={() => Swiper.scrollTo('next')}
              text='Entendi'
            ></Button>
          </View>
          <View style={styles.viewImage}>
            <View style={styles.viewImage}>
              <Image source={ImagemTutorial6} resizeMode='stretch' tintColor={'black'} />
            </View>
            <View style={styles.viewText}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>
                Evite reflexos no documento
          </Text>
            </View>
            <Button
              style={{ fontFamily: Theme.fonts.primary, alignSelf: 'center' }}
              mode='text'
              onPress={() => Swiper.scrollTo('next')}
              text='Entendi'
            ></Button>
          </View>
          <View style={styles.viewImage}>
            <View style={styles.viewImage}>
              <Image source={ImagemTutorial7} resizeMode='stretch' tintColor={'black'} />
            </View>
            <View style={styles.viewText}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>
                Fotografe a frente do documento
          </Text>
              <Text style={styles.text}>
                Use o lado que possui sua foto.
          </Text>
            </View>
            <Button
              style={{ fontFamily: Theme.fonts.primary, alignSelf: 'center' }}
              mode='text'
              onPress={() => Swiper.scrollTo('next')}
              text='Entendi'
            ></Button>
          </View>
          <View style={styles.viewImage}>
            <View style={styles.viewImage}>
              <Image source={ImagemTutorial8} resizeMode='stretch' tintColor={'black'} />
            </View>
            <View style={styles.viewText}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>
                Fotografe o verso do documento
          </Text>
              <Text style={styles.text}>
                Use o lado que não possui foto.
          </Text>
            </View>
            <Button
              style={{ fontFamily: Theme.fonts.primary, alignSelf: 'center' }}
              mode='text'
              onPress={() => this.props.navigation.navigate('TiraFoto')}
              text='Entendi'
            ></Button>
          </View>
        </Swiper>
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
    marginTop: 100,
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
    width: '30%',
    color: Theme.colors.textDark,
    alignSelf: 'center',
    marginRight: 5,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
});

export default Tutorial;
