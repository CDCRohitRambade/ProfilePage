import React from 'react'
import { setEditing } from '../../../Reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const EditEducation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit= ()=>{
        console.log("clicked");
        dispatch(setEditing(false));
        navigate('/profile')
    }
  return (
    <div>EditEducation
        
        <div>

        <button type="button" onClick={handleSubmit}>Save Changes</button>
        </div>
    </div>
  )
}

export default EditEducation