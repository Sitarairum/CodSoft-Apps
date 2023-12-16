import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { eval as evaluate } from "react-native-eval";
import * as math from "mathjs";

export default function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      handleCalculate();
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = math.evaluate(expression);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.expressionText}>{expression}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress("AC")}
          >
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress("()")}
          >
            <Text style={styles.buttonText}>()</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress("%")}
          >
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("/")}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          {/* Add buttons for 8, 9, and / */}
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress("7")}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress("8")}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress("9")}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("*")}
          >
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          {/* Add buttons for 8, 9, and / */}
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress("4")}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress("5")}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress("6")}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("-")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress("1")}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress("2")}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress("3")}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("+")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* Add more rows of buttons for the rest of the numbers and operators */}

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress("0")}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handlePress(".")}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => handleClear()}
          >
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleCalculate()}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "antiquewhite",
    alignItems: "center",
    justifyContent: "center",
  },
  displayContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 20,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  expressionText: {
    fontSize: 24,
    color: "#333",
  },
  resultText: {
    fontSize: 36,
    color: "#000",
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderRadius: 5,
    margin: 5,
    padding: 15,
  },
  buttons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccc",
    borderRadius: 5,
    margin: 5,
    padding: 15,
  },

  buttonText: {
    color: "black",
    fontSize: 24,
  },
});
