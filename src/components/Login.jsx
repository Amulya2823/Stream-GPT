import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BACK_IMG, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const validateFn = () => {
    const validData = Validate(email.current.value, password.current.value);
    seterrorMessage(validData);
    if (validData) return;

    //sign in or sign up users
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //const user = userCredential.user;
        })
        .catch((error) => {
          seterrorMessage("User Not Found");
        });
    }
  };

  const toggleSign = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <img src={BACK_IMG} alt="logo" className="absolute" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black  my-36 m-auto right-0 left-0 rounded-xl bg-opacity-70"
      >
        <h1 className="text-white text-4xl font-bold py-4 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="First Name"
            className="p-4 my-4 rounded-lg w-full bg-gray-500"
          />
        )}
        {!isSignIn && (
          <input
            type="text"
            placeholder="Second Name"
            className="p-4 my-4 rounded-lg w-full bg-gray-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 rounded-lg w-full bg-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 rounded-lg w-full bg-gray-500 "
        />
        <p className="text-red-600 font-medium m-2 ">{errorMessage}</p>
        <button
          className="p-3 my-3 rounded-lg font-medium text-xl text-white bg-red-700 w-full"
          onClick={validateFn}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSign}
          className="text-white m-2 text-lg cursor-pointer hover:underline"
        >
          {isSignIn
            ? "New to Netflix ? Sign Up Now"
            : "Already Registered ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
