import React from "react";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/UserSlice";
import { useEffect } from "react";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const user = useSelector( (store) => store.user);

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
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error")
        
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-48"
      />
      {user && (<div className="flex p-4 ">
        <div>
          <img
            className="w-12 h-12 m-2"
            src={user?.photoURL}
            alt="Profile"
          />
        </div>
        <button
          onClick={handleSignOut}
          className="p-4 h-14 rounded-lg font-bold text-slate-50 "
        >
          Sign Out
        </button>
      </div>)}
    </div>
  );
};

export default Header;
