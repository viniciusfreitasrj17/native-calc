import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 5,
  },
  containerCalc: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  input: {
    width: 100,
    height: 40,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  checkbox: {
    height: 50,
    width: 75,
    marginHorizontal: 20,
    borderWidth: 4,
  },
  check: {
    fontSize: 200,
    fontWeight: "bold",
  },
  button: {
    width: 80,
    height: 30,
    borderRadius: 10,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  result: {
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default styles;
