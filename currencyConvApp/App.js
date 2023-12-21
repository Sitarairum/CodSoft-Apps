import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";

const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

export default function App() {
  const [usdValue, setUsdValue] = useState("1");
  const [pkrValue, setPkrValue] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const fetchExchangeRate = async () => {
    try {
      const response = await axios.get(API_URL);
      setExchangeRate(response.data.rates.PKR.toFixed(2));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const convertToPkr = () => {
    const result = parseFloat(usdValue) * exchangeRate;
    setPkrValue(result.toFixed(2));
  };

  const convertToUsd = () => {
    const result = parseFloat(pkrValue) / exchangeRate;
    setUsdValue(result.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={usdValue}
          onChangeText={setUsdValue}
          placeholder="USD"
        />
        <Text>=</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={pkrValue}
          onChangeText={setPkrValue}
          placeholder="PKR"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={convertToPkr}>
          <Text>USD to PKR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={convertToUsd}>
          <Text>PKR to USD</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.exchangeRate}>
        Exchange Rate: 1 USD = {exchangeRate} PKR
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    width: 100,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  exchangeRate: {
    fontSize: 16,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});
