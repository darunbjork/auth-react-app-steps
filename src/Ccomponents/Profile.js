import React, { useState } from 'react';

const Profile = () => {
  // State to store user details
  const [userDetails, setUserDetails] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    birthday: '1990-01-01',
  });

  // State to control whether we are editing
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const fieldName = e.target.name; // Get the field name (e.g., "username")
    const newValue = e.target.value; // Get the new value the user typed
    setUserDetails({
      ...userDetails, // Keep other fields unchanged
      [fieldName]: newValue, // Update the specific field
    });
  };

  // Handle saving changes
  const handleSave = () => {
    setIsEditing(false); // Turn off editing mode
    alert('Profile updated successfully!'); // Show a success message
  };

  return (
    <div className='profile-container'>
      <h2>User Profile</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleChange}
            disabled={!isEditing} // Disable input when not editing
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            disabled={!isEditing} // Disable input when not editing
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
            disabled={!isEditing} // Disable input when not editing
          />
        </label>
        <br />
        {/* Conditional rendering for buttons */}
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
