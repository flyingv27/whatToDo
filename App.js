import React, { Component } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Linking
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import EventItem from "./EventItem";
import axios from "axios";

const API = "6f6f2e9c080b4c369c466d5a57ccd79c";
const result = 20;
const finalURL = `https://openapi.gg.go.kr/Ggculturevent?KEY=${API}&Type=json&pIndex=1&pSize=100`;

export default class App extends Component {
  state = {
    isLoading: true,
    eventItem: []
  };
  componentDidMount() {
    this.goFetch();
  }
  goFetch = async () => {
    console.log("1111");
    const {
      data: {
        Ggculturevent: [, items]
      }
    } = await axios.get(finalURL);
    //console.log(items.row);

    this.setState({ isLoading: false, eventItem: items.row });
    console.log(this.state.eventItem);
  };

  renderItem = ({ item }) => {
    return (
      /*
      <View>
        <ScrollView>
          <View>
            <Text>{item.INST_NM}</Text>
            <View style={styles.separator}></View>
            <Image
              style={{ height: 180, resizeMode: "contain" }}
              source={{ uri: item.IMAGE_URL }}
            />
            <View style={styles.separator}></View>
            <Text>{item.TITLE}</Text>
            <View style={styles.separator}></View>
          </View>
        </ScrollView>
      </View>*/
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() => Linking.openURL(item.SNTNC_URL)}
      >
        <View style={styles.listItem}>
          <Image
            source={{ uri: item.IMAGE_URL }}
            style={{ width: 60, height: 100, borderRadius: 5 }}
          />
          <View style={{ alignItems: "center", flex: 1, padding: 5 }}>
            <Text style={{ fontWeight: "bold", padding: 2 }}>
              {item.INST_NM}
            </Text>
            <Text style={{ padding: 2 }}>{item.TITLE}</Text>
            <Text style={{ padding: 2 }}>
              행사기간 :
              <Text style={{ color: "green" }}> {item.EVENT_PERD}</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { isLoading, eventItem } = this.state;
    console.log(isLoading);

    if (isLoading) {
      return <Text> Loading...</Text>;
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.navBar}>
            <Icon name="alarm" color="#900" size={25} />
            <Text style={styles.navBarTitle}>경기도</Text>
          </View>
          <View style={styles.body}>
            <FlatList
              data={eventItem}
              renderItem={this.renderItem}
              keyExtractor={item => item.IMAGE_URL}
            ></FlatList>
          </View>
          <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItem}>
              <Icon name="search" size={25} />
              <Text style={styles.tabTitle}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
              <Icon name="settings" size={25} />
              <Text style={styles.tabTitle}>Settings</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    height: 55,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgb(50, 50, 50)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0
    }
  },
  navBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#314FE6",
    marginLeft: 10
  },
  tabBar: {
    height: 60,
    backgroundColor: "white",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  body: {
    flex: 1
  },
  tabTitle: {
    fontSize: 10
  },
  tabItem: {
    justifyContent: "center",
    alignItems: "center"
  },
  separator: {
    marginVertical: 5
    //borderBottomColor: "#737373",
    //borderBottomWidth: StyleSheet.hairlineWidth
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#f2f2f2",
    width: "90%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "space-between"
  }
});
