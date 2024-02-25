const initialState = {
  jobs: [],
};

const jobActionReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    case "ADD_JOB":
      return {
        ...state,
        error: action.error,
      };
    case "DELETE_JOB":
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== action.payload),
      };
    case "UPDATE_JOB":
      return {
        ...state,
        jobs: state.jobs.map((job) =>
<<<<<<< HEAD
          job._id === action.payload._id ? {...job} : job
=======
          job._id === action.payload.result._id ? action.payload.result : job
>>>>>>> 769781258f45c4af79a254d1db2c83e21ca260df
        ),
      };
    case "UPDATE_JOB_ERROR":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default jobActionReducers;
