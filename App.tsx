import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from 'expo-image-picker';
import {useState} from "react";
import {ImagePickerSuccessResult} from "expo-image-picker/src/ImagePicker.types";

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {

    const [selectedImage, setSelectedImage] = useState<ImagePickerSuccessResult>(null);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) {
            setSelectedImage(result);
        } else {
            alert('You did not select any image.')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer source={selectedImage ? {uri: selectedImage.assets[0].uri} : PlaceholderImage}/>
            </View>
            <View style={styles.footerContainer}>
                <Button label="Choose a photo" theme={"primary"} onPress={pickImageAsync}/>
                <Button label="Use this photo" />
            </View>
            <StatusBar style="light"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    }
});
