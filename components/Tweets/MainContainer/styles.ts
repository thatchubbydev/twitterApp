import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 10 },

  tweetHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tweetHeaderNames: {
    flexDirection: "row",
  },
  name: { marginRight: 5, fontWeight: "bold" },
  userName: { marginRight: 5, color: "grey" },
  createdAt: { marginRight: 5, color: "grey" },
  content: {
    marginTop: 5,
    lineHeight: 19,
    // textAlign:'auto'
  },
  image:{
    marginVertical:10,
    width:'100%',
    height:200,
    borderRadius:15,
    resizeMode:'cover',
    overflow:'hidden'
  }
});

export default styles;
