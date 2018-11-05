import React from "react";
import { View, Image, Dimensions } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { Header } from "./components/common";
import LibraryList from "./components/LibraryList";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <Image
          source={{ uri: "https://image.ibb.co/e7y6DL/SHIFT-1.png" }}
          style={{ width: Dimensions.get("window").width, height: 300 }}
        />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
