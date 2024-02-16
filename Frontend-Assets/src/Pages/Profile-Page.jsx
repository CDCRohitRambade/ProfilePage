// import AboutSection from "../Components/pages/Profile-Page/AboutSection";
// import WorkCareerSection from "../Components/pages/Profile-Page/WorkCareerSection"
// import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import EditAbout from "../Components/pages/Profile-Page/EditAbout";
// import { setEditing, setSection } from "../Reducers/userSlice";
import { useNavigate } from "react-router-dom";
import EditSection from "../Components/pages/Profile-Page/EditSection";
import { useState } from "react";
import AboutSection from "../Components/pages/Profile-Page/AboutSection";
import EducationSection from "../Components/pages/Profile-Page/EducationSection";
const Profile = () => {
  // const [userDetails, setUserDetails] = useState([{
  //   user: [
  //     {
  //       username: "Rohit",
  //       address: "sfsjdfsd",
  //     },
  //   ],
  //   details: [
  //     {
  //       knownLang: ["Marathi", "Hindi", "English"],
  //       social: [
  //         {
  //           id: 1,
  //           name: "twitter",
  //           icon: <FaTwitter size={30} />,
  //         },
  //         {
  //           id: 2,
  //           name: "linkedin",
  //           icon: <FaLinkedin size={30} />,
  //         },
  //         {
  //           id: 3,
  //           name: "insta",
  //           icon: <FaInstagramSquare size={30} />,
  //         },
  //       ],
  //       longTerm: "sfsdf loersfmsf sfsdhfs",
  //       bio: "sjfsdfs",
  //     },
  //   ],
  // }]);
  

  const isEditing = useSelector((state) => state.user.isEditing);
 console.log(isEditing);
  return (
    <div className=" flex flex-row items-center justify-center font-poppins">
      {/* <AboutSection></AboutSection>
            <WorkCareerSection></WorkCareerSection> */}
<div>
  <h1>sidenav</h1>
</div>
 {isEditing ? <EditSection/>: <div><AboutSection/> <EducationSection/></div>
      
    }
    {/* <AboutSection/> */}
     
    </div>
  );
};

export default Profile;
