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
import ImagemCnhFrente from '../../assets/images/IconCNHFrente.png';
import ImagemCnhVerso from '../../assets/images/IconCNHVerso.png';
import ImagemCnhFrenteVerso from '../../assets/images/IconCNHFrenteVerso.png';
import Line from '../../assets/images/Line.png';
import Button from '../components/Button';
import { TextInputMask } from 'react-native-masked-text'
import Alert from '../components/Alert'
import { RNCamera } from 'react-native-camera';



class TiraFotoCnh extends Component {

    state = {
        foto: '',
    }

    tiraFoto() {
        <View style={styles.container}>
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permissão para usar câmera',
                    message: 'É necessário dar a permissão para usar a sua câmera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancelar',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                }}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> Tirar Foto </Text>
                </TouchableOpacity>
            </View>
        </View>
    }

    takePicture = async () => {
        const { foto } = this.state;
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            this.setState({ foto: data.uri });
            console.log(data.uri);
        }
        this.props.navigation.navigate('Sucesso');
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.viewLogin}>
                    <Text style={[styles.text,]}>
                        Escolha como quer enviar a sua CNH.
                    </Text>

                    <View style={styles.btns}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('TiraRg')}
                            style={{ flex: 1 }}>
                            <Text
                                style={{
                                    margin: 5,
                                    textAlign: 'center',
                                    fontSize: 20,
                                    color: '#fff',
                                }}>
                                <Image source={ImagemCnhFrente} resizeMode='stretch'
                                />
                                FOTO DA FRENTE
                            </Text>
                        </TouchableOpacity>
                        <Image source={Line} resizeMode='stretch'
                        />
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('TiraRg')}
                            style={{ flex: 1 }}>
                            <Text
                                style={{
                                    margin: 5,
                                    textAlign: 'center',
                                    fontSize: 20,
                                    color: '#fff',
                                }}>
                                <Image source={ImagemCnhVerso} resizeMode='stretch'
                                />
                                FOTO DO VERSO
                                </Text>
                        </TouchableOpacity>
                        <Image source={Line} resizeMode='stretch'
                        />
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('TiraRg')}
                            style={{ flex: 1 }}>
                            <Text
                                style={{
                                    margin: 5,
                                    textAlign: 'center',
                                    fontSize: 20,
                                    color: '#fff',
                                }}>
                                <Image source={ImagemCnhFrenteVerso} resizeMode='stretch'
                                />
                            FRENTE E VERSO
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
        marginTop: 20,
        flex: 1,
        justifyContent: 'space-between',
        // display: 'flex-end',
        padding: 5,
        height: 80,
        fontSize: 20,
        fontFamily: Theme.fonts.primary,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});


export default TiraFotoCnh;
