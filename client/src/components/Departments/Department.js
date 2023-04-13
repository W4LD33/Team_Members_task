import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Department = () => {
  const { departments, deleteDepartment } = useContext(GlobalContext);
  return (
    <>
      {departments.map(department => (
        <li key={department.id}>
          {department.Dept_name}
          {console.log(department.id)}
          <button onClick={() => deleteDepartment(department.id)}>Delete</button>
        </li>
      ))}
    </>
  );
};

export default Department;