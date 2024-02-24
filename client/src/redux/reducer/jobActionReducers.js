const initialState = {
  data: null,
  jobs: [],
};

const jobActionReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return {
        ...state,
        users: action.payload,
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
    default:
      return state;
  }
};

export default jobActionReducers;
