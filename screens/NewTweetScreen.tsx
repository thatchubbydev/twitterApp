import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import ProfilePicture from "../components/ProfilePicture";

// import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
// import Feed from "../components/Feed";

// import tweets from "../data/tweets";
// import NewTweetButton from "../components/NewTweetButton";

export default function NewTweetScreen() {
  const [tweet, setTweet] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const onPostTweet = () => {
    console.log(`posting the tweet: ${tweet} 
    along with image: ${imageUrl}`)
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <AntDesign name={"close"} size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={onPostTweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture
          image={
            "https://upload.wikimedia.org/wikipedia/commons/c/c2/Tobey_Maguire_2014.jpg"
          }
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={"whats happening ?"}
            style={styles.textInput}
            multiline={true}
            numberOfLines={3}
            value={tweet}
            onChangeText={(value : string) => setTweet(value)}
          />
          <TextInput
            placeholder={"image url optional"}
            style={styles.imageInput}
            value={imageUrl}
            onChangeText={(value : string) => setImageUrl(value)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "white",
    marginTop: 35,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 15,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 20,
    marginBottom: 2,
  },
  buttonText: {
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  newTweetContainer: { flexDirection: "row", padding: 15 },
  inputContainer: { marginLeft: 10 },
  textInput: { height: 60, fontSize: 18, maxHeight: 300, alignItems: "center" },
  imageInput: {},
});
