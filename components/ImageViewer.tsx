import {Image, StyleSheet} from "react-native";
import {ImageSourcePropType} from "react-native/Libraries/Image/Image";

export default function ImageViewer({source}: { source: ImageSourcePropType }) {
    return (
      <Image source={source} style={styles.image}/>
    );
}

const styles = StyleSheet.create({
  image: {
      width: 320,
      height: 440,
      borderRadius: 18,
  }
});