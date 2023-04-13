import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddDepartment = () => {
  const [departmentName, setDepartmentName] = useState('');

  const { addDepartment, getDepartments } = useContext(GlobalContext);

  const onSubmit = async e => {
    e.preventDefault();

    const newDepartment = {
      Dept_name: departmentName
    };

    const response = await addDepartment(newDepartment);
    setDepartmentName('');
    await getDepartments(response.data.id);
  };

  return (
    <>
      <h1>Add new department:</h1>
      <form onSubmit={onSubmit}>
        <div className='department-input'>
          <label htmlFor='departmentName'>Department name:</label>
          <input type='text' value={departmentName} onChange={(e) => setDepartmentName(e.target.value)}></input>
          <button className='button'>Add</button>
        </div>
      </form>
    </>
  );
};

export default AddDepartment;