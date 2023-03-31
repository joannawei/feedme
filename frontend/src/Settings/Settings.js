import React, { useState } from "react";
// icons
import {
  IoIosArrowForward,
  IoIosNotifications,
  IoIosNotificationsOff,
} from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { TbBellRinging } from "react-icons/tb";
import { BiFridge } from "react-icons/bi";
// import css
import "./Settings.css";

const Settings = () => {
  // username hook
  const [UserName, setUserName] = useState("");
  // interested categories hook
  const [Categories, setCategories] = useState("");
  // fridge items hook
  const [FridgeItems, setFridgeItems] = useState("");
  // notification hooks
  const [RecipeNoti, setRecipeNoti] = useState(true);
  const [IngredNoti, setIngredNoti] = useState(true);

  // handleChange function
  const handleChange = (func) => (event) => {
    func(event.target.value);
    // console.log(UserName);
    // console.log(Categories);
    // console.log(FridgeItems);
  };

  // // handleQueryChange function
  // const handleQueryChange = async () => {
  //   const {
  //     data: { messages, message },
  //   } = await axios.get("/enrollments", {
  //     params: {
  //       queryString,
  //     },
  //   });

  //   // console.log(messages);

  //   if (!messages) addErrorMessage(message);
  //   else addRegularMessage(...messages);
  // };

  // // handleQuery function
  // const handleQuery = async () => {
  //   const {
  //     data: { messages, message },
  //   } = await axios.get("/enrollments", {
  //     params: {
  //       queryString,
  //     },
  //   });

  //   // console.log(messages);

  //   if (!messages) addErrorMessage(message);
  //   else addRegularMessage(...messages);
  // };

  // handleQuery only once to initialize
  // useEffect(() => {
  //   handleQuery();
  // }, []);

  return (
    <div>
      {/* Main Frame */}
      <div className="main">
        {/* Edit Profile */}
        <div className="feild">
          <div className="setting-bar-button">
            <BsPerson className="setting-bar-button-icon" />
            <div className="setting-bar-button-text">Edit Profile</div>
            <IoIosArrowForward className="setting-bar-button-expand" />
          </div>
          <div className="keyin">
            <div className="flex-container">
              <div>Username</div>
              <input
                type="text"
                placeholder="Username"
                id="username"
                value={UserName}
                onChange={handleChange(setUserName)}
              />
            </div>
            <div className="flex-container">
              <div>Interested categories</div>
              <textarea
                type="textarea"
                placeholder="Such as Taiwanese Food, Rice or Desserts (At most five
                categories)"
                id="categories"
                value={Categories}
                onChange={handleChange(setCategories)}
              />
            </div>
          </div>
        </div>

        {/* Notification Setting */}
        <div className="feild">
          <div className="setting-bar-button">
            <TbBellRinging className="setting-bar-button-icon" />
            <div className="setting-bar-button-text">Notification Setting</div>
            <IoIosArrowForward className="setting-bar-button-expand" />
          </div>
          <div className="keyin">
            <div className="flex-container">
              <div>New recipe notification</div>
              {IngredNoti ? (
                <IoIosNotifications
                  id="noti"
                  onClick={() => setIngredNoti(false)}
                />
              ) : (
                <IoIosNotificationsOff
                  id="noti"
                  onClick={() => setIngredNoti(true)}
                />
              )}
            </div>
            <div className="flex-container">
              <div>Ingredient expire</div>
              {RecipeNoti ? (
                <IoIosNotifications
                  id="noti"
                  onClick={() => setRecipeNoti(false)}
                />
              ) : (
                <IoIosNotificationsOff
                  id="noti"
                  onClick={() => setRecipeNoti(true)}
                />
              )}
            </div>
          </div>
        </div>

        {/* Fridge Setting */}
        <div className="feild">
          <div className="setting-bar-button">
            <BiFridge className="setting-bar-button-icon" />
            <div className="setting-bar-button-text">Fridge Setting</div>
            <IoIosArrowForward className="setting-bar-button-expand" />
          </div>
          <div className="keyin">
            <div className="flex-container">
              <div>Update your fridge</div>
              <textarea
                type="text"
                placeholder="What’s in your fridge? (e.g. 1 carrot, 3 eggs ......)"
                id="fridge"
                value={FridgeItems}
                onChange={handleChange(setFridgeItems)}
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="submit-container">
          <button className="submit-button">
          {/* onClick={handleQueryChange} */}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;