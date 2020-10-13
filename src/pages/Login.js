import React, { Component } from "react";
import {
    ImageBackground,
    Image,
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Linking,
    TouchableOpacity
} from "react-native";
import Theme from "../../Theme";
import Button from "../components/Button";
import { TextInputMask } from 'react-native-masked-text'
import Alert from '../components/Alert'


class Login extends Component {

    state = {
        cpf: '',
    }

    login = () => {

        // this.setState({ loading: true });

        if (!this.validaCPF()) {
            Alert.aviso("CPF inválido!");
            return;
        } else {
            this.props.navigation.navigate('Tutorial')
        }
    }

    validaCPF() {
        const cpfField = this.cpfField.isValid();
        return cpfField;
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.viewLogin}>
                    <Text style={[styles.text, { fontWeight: 'bold', marginLeft: 15 }]}>
                        Para começar, preencha as informações abaixo.
                    </Text>
                    <View style={styles.viewLogin}>
                        <TextInputMask
                            style={Theme.input.default}
                            type={'cpf'}
                            placeholder='CPF'
                            placeholderTextColor={Theme.colors.textDark}
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={this.state.cpf}
                            onChangeText={cpf => this.setState({ cpf })}
                            blurOnSubmit={false}
                            ref={(ref) => this.cpfField = ref}
                        />
                    </View>
                    <Text style={[styles.subtext]}>
                        Ao continuar, você estará de acordo com a nossa
                    </Text>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('https://www.brscan.com.br/politica-de-privacidade-e-uso-de-cookies/');
                    }}>
                        <Text style={[styles.subtext, { textDecorationLine: 'underline', color: Theme.colors.text }]}>
                            Política de Privacidade
                    </Text>
                    </TouchableOpacity>

                    <Button
                        style={{ backgroundColor: Theme.colors.secondary, alignSelf: 'center', textColor: Theme.colors.primary }}
                        mode='text'
                        onPress={() => this.login()}
                        text='Avançar'
                    ></Button>
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
        width: '100%'
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
    }
});


export default Login;
