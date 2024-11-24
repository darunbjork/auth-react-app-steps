import React, { useState } from 'react';

const Profile = () => {
  // State for storing user details
  const [userDetails, setUserDetails] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    birthday: '1990-01-01',
  });

  // State for managing whether the form is editable
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle changes in the input fields
  const handleChange = (event) => {
    const { name, value } = event.target; // Get the name of the field and its new value
    setUserDetails((prevDetails) => ({
      ...prevDetails, // Keep the existing details unchanged
      [name]: value, // Update only the field that changed
    }));
  };

  // Function to save the updated details and disable editing
  const handleSave = () => {
    setIsEditing(false); // Exit editing mode
    alert('Profile updated successfully!'); // Show a success message
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <form>
        {/* Username field */}
        <label>
          Username:
          <input
            type="text"
            name="username" // Used to identify this input in handleChange
            value={userDetails.username} // Current value from state
            onChange={handleChange} // Update state when user types
            disabled={!isEditing} // Disable input unless editing
            placeholder="Enter your username" // Hint text for the user
          />
        </label>
        <br />

        {/* Email field */}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            disabled={!isEditing}
            placeholder="Enter your email"
          />
        </label>
        <br />

        {/* Birthday field */}
        <label>
          Birthday:
          <input
            type="date"
            name="birthday"
            value={userDetails.birthday}
            onChange={handleChange}
            disabled={!isEditing}
            placeholder="Select your birthday"
          />
        </label>
        <br />

        {/* Buttons for editing and saving */}
        {isEditing ? (
          <button type="button" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default Profile;
