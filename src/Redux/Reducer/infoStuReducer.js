import {
  ADD_TO_LISTSTU,
  DELETE_TO_LISTSTU,
  EDIT_TO_LISTSTU,
  FIND_TO_LISTSTU,
} from "../Type/infoStuType";

const initialState = {
  arrListStu: [],
  arrListStuFind: [],
};
export const infoStuReducer = (state = initialState, action) => {
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

      if (index !== -1) {
        newArrListStu.splice(index, 1);
      }

      return { ...state, arrListStu: newArrListStu };
    }
    case FIND_TO_LISTSTU: {
      const objStu = state.arrListStu.filter(
        (item) => item.hoTen === action.payload
      );
      console.log(objStu);
      // const newArrListStu = [...state.arrListStuFind];

      return { ...state, arrListStuFind: objStu };
    }
    case EDIT_TO_LISTSTU: {
      const index = state.arrListStu.findIndex(
        (item) => item.maSV === action.payload.maSV
      );

      const newArrListStu = [...state.arrListStu];
      newArrListStu[index] = action.payload;

      return { ...state, arrListStu: newArrListStu };
    }
    default:
      return { ...state };
  }
};
