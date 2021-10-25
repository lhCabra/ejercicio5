export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'DELETE':
      return [...state.filter((item) => item !== action.payload)];
      case 'TOGGLE':
        return [
          ...state.map((crossItem) => {
                        
              if(crossItem.id !== action.payload) {
                return crossItem;
              }
              return {
                ...crossItem,
                done: !crossItem.done
              };
          }),
        ];
    default:
      return state;
  }
};
