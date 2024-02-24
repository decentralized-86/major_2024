const initialState = {
  data: null,
  users: [],
  job: [],
  students: [],
};

const userControlsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_USERS_ERROR":
      return {
        ...state,
        error: action.error,
      };
    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default userControlsReducers;
