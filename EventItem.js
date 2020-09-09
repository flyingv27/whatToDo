import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  SafeAreaView,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class EventItem extends Component {
  render() {
    const { INST_NM, IMAGE_URL, TITLE } = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text>{INST_NM}</Text>
            <View style={styles.separator}></View>
            <Image
              style={{ height: 180, resizeMode: "contain" }}
              source={{ uri: IMAGE_URL }}
            />
            <View style={styles.separator}></View>
            <Text>{TITLE}</Text>
            <View style={styles.separator}></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  titText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  content: {
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow"
  },
  nameInput: {
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: "skyblue",
    width: "80%",
    height: "10%"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 3,
    padding: 5,
    height: "10%"
  },
  btnTitle: {
    fontSize: 15
  },
  separator: {
    marginVertical: 5
    //borderBottomColor: "#737373",
    //borderBottomWidth: StyleSheet.hairlineWidth
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
    height: "50%"
  }
});
