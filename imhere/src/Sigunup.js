import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

import {signup} from './firebase';

// ユーザー登録画面
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  // ユーザー登録
  signUp = () => {
    const {email, password} = this.state;
    signup(email, password);
  };

  // ユーザーログイン
  /*
  login = () => {
    const {email, password} = this.state;
    login(email, password);
  };*/

  render() {
    return (
      <View>
        <View>
          <Text>メールアドレス</Text>
          <TextInput
            onChangeText={email => this.setState({email})}
            value={this.state.email}
            placeholder="メールアドレスを入力してください"
            placeholderTextColor="#777"
          />
        </View>

        <View>
          <Text>パスワード</Text>
          <TextInput
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            placeholder="パスワードを入力してください"
            placeholderTextColor="#777"
          />
        </View>

        <View style={{paddingTop: 32}}>
          <Button title="送信" onPress={() => this.signUp()} />
        </View>
      </View>
    );
  }
}

export default Login;
