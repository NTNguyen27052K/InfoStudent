import {
  ADD_TO_LISTSTU,
  DELETE_TO_LISTSTU,
  EDIT_TO_LISTSTU,
  FIND_TO_LISTSTU,
  READ_ONLY,
  SEARCH_TO_LISTSTU,
} from "../Type/infoStuType";

const initialState = {
  arrListStu: [],
  arrListStuFind: [],
  actionStu: "",
  readOnly: false,
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
      return { ...state, arrListStu: newArrListStu, actionStu: "addStu" };
      // , arrListStu: newArrListStu, addStu: "addStu"
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
      console.log(action.payload);
      // const newArrListStu = [...state.arrListStuFind];
      // const newActionStu = [...state.actionStu];
      // if (action.payload == "") {
      //   console.log(1);
      //   newActionStu = "";
      // } else {
      //   newActionStu = "findStu";
      // }
      return {
        ...state,
        arrListStuFind: objStu,
        actionStu: "findStu",
        searchInpu: action.payload,
      };
    }
    case EDIT_TO_LISTSTU: {
      if (action.payload.action == "findStuEdit") {
        console.log("findStuEdit");
        const objStu = state.arrListStu.filter(
          (item) => item.maSV === action.payload.value.maSV
        );
        console.log(objStu);
        return {
          ...state,
          arrListStuFind: objStu,
          actionStu: "editStu",
        };
      }
      if (action.payload.action == "editStu") {
        const index = state.arrListStu.findIndex(
          (item) => item.maSV === action.payload.value.maSV
        );
        console.log(action.payload.value);
        console.log(index);
        const newArrListStu = [...state.arrListStu];
        console.log(newArrListStu[1]);
        newArrListStu[index] = action.payload.value;
        return {
          ...state,
          arrListStu: newArrListStu,
          actionStu: "editStu",
        };
      }
    }
    case SEARCH_TO_LISTSTU: {
      let newActionStu = state.actionStu;

      if (action.payload === "") {
        newActionStu = "";
      }
      return {
        ...state,
        actionStu: newActionStu,
      };
    }
    case READ_ONLY: {
      let newReadOnly = state.readOnly;
      newReadOnly = action.payload;

      return {
        ...state,
        readOnly: newReadOnly,
      };
    }
    default:
      return { ...state };
  }
};
