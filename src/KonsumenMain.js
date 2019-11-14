import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';


export default class MainActivity extends Component {
  static navigationOptions = {
    title: 'Data Konsumen'
  };

  constructor(props) {
    super(props);
    this.state = {
      TextInput_nama: '',
      TextInput_alamat: '',
      TextInput_telepon: '',
      TextInput_keterangan: '',

    };
  }

  InsertkonsumenRecordsToServer = () => {
    fetch('http://192.168.1.119:8080/konsumn/create', {
      method: 'POST',
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nama: this.state.TextInput_nama,
        alamat: this.state.TextInput_alamat,
        telepon: this.state.TextInput_telepon,
        keterangan: this.state.TextInput_keterangan,
      }),
    })
    .then(response => response.text())
    .then(response => {
      // Showing response message coming from server after inserting records.
      Alert.alert(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  GoTo_Show_konsumenList_Activity_Function = () => {
    this.props.navigation.navigate('konsumenRead');
  };
  render() {
    return (
      <View style={styles.MainContainer}>
           <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 7 }}>
          {" "}
          Pendaftaran Data Konsumen{" "}
        </Text>

        <TextInput
          placeholder="Nama Konsumen"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_nama: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Alamat Konsumen"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_alamat: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Telepon Konsumen"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_telepon: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Keterangan"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_keterangan: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.InsertkonsumenRecordsToServer}
        >
          <Text style={styles.TextStyle}>
            {' '}
            TAMBAHKAN DATA KONSUMEN{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.GoTo_Show_konsumenList_Activity_Function}
        >
          <Text style={styles.TextStyle}>
            {' '}
            TAMPILKAN SELURUH DATA KONSUMEN{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'
  },

  MainContainer_For_Show_barangList_Activity: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
  },

  TextInputStyleClass: {
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#30cb63',
    borderRadius: 5
  },

  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#30cb63'
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center'
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  }
});
