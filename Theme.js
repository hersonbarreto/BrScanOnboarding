import { DefaultTheme } from 'react-native-paper';
import Styles from './Styles';
import { Platform } from "react-native";


export default {
    ...DefaultTheme,
    roundness: 10,
    colors: {
        ...DefaultTheme.colors,
        primary: '#c42b24',
        secondary: '#FFFFFF',
        text: '#FFFFFF',
        textDark: '#000000',
        background: '#c42b24',
        border: '#B9D2EA',
        barColor: '#0251A0',
        barStyle: 'light-content',
        destaque: '#0cc0ab',
        barBg: '#FFF',
        disable: '#cfcfcf',
        enable: '#6f6f6f',
        ...Styles.colors
    },
    fonts: {
        primary: Platform.select({
            ios: 'IBM Plex Sans',
            android: 'IBM Plex Sans'
        }),
    },
    title: {
        fontSize: 22,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: 5,
        ...Styles.title
    },
    subtitle: {
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 5,
        ...Styles.subtitle
    },
    button: {
        success: {
            backgroundColor: '#00bea8',
            color: '#FFF',
            ...(Styles.button ? Styles.button.success : {})
        },
        bottonDegrade: {
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: 5,
            borderRadius: 25,
            width: '80%',
            marginBottom: 5,
            marginTop: 50,
            ...(Styles.button ? Styles.button.bottonDegrade : {})
        },
        bottonLabel: {
            color: DefaultTheme.colors.surface,
            textAlign: 'center',
            textTransform: 'uppercase',
            ...(Styles.button ? Styles.button.bottonLabel : {})
        },
        bottonDefalt: {
            color: DefaultTheme.colors.primary,
            textAlign: 'center',
            textTransform: 'uppercase',
            ...(Styles.button ? Styles.button.bottonLabel : {})
        }
    },
    input: {
        default: {
            backgroundColor: 'transparent',
            borderBottomWidth: 0.6,
            borderColor: '#FFF',
            width: '85%',
            color: '#FFF'
        }
    },
};