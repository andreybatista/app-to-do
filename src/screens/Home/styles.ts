import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerHeader: {
    height: 173,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
    // padding: 24,
  },
  containerBody: {
    flex: 1,
    backgroundColor: "#1A1A1A",
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
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#F2F2F2",
  },
  onFocusInput: {
    borderColor: "#5E60CE",
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
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#333333",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    gap: 11,
    marginBottom: 8,
  },
  clearButton: {
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  taskTitle: {
    flex: 1,
    color: "#fff",
    fontSize: 14
  },
});
