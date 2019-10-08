import React from 'react';
import { Button, Text, View } from 'react-native';

class Cadastrar extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Cadastrar!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Cadastrar')}
                />
            </View>
        );
    }
}

class Login extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Login</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

export default createAppContainer(createTopTabNavigator(
    {
        Cadastrar: { screen: Cadastrar },
        Login: { screen: Login },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
));
