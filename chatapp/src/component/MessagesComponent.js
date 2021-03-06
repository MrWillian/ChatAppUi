import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TextInput
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MessagesComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data_messages: [
        {
            id:'rwBa06nqlR',
            user_id: 'trongtinh_Rc0LjZ54yj',
            user_name: 'TRONG TINH',
            user_avatar: require("../images/avatar_default.png"),
            sender_id: 'trongtinh_Rc0LjZ54yj',
            messages: 'Hello',
            readed: false,
            num_messages_readed:6,
            created_at: 'Few seconds',
        },
        {
            id:'qKwgXmIoN0',
            user_id: 'huynhnhu_R3J4WUoWXJ',
            user_name: 'HUYNH NHU',
            user_avatar: require("../images/avatar_default.png"),
            sender_id: 'trongthanh_O7xyqYRvo1',
            messages: 'What are you doing?',
            readed: true,
            num_messages_readed:0,
            created_at: '1 minute',
        },
        {
            id:'ucPA0NXweB',
            user_id: 'trongthat_IlpBApYmye',
            user_name: 'TRONG THAT',
            user_avatar: require("../images/avatar_default.png"),
            sender_id: 'trongthat_IlpBApYmye',
            messages: 'Why?',
            readed: false,
            num_messages_readed:3,
            created_at: '1 day ago',
        }
      ]
    }
  }

  renderItem = ({item}) => {
    return(
      <TouchableOpacity style={styles.item_container}>
        <Image 
          source={item.user_avatar}
          style={{width:50, height: 50}}
          resizeMode={"stretch"}
        />
        <View style={styles.item_messages}>
          <View styles={{flex:1}}>
            <Text style={{color:'black', fontWeight: item.reader ? null : 'bold'}}>
              {item.user_name}
            </Text>
            <Text style={{ 
              color: 'black', 
              fontSize: 12, 
              fontWeight: item.readed ? null : 'bold',
              marginTop: 3}}>
                {item.messages}
            </Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{
              color: 'black', 
              fontSize: 12,
              fontStyle: 'italic',
              fontWeight: item.readed ? null : 'bold',
              textAlign: 'right'}}>
                {item.created_at}
            </Text>
            
            {item.readed ? null : 
              <View style={styles.num_readed}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12}}>
                  {item.num_messages_readed > 5 ? "5+" : item.num_messages_readed}
                </Text>
              </View>
            }
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  ItemSeparatorComponent = () => {
    return (
      <View style={{height: 1, paddingVertical: 10}} />
    );
  }

  render() {
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <View style={{height: '65%'}}>
            <ImageBackground
              source={require('../images/header_message.png')}
              style={styles.imgBackground}
              resizeMode={"stretch"}>
                <View style={styles.imageBackground_container}>
                  <View style={styles.logo}>
                    <Image source={require('../images/avatar_default.png')} style={{width:80, height:80}} />
                  </View>
                  <View style={styles.user}>
                    <Text numberOfLines={1} style={styles.user_name}>HUYNH TRONG THANH</Text>
                    <View style={styles.action}>
                      <TouchableOpacity style={styles.icon}>
                        <AntDesign name="scan1" color="white" size={20} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.icon}>
                        <FontAwesome name="photo" color="white" size={20} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.icon}>
                        <FontAwesome name="camera" color="white" size={20} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.icon}>
                        <Entypo name="log-out" color="white" size={20} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
            </ImageBackground>
          </View>
          <View style={styles.selection}>
            <View style={styles.searchBar}>
              <Ionicons name="ios-search" color="gray" size={20} />
              <TextInput style={styles.textInput} placeholder="Search..." />
              <TouchableOpacity>
                <Ionicons name="ios-close" color="gray" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <FlatList 
            data={this.state.data_messages}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={this.ItemSeparatorComponent}
          />
        </View>
      </View>
    );
  }
}

const {width} = Dimensions.get('window');
const width_searchBar = width * 0.8;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: '35%',
  },
  footer: {
    height: '65%',
  },
  imgBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageBackground_container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '8%',
  },
  logo: {
    flex: 1,
    marginLeft: '1%',
    alignItems: 'center',
  },
  user: {
    flex: 2,
    alignItems: 'center',
  },
  user_name: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
  },
  icon: {
    marginRight: 10
  },
  item_container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  item_messages: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  num_readed: {
    height: 20,
    backgroundColor: 'red',
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 3,
  },
  selection: {
    height: '35%',
    alignItems: 'center',
  },
  searchBar: {
    width: width_searchBar,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    marginTop: 15,
    borderRadius: 50,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
  }
});
