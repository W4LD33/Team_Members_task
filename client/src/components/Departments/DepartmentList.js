import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Department from './Department';
import AddDepartment from '../AddDepartment';
import './departments.css'

const DepartmentList = () => {
    const { getDepartments } = useContext(GlobalContext);

    useEffect(() => {
        getDepartments();
    }, [])


    return (
      <div className='departments-container'>
        <AddDepartment />
        <ul className='department-list'>
        <Department />
        </ul>
      </div>
    );
}
export default DepartmentList