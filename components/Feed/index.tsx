import React from "react";
import { Text, View, FlatList } from "react-native";
import tweets from "../../data/tweets";
import Tweets from "../Tweets";

const Feed = () => (
  <View style={{width:'100%'}}>
    <FlatList
      data={tweets}
      renderItem={({ item }) => <Tweets tweet={item} />}
      keyExtractor={(item) => item.id}
    />
  </View>
);

export default Feed;
