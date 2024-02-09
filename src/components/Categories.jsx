import { FlatList, Text, View, Image, StyleSheet } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";
import Card from "./Card";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from "../global/colors";



function Categories({ setCategorySelected }) {
  return (
    <View>
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem setCategorySelected={setCategorySelected} category={item} />
        )}
        keyExtractor={(category) => category}
      />
      <View>
      <Card>
      <Feather name="map-pin" size={80} color="black" />
        <Text style={styles.text}>Ubicación</Text>
      </Card>
      </View>
      <View style={{marginTop: 15}}>
      <Card>
      <MaterialIcons name="contact-support" size={80} color="black" />
      <Text style={styles.text}>Contacto</Text>
      </Card>
      </View>
    </View>
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center'
  },
  text: {
    textAlignVertical: 'bottom',
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
    padding: 10,
    paddingTop: 30,
    paddingRight: 70
  },
});