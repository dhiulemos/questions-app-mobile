import React from 'react';
import { Header } from 'react-native-elements'

export default class Header extends Component {
    render() {
        return (
            <Header
                centerComponent={{ text: 'FACE', style: { color: '#f7a219', fontSize: 25 } }}
                containerStyle={{
                    backgroundColor: '#508CA4',
                    height: heightPercentageToDP('8%')
                }}
            />
        )
    }
}