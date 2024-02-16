import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEditing, updateUser } from '../../../Reducers/userSlice';
import { useNavigate } from 'react-router-dom';

// const EditAbout = () => {
//     const dispatch = useDispatch();
//   const { currentUser } = useSelector((state) => state.user);
//   const user = currentUser.userResponse;
// console.log(user);
//   const [aboutData, setAboutData] = useState({ ...user });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes('.')) {
//       const [nestedField, nestedProperty] = name.split('.');
//       setAboutData({
//         ...aboutData,
//         [nestedField]: {
//           ...aboutData[nestedField],
//           [nestedProperty]: value,
//         },
//       });
//     } else {
     
//       setAboutData({
//         ...aboutData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = (e)=>{
//     e.preventDefault()
//     dispatch(updateUser(aboutData));
//   }
// console.log(aboutData);
//   return (
//     <div>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" name="username" onChange={handleChange} value={aboutData.username} />
//           </div>
     
//           <div>
//             <label htmlFor="about">About</label>
//             <input type="text" id="about" name="details.bio" onChange={handleChange} value={aboutData.details.bio} />
//           </div>
//           <div>
//             <label htmlFor="phoneNo">Phone Number</label>
//             <input type="text" id="phoneNo" name="phonenumber" onChange={handleChange} value={aboutData.phonenumber} />
//           </div>
//           <div><button>submit</button></div>
//         </form>
//       </div>
//     </div>
//   );
// };
const EditAbout = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const user = currentUser.userResponse;
  

    const [aboutData, setAboutData] = useState({ ...user });
    const navigate = useNavigate();

    const handleOnChange = (e) => {
      const { name, value } = e.target;
  
     
      if (name.includes('.')) {
        const [nestedField, nestedProperty] = name.split('.');
        setAboutData({
          ...aboutData,
          [nestedField]: {
            ...aboutData[nestedField],
            [nestedProperty]: value,
          },
        });
      } else {
     
        setAboutData({
          ...aboutData,
          [name]: value,
        });
      }
    };
  
    const handleSaveChanges = () => {
    
      console.log(aboutData);
      dispatch(updateUser(aboutData));
      dispatch(setEditing(false));
      navigate('/profile')
    };
  
    return (
      <div>
        <div>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="username" onChange={handleOnChange} value={aboutData.username} />
            </div>
            <div>
              <label htmlFor="about">About</label>
              <input type="text" id="about" name="details.bio" onChange={handleOnChange} value={aboutData.details.bio} />
            </div>
            <button type="button" onClick={handleSaveChanges}>Save Changes</button>
          </form>
        </div>
      </div>
    );
  };

export default EditAbout;
