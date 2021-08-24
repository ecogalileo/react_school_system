import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Teacher = () => {
  const [teacher, setTeacher] = useState({
    name: '',
    department: '',
    email: '',
    address: '',
    image: '',
  });

  const { id } = useParams();
  useEffect(() => {
    loadTeacher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const loadTeacher = async () => {
    const response = await axios.get(`http://localhost:3003/teachers/${id}`);
    setTeacher(response.data);
  };

  return (
    <div className="">
      <Link className="" to="/teachers">
        back to Teachers List
      </Link>
      <h1 className="">User Id: {id}</h1>
      <hr />
      <ul className="">
        <li className="">name: {teacher.name}</li>
        <li className="">department: {teacher.department}</li>
        <li className="">email: {teacher.email}</li>
        <li className="">address: {teacher.address}</li>
        <li className="">image: {teacher.image}</li>
      </ul>
    </div>
  );
};

export default Teacher;
