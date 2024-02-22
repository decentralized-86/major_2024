const initialState = {
  students: [],
  data: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      // localStorage.setItem(
      //   "Profile",
      //   JSON.stringify({ ...(action.data || {}) })
      // );
      return { ...state, data: action.payload || {} };
    case "LOGOUT":
      // localStorage.clear();
      return { ...state, data: null };
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

export default authReducer;
