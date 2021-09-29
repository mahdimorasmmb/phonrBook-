export default function DataReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item.id !== action.payload);
    case "replace":
      const newState = state.filter((item) => item.id !== action.payload.id);
      return [...newState, action.payload];
  }
}
