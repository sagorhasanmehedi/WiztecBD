import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseinit from "../firebaeconfigiration/init";
firebaseinit();

const usefirebase = () => {
  const auth = getAuth();

  const googlelogin = () => {
    const googleprovider = new GoogleAuthProvider();
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return { googlelogin };
};

export default usefirebase;
