import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Share } from 'react-native';


const TransactionScreen = ({navigation}) => {
    const [localCurrency, setLocalCurrency] = useState("0.00");
    const [btcCurrency, setBtcCurrency] = useState("0.00");

    const [amount, setAmount] = useState("0.00");

    const convertCoin = () => {
      if(!amount){
        setAmount("0.00");
        return amount
      
      }
      else{
        return amount
      }
    }


    const onSharePress = (amount = "0.00") => {
      let shareOptions = {
        title: 'Title',
        message: `Amount: ${amount}\n Address: jfdjhsh787878hhHJHJHh`, // Note that according to the documentation at least one of "message" or "url" fields is required
        url: 'www.example.com',
        subject: 'Subject'
      };
      Share.share(shareOptions);
    }

    const localCoin = (text) => {
      let total = 4000000;
      total =  parseFloat(text) / total
      setAmount(total);
    }

    const btcCoin = (text) => {
      let total = 4000000.89;
      total = total * parseFloat(text)
      setAmount(total)
    }

    return (
        <View style={styles.container}>
        <Text style={styles.mainText}>{`$${convertCoin()}`}</Text>

        <TextInput
          style={styles.inputStyle}
          editable={btcCurrency.editable}
          onChangeText={text => btcCoin(text)}
          keyboardType={"decimal-pad"}
          placeholder="BTC"
          placeholderTextColor={"#fff"}
        />

        <TextInput
          style={styles.inputStyle}
          onChangeText={text => localCoin(text)}
          editable={localCurrency.editable}
          keyboardType={"numeric"}
          placeholder="JMD"
          placeholderTextColor={"#fff"}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={()=> onSharePress(amount.toString())}>
          <Image style={{position: 'absolute', width: 380, height: 55, borderRadius: 10}} source={{uri: "https://static.vecteezy.com/system/resources/previews/000/539/900/non_2x/abstract-gradient-background-vector.jpg"}} />
          <Text style={styles.buttonText}>Order Coin</Text>
        </TouchableOpacity>
        <View style={{paddingTop:60}}>
          <Image style={{width: 150, height: 150}} source={require("../assets/cointos.gif")}/>
        </View>
        {/* <TextInput
          
          label="Email"
          
          style={{width: 300, height: 50, backgroundColor: "#150833"}}
          theme={{ colors: {text: "white"} }}
          left={
            <TextInput.Icon
              name=""
              color={"red"}
        
            />
          }
        /> */}
      </View>
    )
}

export default TransactionScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#150833',
      alignItems: 'center',
      paddingTop: 100
    },
    mainText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "#fff",
        paddingBottom: 80
    },
    inputStyle: {
      width: 380,
      height: 40,
      borderColor: 'transparent',
      borderWidth: 1,
      color:"#fff",
      paddingLeft:20,
      borderBottomColor: "gray",
      marginBottom: 40
    },
    buttonContainer: {
      padding: 10,
      width: 380
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff'
    }
  });