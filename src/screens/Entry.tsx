import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { Button } from "native-base";

// interface Props {}

interface PropsWithChildren {
  // revisit
  switchScreen: any;
}

const Entry: React.FC<PropsWithChildren> = (props) => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/img/landing.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.imageView}>
          <Text style={styles.title}>The Geo Fiction App</Text>
          <Button
            block={true}
            onPress={() => props.switchScreen("screen")}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Start Searching</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: "100%"
  },
  imageView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: "#3005FF",
    alignItems: "center"
  },
  buttonStyle: {
    margin: 10
  },
  buttonText: {
    color: "#fff"
  }
});

export default Entry;

// class Entry extends Component {
//   render() {>
//     return (
//       <View style={styles.root}>
//         <ImageBackground
//           source={require("../../assets/img/landing.jpg")}
//           style={styles.backgroundImage}
//         >
//           <View style={styles.imageView}>
//             <Text style={styles.title}>The Geo Fiction App</Text>
//             <Button block={true} onPress={() => {}} style={styles.buttonStyle}>
//               <Text style={styles.buttonText}>Start Searching</Text>
//             </Button>
//           </View>
//         </ImageBackground>
//       </View>
//     );
//   }
// }

// export default Entry;
