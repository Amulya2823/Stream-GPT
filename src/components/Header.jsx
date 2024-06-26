import React from "react";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/UserSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANG } from "../utils/constants";
import { toggleGptSearch } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector( (store) =>  store.gpt.showGptSearch)

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex flex-col md:flex-row justify-between">
      <img src={LOGO} alt="logo" className="mx-auto md:mx-0 w-48 cursor-pointer" />
      {user && (
        <div className="flex p-4 ">

          {showGptSearch && <select className="p-4 text-lg font-bold bg-slate-900 text-white rounded-xl" onChange={handleLangChange}>
            {SUPPORTED_LANG.map( lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}

          <button className="p-4 h-14 font-bold text-slate-50" 
          onClick={gptSearch}>
          {showGptSearch ? "Home Page" : "Search"}
          </button>
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
