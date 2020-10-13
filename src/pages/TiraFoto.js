import React, { Component } from 'react';
import {
    ImageBackground,
    Image,
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Linking,
    TouchableOpacity,
} from 'react-native';
import Theme from '../../Theme';
import ImagemRg from '../../assets/images/IconRG.png';
import ImagemCnh from '../../assets/images/IconCNH.png';
import Button from '../components/Button';
import { TextInputMask } from 'react-native-masked-text'
import Alert from '../components/Alert'
import Line from '../../assets/images/Line.png';



class TiraFoto extends Component {

    state = {
        foto: '',
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.viewLogin}>
                    <Text style={[styles.text, { fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 10 }]}>
                        Selecione o tipo de documento.
                    </Text>

                    <View style={styles.btns}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('TiraFotoRg')}
                            style={{ flex: 1 }}>
                            <Text
                                style={styles.text}>
                                <Image source={ImagemRg} resizeMode='contain'
                                />{'         '}
                  USAR MEU RG
                </Text>
                        </TouchableOpacity>
                        <Image source={Line} resizeMode='stretch' style={{ alignSelf: 'center' }}
                        />
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('TiraFotoCnh')}
                            style={{ flex: 1 }}>
                            <Text
                                style={styles.text}>
                                <Image source={ImagemCnh} resizeMode='contain'
                                />{'        '}
                  USAR MINHA CNH
                </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        height: '100%',
        backgroundColor: Theme.colors.primary,
    },
    viewLogin: {
        marginTop: 140,
        flex: 1,
    },
    viewText: {
        flex: 1,
    },
    text: {
        fontFamily: Theme.fonts.primary,
        fontSize: 22,
        color: Theme.colors.text,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    subtext: {
        fontFamily: Theme.fonts.primary,
        fontSize: 14,
        color: Theme.colors.textDark,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    btns: {
        marginTop: 180,
        flex: 1,
        justifyContent: 'center',
        // display: 'flex-end',
        padding: 5,
        height: 80,
        fontSize: 20,
        fontFamily: Theme.fonts.primary,
    },
});


export default TiraFoto;
