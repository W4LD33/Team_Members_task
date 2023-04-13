import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


// Initial state
const initialState = {
  departments: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getDepartments() {
    try {
      const res = await axios.get('/departments');

      dispatch({
        type: 'GET_DEPARTMENTS',
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: 'DEPARTMENT_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteDepartment(id) {
    try {
      await axios.delete(`/departments/${id}`);

      dispatch({
        type: 'DELETE_DEPARTMENT',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'DEPARTMENT_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addDepartment(department) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/departments', department, config);

      dispatch({
        type: 'ADD_DEPARTMENT',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'DEPARTMENT_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    departments: state.departments,
    error: state.error,
    loading: state.loading,
    getDepartments,
    deleteDepartment,
    addDepartment
  }}>
    {children}
  </GlobalContext.Provider>);
}

// // Import necessary dependencies
// import React, { createContext, useReducer } from 'react';
// import axios from 'axios';

// // Import provider components for departments, employees, and projects
// import { DepartmentsProvider } from './DepartmentsProvider';
// // import { EmployeesProvider } from './EmployeesProvider';
// // import { ProjectsProvider } from './ProjectsProvider';

// // Define initial state
// const initialState = {
//   error: null,
//   loading: true
// };

// // Create context
// export const GlobalContext = createContext(initialState);

// // Define reducer function
// function AppReducer(state, action) {
//   switch (action.type) {
//     case 'SET_ERROR':
//       return {
//         ...state,
//         error: action.payload,
//         loading: false
//       };
//     case 'CLEAR_ERROR':
//       return {
//         ...state,
//         error: null,
//         loading: false
//       };
//     default:
//       return state;
//   }
// }

// // Define global provider component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   // Define actions
//   async function setError(error) {
//     dispatch({
//       type: 'SET_ERROR',
//       payload: error
//     });
//   }

//   async function clearError() {
//     dispatch({
//       type: 'CLEAR_ERROR'
//     });
//   }

//   return (
//     <GlobalContext.Provider
//       value={{
//         error: state.error,
//         loading: state.loading,
//         setError,
//         clearError
//       }}
//     >
//       <DepartmentsProvider>
//         {/* <EmployeesProvider>
//           <ProjectsProvider>{children}</ProjectsProvider>
//         </EmployeesProvider> */}
//         {children}
//       </DepartmentsProvider>
//     </GlobalContext.Provider>
//   );
// };
