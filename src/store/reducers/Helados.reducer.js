import { HELADOS } from "../../data/Helados";
import { SELECTED_HELADOS, FILTERED_HELADOS } from "../actions/Helados.action";

const initialState = {
    helados: HELADOS,
    filteredHelados: [],
    selected: null,

}
const HeladosReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECTED_HELADOS:
        return {
          ...state,
          selected: state.helados.find((helados) => helados.id === action.heladosID),
        };
      case FILTERED_HELADOS:
        return {
          ...state,
          filteredHelados: state.helados.filter(
            (helados) => helados.category === action.categoryID
          ),
        };
      default:
        return state;
    }
  };

export default HeladosReducer;



