import React from 'react'
import { setEditing, setSection } from '../../../Reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const EducationSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeSection = (newSection) => {
    dispatch(setSection(newSection));
    navigate(`edit?section=${newSection}`);
    dispatch(setEditing(true)); 

  };
  return (
    <div>EducationSection
      <div>
        <h1>Education Info</h1>
      </div>
      <div className="flex justify-end  ">
          <button className="p-2 bg-blue-600" onClick={() => changeSection('education')}>Edit</button>
        </div>
    </div>
  )
}

export default EducationSection