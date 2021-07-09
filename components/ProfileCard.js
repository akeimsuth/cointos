import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';

const ProfileCard = () => {

    const [edit, setEdit] = useState('Edit');
    const [editable, setEditable] = useState(false);

    const onEditSelected = () => {
        if(edit === 'Edit'){
            setEditable(true);
            setEdit('Save')
        }else{
            setEditable(false);
            setEdit('Edit')
        }
    }

    const localCoin = (text) => {
        console.log("Entered ",text)
    }

    return (
        <View style={styles.container}>
            <Image style={styles.floatingImage} source={{uri: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"}} />
            {/* <Text style={styles.cardText,{paddingTop:50, fontWeight:'bold',color:"#fff"}}>Akeim Sutherland</Text> */}
            <TouchableOpacity style={styles.editSaveButton} onPress={()=>onEditSelected()}>
                <Text style={styles.editSaveText}>{edit}</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.inputStyle1}
                onChangeText={text => localCoin(text)}
                editable={editable}
                value={"Akeim Sutherland"}
                keyboardType={"name-phone-pad"}
                placeholder="Email"
                placeholderTextColor={"#fff"}
                
                />
            <TextInput
                style={styles.inputStyle2}
                onChangeText={text => localCoin(text)}
                editable={editable}
                value={"akeimsuth@gmail.com"}
                keyboardType={"email-address"}
                placeholder="Email"
                placeholderTextColor={"#fff"}
                
                />
            <TextInput
                style={styles.inputStyle3}
                onChangeText={text => localCoin(text)}
                editable={editable}
                value={"(876) 577 - 7488"}
                keyboardType={"numeric"}
                placeholder="Email"
                placeholderTextColor={"#fff"}
                
                />
            {/* <Text style={styles.cardText,{paddingTop:20, fontWeight:'bold',color:"#fff"}}>akeimsuth@gmail.com</Text>
            <Text style={styles.cardText,{paddingTop:20, fontWeight:'bold',color:"#fff"}}>(876) 658 - 7482</Text> */}
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#17202A',
        
        borderRadius: 20,
        
        padding: 20,
        width: 380,
        height: 200
    },
    cardText: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    floatingImage: {
        position: 'absolute',
        width: 110,
        height: 110,
        borderRadius: 100,
        backgroundColor:"#34495E",
        top:-60,
        right:130,
        borderWidth:5,
        borderColor:"#F8F9F9"
    },
    inputStyle1: {
        width: 320,
        marginTop: 20,
        height: 40,
        borderColor: 'transparent',
        borderWidth: 1,
        color:"#fff",
        borderBottomColor: "gray",
    
      },
      inputStyle2: {
        width: 320,
        marginTop: 10,
        height: 40,
        borderColor: 'transparent',
        borderWidth: 1,
        color:"#fff",
        borderBottomColor: "gray",
        marginBottom: 10
      },
      inputStyle3: {
        width: 320,
        height: 40,
        borderColor: 'transparent',
        borderWidth: 1,
        color:"#fff",
        borderBottomColor: "gray",
        marginBottom: 40
      },
      editSaveButton: {
        position: 'absolute',
        right: 20,
        top: 10
      },
      editSaveText: {
        color: "#fff",
        fontSize: 15
      }
});