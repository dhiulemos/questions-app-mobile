
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Modal,
    ScrollView
} from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { Header } from 'react-native-elements';

import ImageElement from '../components/ImageElement';

export default class ImageGallery extends Component {
    state = {
        modalVisible: false,
        modalImage: require('../resources/galleryImages/musculos-faciais-1.jpg'),
        images: [
            require('../resources/galleryImages/musculos-faciais-1.jpg'),
            require('../resources/galleryImages/musculos-faciais-2.jpg'),
            require('../resources/galleryImages/musculos-faciais-3.jpg'),
            require('../resources/galleryImages/musculos-faciais-4.jpg'),
            require('../resources/galleryImages/musculos-faciais-5.jpg'),
            require('../resources/galleryImages/musculos-faciais-6.jpg'),
            require('../resources/galleryImages/musculos-faciais-7.png'),
            require('../resources/galleryImages/musculos-faciais-8.jpeg'),
            require('../resources/galleryImages/musculos-faciais-9.jpg'),
            require('../resources/galleryImages/musculos-faciais-10.jpg'),
            require('../resources/galleryImages/anatomia.png'),
            require('../resources/galleryImages/ossos-da-face.jpg')
        ]
    }

    setModalVisible(visible, imageKey) {
        this.setState({ modalImage: this.state.images[imageKey] });
        this.setState({ modalVisible: visible });
    }

    getImage() {
        return this.state.modalImage
    }

    render() {

        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key={key}
                onPress={() => { this.setModalVisible(true, key) }}>
                <View style={styles.imagewrap}>
                    <ImageElement imgsource={val}></ImageElement>
                </View>
            </TouchableWithoutFeedback>
        })
        return (
            <View style={styles.containerAll}>
                <Header
                    leftComponent={{ icon: 'home', color: '#fff' }}
                    centerComponent={{ text: 'GALERIA', style: { color: '#f7a219', fontSize: 25 } }}
                    containerStyle={{
                        backgroundColor: '#508CA4',
                        height: heightPercentageToDP('8%')
                    }}
                />

                <ScrollView>
                    <View style={styles.container}>
                        <Modal style={styles.modal} animationType={'fade'}
                            transparent={true} visible={this.state.modalVisible}
                            onRequestClose={() => { }}>
                            <View style={styles.modal}>
                                <Text style={styles.text}
                                    onPress={() => { this.setModalVisible(false) }}>Fechar</Text>
                                <ImageElement imgsource={this.state.modalImage}></ImageElement>
                            </View>
                        </Modal>

                        {images}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerAll: {
        flex: 1,
        backgroundColor: '#508CA4',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#508CA4'
    },
    imagewrap: {
        margin: 2,
        padding: 2,
        height: heightPercentageToDP('20%'),
        width: widthPercentageToDP('40%'),
        margin: widthPercentageToDP('5%'),
        backgroundColor: '#fff'
    },
    modal: {
        flex: 1,
        paddingTop: heightPercentageToDP('18%'),
        paddingBottom: heightPercentageToDP('18%'),
        width: widthPercentageToDP('100%'),
        backgroundColor: 'rgba(0, 0, 0, 0.85)',

    },
    text: {
        color: '#ddd',
        fontSize: 18,
        alignSelf: 'flex-end',
        paddingRight: widthPercentageToDP('4%')
    }
});

AppRegistry.registerComponent('ImageGallery', () => ImageGallery);