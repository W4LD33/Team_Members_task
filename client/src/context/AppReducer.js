export default (state, action) => {
    switch(action.type) {
      case 'GET_DEPARTMENTS':
        return {
          ...state,
          loading: false,
          departments: action.payload.departments // Only save the departments array
        }
      case 'DELETE_DEPARTMENT':
        return {
          ...state,
          // departments: state.departments.filter(department => department._id !== action.payload)
          departments: state.departments.filter(
            department => department.id !== parseInt(action.payload)
          )
        }
      case 'ADD_DEPARTMENT':
        return {
          ...state,
          departments: [...state.departments, {...action.payload} ]
        }
      case 'DEPARTMENT_ERROR':
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    }
  }