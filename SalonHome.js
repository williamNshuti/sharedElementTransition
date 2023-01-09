import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import Salon from "./Salon";
const { width, height } = Dimensions.get("screen");
const SPACING = 10;
const ITEM_HEIGHT = height * 0.18;

export default function SalonHome({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={Salon}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ padding: SPACING }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("salonListDetails", { item });
              }}
              style={{
                marginBottom: SPACING,
                height: ITEM_HEIGHT,
              }}
            >
              <View
                style={{
                  flex: 1,
                  padding: SPACING,
                }}
              >
                <SharedElement
                  id={`item.${item.key}.bg`}
                  style={[StyleSheet.absoluteFillObject]}
                >
                  <View
                    style={[
                      StyleSheet.absoluteFillObject,
                      { backgroundColor: item.color, borderRadius: 16 },
                    ]}
                  />
                </SharedElement>
                <SharedElement id={`item.${item.key}.name`}>
                  <Text style={styles.name}>{item.name}</Text>
                </SharedElement>
                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                <SharedElement
                  id={`item.${item.key}.image`}
                  style={styles.image}
                >
                  <Image source={{ uri: item.picture }} style={styles.image} />
                </SharedElement>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <SharedElement id="general.bg">
        <View style={styles.bg}></View>
      </SharedElement>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  name: {
    fontWeight: "800",
    fontSize: 18,
    position: "absolute",
  },
  jobTitle: {
    fontSize: 11,
    opacity: 0.7,
    marginTop: 18 * 1.2,
  },
  image: {
    width: ITEM_HEIGHT * 0.8,
    height: ITEM_HEIGHT * 0.8,
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
    right: SPACING,
  },
  bg: {
    position: "absolute",
    width,
    height,
    backgroundColor: "red",
    transform: [{ translateY: height }],
    borderRadius: 32,
  },
});
