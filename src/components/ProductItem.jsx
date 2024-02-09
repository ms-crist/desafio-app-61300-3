import { StyleSheet, Text, Image } from "react-native";
import Card from "./Card";
import Header from "./Header";
import { View } from "react-native-web";


const ProductItem = ({product}) => {
  return (
    <>
      <Card style={{marginVertical: 20}}>
        <View>
        <Text style={styles.text}>{product.title}</Text>
        </View>
        <View>
        <Image style={styles.image} source={{uri: product.images}}/>
        </View>
      </Card>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: 'PoppinsRegular'
  },
  image: {
    width: 70,
    height: 70
  }
});
