const departmentsReducer = (state, action) => {
    switch (action.type) {
      case 'GET_DEPARTMENTS':
        return {
          ...state,
          departments: action.payload,
          loading: false
        };
      case 'ADD_DEPARTMENT':
        return {
          ...state,
          departments: [...state.departments, action.payload],
          loading: false
        };
      case 'DELETE_DEPARTMENT':
        return {
          ...state,
          departments: state.departments.filter(
            (department) => department.id !== action.payload
          ),
          loading: false
        };
      case 'DEPARTMENT_ERROR':
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      default:
        return state;
    }
  };
  
  export default departmentsReducer;
  