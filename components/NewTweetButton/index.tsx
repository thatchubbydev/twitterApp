import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
const NewTweetButton = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("NewTweet");
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <MaterialCommunityIcons name={"feather"} color={"white"} size={30} />
    </TouchableOpacity>
  );
};

export default NewTweetButton;
