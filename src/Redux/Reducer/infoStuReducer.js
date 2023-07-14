import { ADD_TO_LISTSTU, DELETE_TO_LISTSTU } from "../Type/infoStuType";

const initialState = {
  arrListStu: [],
};
export const infoStuReducer = (state = initialState, action) => {
  // console.log(state.arrListStu);
  switch (action.type) {
    case ADD_TO_LISTSTU: {
      const index = state.arrListStu.findIndex(
        (item) => item.maSV === action.payload.maSV
      );
      //   console.log(index);
      const newArrListStu = [...state.arrListStu];
      if (index === -1) {
        newArrListStu.push({ ...action.payload });
      }
      return { ...state, arrListStu: newArrListStu };
    }
    case DELETE_TO_LISTSTU: {
      const index = state.arrListStu.findIndex(
        (item) => item.maSV === action.payload.maSV
      );

      const newArrListStu = [...state.arrListStu];
      console.log(index);
      if (index !== -1) {
        newArrListStu.splice(index, 1);
      }

      return { ...state, arrListStu: newArrListStu };
    }
    default:
      return { ...state };
  }
};
