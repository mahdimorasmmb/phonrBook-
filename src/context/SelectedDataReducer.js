export default function SelectedDataReducer(state, action) {
  switch (action.type) {
    case "edit":
      return action.payload;
    case "reset":
      return "";
    default:
      return "";
  }
}
