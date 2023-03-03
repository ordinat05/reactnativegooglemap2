import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";

// import bgImage from "./img/mercan.jpg";

export default class App extends React.Component {
  state = {
    name: "",
  };

  _onChangeName = (text) => {
    this.setState({
      name: text,
    });
  };
  render() {
    const { name } = this.state;

    return (
      <View style={styles.container}>
        {/* <View
        style={{ width: 100, height: 100, backgroundColor: "orange" }}
      ></View>
      <View
        style={{ width: 100, height: 100, backgroundColor: "black" }}
      ></View>
      <View style={{ width: 100, height: 100, backgroundColor: "red" }}></View> */}
        {/* <Image
        style={{
          width: 400,
          height: 400,
          borderRadius: 5,
          borderColor: "white",
        }}
        resizeMode="center"
        source={require("./img/agac.jpg")}
      /> */}
        {/* <Image
        style={{
          width: 400,
          height: 400,
          borderRadius: 5,
          borderColor: "white",
        }}
        resizeMode="scale"
        source={{
          uri: "https://ichef.bbci.co.uk/news/976/cpsprodpb/10B31/production/_117310486_15.jpg",
        }}
      /> */}
        <Text>Merhaba!</Text>
        <Button
          onPress={() => alert("Butona tıkladın")}
          title="Ben bir butonum"
        ></Button>

        {/* <TouchableOpacity
        style={styles.touchStyle}
        onPress={() => alert("TouchableOpacity image e tıkladın")}
      >
        <Image
          style={{
            width: 20,
            height: 20,
            borderRadius: 2,
            borderColor: "blue",
          }}
          source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAflBMVEUiIiIjJCQiIyMeFhQfGBYdFRIgGxoiISEjJSU/d4dOorlHjqExT1chHx5KmK1cy+lFiJpg1fZMnrMmLjAtQ0ktQUYbDwxTsss8bnxWudUgHh1k4v8zU1xSrMVZwt4qOT1i3f5Jk6YYBQBCgJBe0exn7v9NobRl5f8zUlonMTShgfcrAAABvklEQVR4AYxTh2KEIAwVhIigjQtEOfTs7f//wYbu3cZt4ngr+38xzj6dfqpcSOA8yzgHKfLPXV6oUptK1JzVojK6VAX/OAB32Oi26wH6rtUN3gH/2B9a64Qd0VocrXC2HT5MqNxPNWMwG0QzA2Pz5KV6PyDLcaaDsCFYQZ15LD8N+IkQQI9Ngz0Qks9vgB0WMmNxWdclskwWuAP1jqPZrdh04xKQKixj1+DqZvbKgbBm2aPZgrdUPmwG94ux4okLXvOmHXcm3nda5kWRS93dR7Mb24bXaaLIIlbgLB6Oq/DT5MV6PKB1UGGkZsakxz5nau5OB1cFqsodTt2sWN6jl4wGzptTCWiwrry07aV0NiSQym1nyYjEEnvx3RtEj2WuCAOPy9s/LMvbPyyRmgmFMm1MKHQnBedCdjqhiK1RNX/mYdiIh8YEv1L5YBriYRvEqyc4yBWNfmNSG1zle70VXEkLpZ60UIq0uMJXNTnc8HDAG9Dpj37Y73/0Q60YQIPYADBVpzd868lhwPjiyc+uPuhW3wBudDh8dnXKxSFuFczkV6i2ePicC5pIycp4RmtK1sNA8ph5kxHKAuVN6gEA/rwmbXOgJcQAAAAASUVORK5CYII=",
          }}
        />
      </TouchableOpacity> */}
        <Text style={{ marginTop: 15 }}>{name}</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Kullanıcı Adı"
          placeholderTextColor={"red"}
          onChangeText={this._onChangeName}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Parola"
          placeholderTextColor={"red"}
          onChangeText={this._onChangeName}
        ></TextInput>
        <TouchableOpacity style={styles.touchStyle}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    backgroundColor: "yellow",
    // alignItems: "stretch",
    // alignItems: "flex-start",
    // alignItems: "flex-end",
    alignItems: "center",
    // alignItems: "baseline",
    justifyContent: "center",
  },
  touchStyle: {
    width: 200,
    height: 30,
    backgroundColor: "red",
    marginTop: 15,
    opacity: 0.99,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    marginTop: 15,
    width: 300,
    height: 40,
    borderWidth: 2,
    color: "black",
    borderRadius: 10,
    backgroundColor: "white",
    // text-indent: 30;
    // paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
