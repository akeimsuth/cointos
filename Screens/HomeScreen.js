import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import MainCard from '../components/MainCard'
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import CoinList from '../components/CoinList';

const HomeScreen = ({navigation}) => {
    const Coins = 
[
    {
        id: '1',
        coinImage: "https://cdn5.vectorstock.com/i/thumb-large/37/39/bitcoin-conceptual-glowing-background-vector-20943739.jpg",
        coinName: "BTC",
        coinPrice: 88948.89,
        localPrice: 783888489.74
    },
    {
        id: '2',
        coinImage: "https://thumbs.dreamstime.com/b/ethereum-cryptocurrency-logo-isolated-vector-illustration-black-background-ethereum-cryptocurrency-logo-vector-eps-isolated-126575496.jpg",
        coinName: "ETH",
        coinPrice: 88948.89,
        localPrice: 783888489.74
    },
    {
        id: '3',
        coinImage: "https://previews.123rf.com/images/jk21/jk211802/jk21180200050/96303908-on-a-white-background-is-gold-coin-of-a-digital-crypto-currency-ripple-xrp-the-front-side-of-the-gol.jpg",
        coinName: "XRP",
        coinPrice: 88948.89,
        localPrice: 783888489.74
    },
    {
        id: '4',
        coinImage: "https://p7.hiclipart.com/preview/1001/158/345/litecoin-bitcoin-cryptocurrency-dogecoin-monero-bitcoin.jpg",
        coinName: "LTE",
        coinPrice: 88948.89,
        localPrice: 783888489.74
    },
]

const goToTransactionScreen = (value) => {
    navigation.navigate("Transfer");
}

    return (
 
        <View style={styles.container}>
        {/* <Text style={{color:"white"}}>Open up App.js to start working on your app!</Text> */}
        <MainCard></MainCard>
        <View style={styles.middleSection}>

            {/* <Text style={{fontSize:15, color:"#ECF0F1"}}>Start Transaction</Text> */}
            
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>goToTransactionScreen()}>
            <Image style={{position: 'absolute', width: 230, height: 35, borderRadius: 10}} source={{uri: "https://static.vecteezy.com/system/resources/previews/000/539/900/non_2x/abstract-gradient-background-vector.jpg"}} />
                <Text style={styles.transactionText}>Start a Transaction</Text>
            </TouchableOpacity>
        </View>
 

            <CoinList coinList={Coins}/>
  
      </View>
  
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#150833',
      alignItems: 'center',
      padding: 10,
      paddingTop: 70
    },
    middleSection: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 100,
        alignContent: 'center',
        marginBottom: 30
    },
    buttonContainer: {
        paddingLeft: 20,
    
        borderRadius: 10,
        justifyContent: 'center',
        textAlign: 'center'
    },
    transactionText:{
        color: "#D7DBDD",
        fontSize: 15,
        fontWeight: 'bold',
        width: 200,
        textTransform: 'uppercase'
        
    }
  });