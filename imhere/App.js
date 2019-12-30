/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PermissionsAndroid,
} from "react-native";
import firebase from "firebase";
import MapView from "react-native-maps";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";


import reducers from "./src/reducers";
import LoginForm from "./src/LoginForm";

// メイン処理
class App extends Component {
  componentWillMount() {
    // firebaseの設定
    const config = {
      apiKey: "AIzaSyByWIOX_4Lv8D4zmBCgQw-vFxLm3Evq6To",
      authDomain: "imhere-app-0811.firebaseapp.com",
      databaseURL: "https://imhere-app-0811.firebaseio.com",
      projectId: "imhere-app-0811",
      storageBucket: "imhere-app-0811.appspot.com",
      messagingSenderId: "21057990366",
    };
    firebase.initializeApp(config);
  }

  // 描画処理
  // ログインフォームに直つなぎから、ルーターを利用したアクセスに変更する
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={{flex: 1}}>
          <View style={styles.header}><Text style={styles.headerText}>ログインフォーム</Text></View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
  /* // mapを表示
  return (
    <>
      <MapView
      style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </>
  );
  */
};

const styles = {
  header: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    paddingTop: 15,
    elevation: 2,
    position: 'relative'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600'
  }
};

/* // mapを表示するためのスタイルシート

const styles = StyleSheet.create({
  map: { ...StyleSheet.absoluteFillObject },
});
*/

export default App;
