import React from "react";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/UserSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/GptSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const gptSearch = () => {
    dispatch(toggleGptSearch());
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img src={LOGO} alt="logo" className="w-48 cursor-pointer" />
      {user && (
        <div className="flex p-4 ">
          <button className="p-4 h-14 font-bold text-slate-50" onClick={gptSearch}>GPT Search</button>
          <div>
            <img className="w-12 h-12 m-2 rounded-lg" src={user?.photoURL} alt="Profile" />
          </div>
          <button
            onClick={handleSignOut}
            className="p-4 h-14 font-bold text-slate-50 "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
