import React,{ useState } from "react";

const Profile = () => {
const [userDetails, setUserDetails ] = useState({
  username: "Jane",
  email: "darun@example.com",
  birthday: "2000-01-01",
})

const [isEditing, setIsEditing] = useState(false);

//Need more time to contemplate this functionality for better understanding of the key and value properties
const handleChange = (e) => {
  // Extract the 'name' (which field to update) and 'value' (what the user typed) from the input element
  const { name, value } = e.target;

  // Update the userDetails state
  setUserDetails((userDetails) => ({
    ...userDetails, // Keep all other fields unchanged
    [name]: value,  // Use the 'name' as the key (e.g., "username") and set it to the new value
  }));
};


const handleSave = () => {
  setIsEditing(false);
  alert("profile updated successfully.")
};
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <form>
        <label>
          Username:
          <input 
          type="text"
          name="username"
          value={userDetails.username}
          onChange={handleChange}
          disabled={!isEditing}
          />
        </label>
        <br />
        <label>
          Email:
          <input 
          type="text"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          disabled={!isEditing}
          />
        </label>
        <br />
        <label>
          Birthday:
          <input 
          type="date"
          name="birthday"
          value={userDetails.birthday}
          onChange={handleChange}
          disabled={!isEditing}
          />
        </label>
        <br />
        {isEditing ? (
          <button type="button" onClick={handleSave}>Save</button>
        ) : (
          <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </form>
    </div>
  )
};

export default Profile;