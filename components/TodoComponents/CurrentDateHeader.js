import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";
export default class CurrentDateHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      markedDate: moment(new Date()).format("YYYY-MM-DD"),
    };
  }
  render() {
    const today = this.state.currentDate;
    const day = moment(today).format("dddd");
    const date = moment(today).format("MMMM D, YYYY");
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.day}>{day}</Text>
          <Text style={styles.small}>{date}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  day: {
    fontSize: 30,
    color: "#fff",
  },
  small: {
    fontSize: 16,
    color: "#fff",
  },
});
