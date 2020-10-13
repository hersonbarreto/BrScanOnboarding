
import Theme from '../../Theme';
import React from 'react';
import { IconButton, Appbar } from 'react-native-paper';
import { NavigationActions } from 'react-navigation';



export default props => {
    const { navigation, scene } = props;


    const button = () => {
        if (scene && scene.index !== 0) {
            const backAction = NavigationActions.back();

            return (
                <Appbar.BackAction
                    onPress={() => navigation.dispatch(backAction)}
                />
            );
        }

        return (
            <IconButton
                icon="menu"
                color={props.iconColor || Theme.colors.surface}
                size={30}
                onPress={() => navigation.toggleDrawer()}
            />
        );
    }

    return (
        <Appbar.Header style={props.style}>
            {button()}
            {props.children || <Appbar.Content
            />}
        </Appbar.Header>
    )
}