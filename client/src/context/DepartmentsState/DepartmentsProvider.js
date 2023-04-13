import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';
import departmentsReducer from './DepartmentsReducer';
import { GlobalContext } from './GlobalState';
import { departmentsInitialState } from './DepartmentsState';

export const DepartmentsContext = createContext(departmentsInitialState);

export const DepartmentsProvider = ({ children }) => {
  const { setError } = useContext(GlobalContext);
  const [state, dispatch] = useReducer(departmentsReducer, departmentsInitialState);

  async function getDepartments() {
    try {
      const res = await axios.get('/departments');

      dispatch({
        type: 'GET_DEPARTMENTS',
        payload: res.data
      });
    } catch (err) {
      setError(err.response.data.error);
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
    };

    try {
      const res = await axios.post('/departments', department, config);

      dispatch({
        type: 'ADD_DEPARTMENT',
        payload: res.data.data
      });
    } catch (err) {
      setError(err.response.data.error);
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
      setError(err.response.data.error);
      dispatch({
        type: 'DEPARTMENT_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (
    <DepartmentsContext.Provider
      value={{
        departments: state.departments,
        loading: state.loading,
        error: state.error,
        getDepartments,
        addDepartment,
        deleteDepartment
      }}
    >
      {children}
    </DepartmentsContext.Provider>
  );
};
