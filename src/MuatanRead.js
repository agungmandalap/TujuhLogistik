import React from "react";
import { StyleSheet, View, ActivityIndicator, FlatList, Text, TouchableOpacity  } from 'react-native';

export default class Source extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Data Muatan",
      headerStyle: {backgroundColor: "#fff"},
      headerTitleStyle: {textAlign: "center",flex: 1}
     };
    };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[]
     };
   }

  componentDidMount(){
    fetch('http://192.168.1.119:8080/muatan')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          loading: false,
          dataSource: responseJson
        })

      })

      .catch(error=>console.log(error)) //to catch the errors if any
      }

  GetStudentIDFunction = (
    id,
    jenisAngkutan,
    merkAngkutan,
    kapasitasMuatan,
    keterangan
  ) => {
    this.props.navigation.navigate('muatanEdit', {
      ID: id,
      JENISANGKUTAN: jenisAngkutan,
      MERKANGKUTAN: merkAngkutan,
      KAPASITASMUATAN: kapasitasMuatan,
      KETERANGAN: keterangan,
    });
  };

  FlatListItemSeparator = () => {
    return (
      <View style={{
         height: .7,
         width:"100%",
         backgroundColor:"rgba(0,0,0,0.5)",
    }}
    />
    );
  };

  renderItem=(data)=>
  <TouchableOpacity style={styles.ist}
  onPress={this.GetStudentIDFunction}>
  <Text style={styles.lightText}>{data.item.id}</Text>
  <Text style={styles.lightText}>{data.item.jenisAngkutan}</Text>
  <Text style={styles.lightText}>{data.item.merkAngkutan}</Text>
  <Text style={styles.lightText}>{data.item.kapasitasMuatan}</Text>
  <Text style={styles.lightText}>{data.item.keterangan}</Text></TouchableOpacity>
  render(){
   if(this.state.loading){
    return( 
      <View style={styles.loader}> 
        <ActivityIndicator size="large" color="#0c9"/>
      </View>
  )}

    return (
      <View style={styles.MainContainer_For_Show_StudentList_Activity}>
        <FlatList
            data= {this.state.dataSource}
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item.id.toString()}
            />
            </View>
            )}
            }

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'
  },

  MainContainer_For_Show_StudentList_Activity: {
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