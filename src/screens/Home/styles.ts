import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerHeader: {
    height: 173,
    backgroundColor: "#16161a",
    justifyContent: "center",
    alignItems: "center",
    // padding: 24,
  },
  containerBody: {
    flex: 1,
    backgroundColor: "#242629",
    paddingLeft: 24,
    paddingRight: 24,
  },
  containerForm: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    marginTop: -27,
  },
  input: {
    fontSize: 16,
    color: "#F2F2F2",
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#0D0D0D",
    borderRadius: 6,
    padding: 16,
    height: 54,
    flex: 1,
  },
  button: {
    height: 54,
    width: 54,
    backgroundColor: "#2cb67d",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 25,
    color: "#0D3625",
  },
  onFocusInput: {
    borderColor: "#2cb67d",
  },
  containerListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    paddingBottom: 20,
  },
  boxHeaderList: {
    flexDirection: "row",
    gap: 8,
  },
  textHeaderList: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "700",
    color: "#F2F2F2",
  },
  textCountList: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 25,
    padding: 2,
    backgroundColor: "#333333",
    borderRadius: 999,
    color: "#D9D9D9",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 15,
  },
  containerList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#16161a",
    borderWidth: 1,
    borderColor: "#72757e",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    paddingTop: 12,
    paddingRight: 15,
    paddingBottom: 12,
    paddingLeft: 10,
    gap: 8,
    marginBottom: 8,
  },
  buttonChecked: {
    padding: 5,
  },
  containerListCompleted: {
    borderColor: "#16161a",
  },
  taskTitle: {
    flex: 1,
    color: "#fffffe",
    fontSize: 14,
  },
  taskCompleted: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
  textEmptyPrimary: {
    fontWeight: "700",
    fontSize: 14,
    textAlign: "center",
    color: "#808080",
  },
  textEmptySecondary: {
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
    color: "#808080",
  },
  containerEmpty: {
      alignItems: 'center',
      marginTop: 48
  }
});
