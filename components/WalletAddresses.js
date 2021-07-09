import React,{useState} from 'react'
// import Clipboard from '@react-native-community/clipboard';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, TextInput, Clipboard } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider, Snackbar  } from 'react-native-paper';

const WalletAddresses = () => {

    const [edit, setEdit] = useState('Add Address');
    const [wallet, setWallet] = useState('hsjhsdh7899HJHHHJHsdhaiiu');
    const [editable, setEditable] = useState(false);

    const [showSnack, setSnack] = useState(false);

    const onEditSelected = () => {
        setEditable(true);
    }
    const hideDialog = () => {
        setEditable(false);
    }

    const localCoin = (text) => {
        console.log("Entered ",text)
    }

    const dismissSnackbar = () => {
        setTimeout(() => {
            setSnack(false)
        }, 2000);
    }

    return (
        <Provider>

        
        <View style={styles.container}>
            <Image style={styles.floatingImage} source={{uri: "https://cdn.pixabay.com/photo/2017/01/31/19/58/purse-2026844_960_720.png"}} />
            <TouchableOpacity style={styles.editSaveButton} onPress={()=>onEditSelected()}>
                <Text style={styles.editSaveText}>{edit}</Text>
            </TouchableOpacity>
            <Text style={styles.cardText,{paddingTop:50, fontWeight:'bold', color:"#fff"}}>My Wallet</Text>
            <TextInput
                style={styles.inputStyle1}
                onChangeText={text => localCoin(text)}
                editable={false}
                value={wallet}
                multiline={true}
                numberOfLines={4}
                keyboardType={"name-phone-pad"}
                placeholder="It's a ghost town here"
                placeholderTextColor={"#fff"}
                
            />
            <TouchableOpacity style={{position: 'absolute', bottom:60, right:20}} onPress={()=>{Clipboard.setString(wallet);setSnack(true)}}>
                <Text style={{color:"#27AE60", fontSize: 14}}>COPY</Text>
            </TouchableOpacity>
            <Snackbar
                style={{top:120, right: -20, alignContent:"center"}}
                visible={showSnack}
                duration={2000}
                onDismiss={dismissSnackbar}
              >
                Address Copied to Clipboard
            </Snackbar>
            <Portal>
                <Dialog visible={editable} onDismiss={hideDialog}>
                <Dialog.Title>Wallet Address</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>Place your address here</Paragraph>
                    <TextInput
                        style={styles.inputStyle2}
                        onChangeText={text => setWallet(text)}
                        keyboardType={"name-phone-pad"}
                        placeholder="It's a ghost town here"   
                    />
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Cancel</Button>
                    <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
                </Dialog>
            </Portal>
            {/* <Text style={styles.cardText,{paddingTop:20, fontWeight:'bold',color:"#fff"}}>hhhweuHHsdyyhsd7878auq8</Text> */}
        </View>
        </Provider>
    )
}

export default WalletAddresses

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#17202A',
        marginTop: 120,
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
        backgroundColor:"#fff",
        top:-60,
        right:130,
        borderWidth:5,
        borderColor:"#F8F9F9"
    },
    inputStyle1: {
        width: 280,
        marginTop: 20,
        height: 40,
        borderColor: 'transparent',
        borderWidth: 1,
        color:"#fff",
        borderBottomColor: "gray",
    
    },
    inputStyle2: {
        width: 320,
        marginTop: 20,
        height: 40,
        borderColor: 'transparent',
        borderWidth: 1,
        borderBottomColor: "gray",
        overflow: 'hidden'
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