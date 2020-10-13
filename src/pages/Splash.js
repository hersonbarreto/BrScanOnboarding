import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Theme from '../../Theme';
import { ActivityIndicator } from 'react-native-paper';
import Home from '../pages/Home'


class Splash extends Component {
    state = {
        loading: false
    };

    componentDidMount() {
        this.goHome();
    }

    goHome() {
        const { navigation } = this.props;
        navigation.navigate('Home');
    }

    render() {
        const { loading } = true;

        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: Theme.colors.primary }}>
                <ActivityIndicator animating={true} color={Theme.colors.surface} />
                {loading ? Teste.aviso({ width: '30%', alignSelf: 'center', marginTop: 20 }) : null}

            </View>
        );
    }

}

export default Splash;

