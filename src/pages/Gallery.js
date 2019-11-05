
import React, { Component } from 'react';
import {
    AppRegistry, StyleSheet, Text, View, TouchableWithoutFeedback,
    Modal, ScrollView, SafeAreaView, BackHandler
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header, Right, Left, Body, Icon, Button } from 'native-base';

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

    onBack = () => {
        BackHandler.addEventListener('hardwareBackPress', () => { return false });
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
            <SafeAreaView onBack={this.onBack()} style={styles.containerAll}>
                <Header style={styles.header}>
                    <Left style={styles.left}>
                        <Button transparent onPress={() => { this.props.navigation.goBack() }}>
                            <Icon type='FontAwesome' name='angle-left' style={styles.icon} />
                        </Button>
                    </Left>
                    <Body style={styles.body}>
                        <Text style={styles.face}>FACE</Text>
                    </Body>
                    <Right style={styles.right} />
                </Header>

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
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    containerAll: {
        flex: 2,
        backgroundColor: '#508CA4',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imagewrap: {
        margin: 2,
        padding: 2,
        height: hp('20%'),
        width: wp('40%'),
        margin: wp('5%'),
        backgroundColor: '#fff'
    },
    modal: {
        flex: 1,
        paddingTop: hp('18%'),
        paddingBottom: hp('18%'),
        width: wp('100%'),
        backgroundColor: 'rgba(0, 0, 0, 0.85)',

    },
    text: {
        color: '#ddd',
        fontSize: 18,
        alignSelf: 'flex-end',
        paddingRight: wp('4%')
    },
    header: {
        backgroundColor: "#508CA4",
        width: wp('100%'),
        height: hp('7%'),
    },
    icon: {
        color: '#fff',
    },
    left: {
        flex: 1
    },
    right: {
        flex: 1
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    face: {
        fontSize: 20,
        color: '#fff'
    }
});

AppRegistry.registerComponent('ImageGallery', () => ImageGallery);