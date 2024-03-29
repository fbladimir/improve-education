import React, { useContext, useState } from "react";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateProfile,
  updateEmail,
} from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";
import { v4 as uuid } from "uuid";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "./update.css";

const Update = () => {
  const [data, setData] = useState({
    username: "",
    newEmail: "",
    oldPassword: "",
  });
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (img) {
      const storageRef = ref(storage, "usersImages/" + uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(currentUser, {
              photoURL: downloadURL,
              displayName: data.username,
            });

            const credential = EmailAuthProvider.credential(
              currentUser.email,
              data.oldPassword
            );

            await reauthenticateWithCredential(currentUser, credential).then(
              async () => {
                // User re-authenticated.
                await updateEmail(currentUser, data.newEmail);
              }
            );
          });
        }
      );
    } else {
      await updateProfile(currentUser, {
        displayName: data.username,
      });
      const credential = EmailAuthProvider.credential(
        currentUser.email,
        data.oldPassword
      );

      await reauthenticateWithCredential(currentUser, credential).then(
        async () => {
          // User re-authenticated.
          await updateEmail(currentUser, data.newEmail);
        }
      );
    }

    navigate("/login");
  };
  // console.log(data);
  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Your Account Details</h3>
        <span>Email Address: {currentUser.email}</span>

        <div className="myUpdateContainer">
            <form onSubmit={handleUpdate}>
              <div className="myForm">
                <label class="myLabel">Username</label>
                <input
                  className="formInput"
                  type="text"
                  name="username"
                  placeholder={currentUser.displayName}
                  onChange={handleChange}
                />
              </div>
              <div className="myForm">
                <label class="myLabel">Email</label>
                <input
                  className="formInput"
                  type="email"
                  name="newEmail"
                  placeholder={currentUser.email}
                  onChange={handleChange}
                />
              </div>
              <div className="myForm">
                <label class="myLabel">Password</label>
                <input
                  className="formInput"
                  name="oldPassword"
                  type="password"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="updateButton">
                Update Profile
              </button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Update;
