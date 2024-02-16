import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import EditAbout from './EditAbout';
import { useLocation } from 'react-router-dom';
import EditEducation from './EditEducation';

const EditSection = () => {
    //  const dispatch = useDispatch();
  
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    console.log(params);
  return (
    <div>

{console.log("i am here")}
{section === 'about' && <EditAbout />}
      {section === 'education' && <EditEducation />}
    </div>
  )
}

export default EditSection