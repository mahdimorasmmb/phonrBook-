export default function DataReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
  }
}
