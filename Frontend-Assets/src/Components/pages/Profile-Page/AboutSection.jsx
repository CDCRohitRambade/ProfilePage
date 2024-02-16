import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare,
  FaLocationArrow,
  FaLanguage,
} from "react-icons/fa";
import { setEditing, setSection } from '../../../Reducers/userSlice';
import { useNavigate } from 'react-router-dom';
const AboutSection = () => {
  const { currentUser } = useSelector((state) => state.user);
  const user = currentUser.userResponse

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeSection = (newSection) => {
    dispatch(setSection(newSection));
    navigate(`edit?section=${newSection}`);
    dispatch(setEditing(true)); 

  };
  return (
    <div className="flex flex-col lg:w-1/2 shadow-lg  lg:p-5 ">
        <div className="flex justify-end  ">
          <button className="p-2 bg-blue-600" onClick={() => changeSection('about')}>Edit</button>
        </div>
        <div className="flex">
          <div>
            <img
              src={user.profilePicture}

              alt=""
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full ">
            <div>
              <h1 className="text-4xl text-purple-800">{user.username}</h1>
            </div>
            <div>
              <div className="flex flex-col text-2xl ">
                <div>
                  <p className="flex justify-center    items-center    gap-x-4 ">
                    <span>
                      <FaLocationArrow size={20} color="blue" />
                    </span>
                    {user.country} {user.phonenumber}
                  </p>
                </div>
                <div className="flex  gap-x-3  items-center">
                  <div>
                    <FaLanguage size={30} color="blue" />
                  </div>
                  <div className="flex space-x-4">
                    <p>Marathi</p>
                    <p>Hindi</p>
                    <p>English</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex space-x-4">
                <a href="">
                  <FaLinkedin size={30} />
                </a>
                <a href="">
                  <FaTwitter size={30} />
                </a>
                <a href="">
                  <FaInstagramSquare size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 mt-4  border-t border-t-blue-700 p-2">
          <div>
            <h1 className="text-4xl">Long Term Pitch</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              ducimus quidem deserunt. Sapiente sunt praesentium in veniam velit
              maiores iure!
            </p>
          </div>
          <div className="flex flex-col gap-y-6 border-t border-t-blue-700 p-2">
            <h1 className="text-4xl">About</h1>
            <p>
             {user.details.bio}
            </p>
          </div>
        </div>
      </div>
  )
}

export default AboutSection;