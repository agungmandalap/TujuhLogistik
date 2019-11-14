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
    title: 'DATA MUATAN KENDARAAN'
  };

  constructor(props) {
    super(props);
    this.state = {
      TextInput_jenisAngkutan: '',
      TextInput_merkAngkutan: '',
      TextInput_kapasitasMuatan: '',
      TextInput_keterangan: '',

    };
  }

  InsertmuatanRecordsToServer = () => {
    fetch('http://192.168.1.119:8080/muatan/create', {
      method: 'POST',
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jenisAngkutan: this.state.TextInput_jenisAngkutan,
        merkAngkutan: this.state.TextInput_merkAngkutan,
        kapasitasMuatan: this.state.TextInput_kapasitasMuatan,
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

  GoTo_Show_muatanList_Activity_Function = () => {
    this.props.navigation.navigate('muatanRead');
  };
  render() {
    return (
      <View style={styles.MainContainer}>
           <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 7 }}>
          {" "}
          Pendaftaran Data Muatan{" "}
        </Text>

        <TextInput
          placeholder="Jenis Angkutan"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_jenisAngkutan: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Merk Angkutan"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_merkAngkutan: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Kapasitas Muatan"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_kapasitasMuatan: TextInputValue })
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
          onPress={this.InsertmuatanRecordsToServer}
        >
          <Text style={styles.TextStyle}>
            {' '}
            TAMBAHKAN DATA MUATAN{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.GoTo_Show_muatanList_Activity_Function}
        >
          <Text style={styles.TextStyle}>
            {' '}
            TAMPILKAN SELURUH DATA MUATAN{' '}
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
