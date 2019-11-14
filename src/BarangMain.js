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
    title: 'Data Barang'
  };

  constructor(props) {
    super(props);
    this.state = {
      TextInput_namaBarang: '',
      TextInput_hargaJual: '',
      TextInput_hargaBeli: '',
      TextInput_satuan: '',

    };
  }

  InsertbarangRecordsToServer = () => {
    fetch('http://192.168.1.119:8080/barang/create', {
      method: 'POST',
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        namaBarang: this.state.TextInput_namaBarang,
        hargaJual: this.state.TextInput_hargaJual,
        hargaBeli: this.state.TextInput_hargaBeli,
        satuan: this.state.TextInput_satuan,
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

  GoTo_Show_barangList_Activity_Function = () => {
    this.props.navigation.navigate('barangRead');
  };
  render() {
    return (
      <View style={styles.MainContainer}>
           <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 7 }}>
          {" "}
          Pendaftaran Data Barang{" "}
        </Text>

        <TextInput
          placeholder="Nama Barang"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_namaBarang: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Harga Jual"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_hargaJual: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Harga Beli"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_hargaBeli: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Satuan"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_satuan: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.InsertbarangRecordsToServer}
        >
          <Text style={styles.TextStyle}>
            {' '}
            TAMBAHKAN DATA BARANG{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.GoTo_Show_barangList_Activity_Function}
        >
          <Text style={styles.TextStyle}>
            {' '}
            TAMPILKAN SELURUH DATA BARANG{' '}
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
