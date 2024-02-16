import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setIsGoogleAuth, setSignupData, setToken } from "../../Reducers/auth";
import { signInSuccess } from "../../Reducers/userSlice";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

export default function OAuth({authText}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      toast.loading("Loading...");
      const result = await signInWithPopup(auth, googleProvider);
      const googleToken = await result.user.getIdToken();
      const res = await fetch("http://localhost:5000/api/google-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: googleToken,
        }),
      });
      const data = await res.json();
      if (data.token) {
        toast.dismiss();
        toast.success("Logged in successfully");
        dispatch(signInSuccess(data));
        dispatch(setToken(data.token));
        navigate("/");
      } else if (data.idToken) {
        toast.dismiss();
        dispatch(
          setSignupData({
            name: data.name,
            email: data.email,
            idToken: data.idToken,
            picture: data.picture,
          })
        );
        dispatch(setIsGoogleAuth(true));
      }
    } catch (err) {
      toast.dismiss();
      toast.error("Could not login with Google");
      console.log("Could Not login with Google", err);
    }
  };

  return (
    <button
      type="button"
      className={`${authText && 'flex w-full'} justify-center border-none outline-none transform hover:scale-90 transition duration-200 ease-in-out`}
      onClick={handleGoogleClick}
    >
      <FcGoogle className="h-6 w-6 mr-3"/> {authText?? ''}
    </button>
  );
}
