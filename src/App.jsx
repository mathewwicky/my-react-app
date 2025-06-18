import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 30,
    location: "New York",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>

      <h2>Update User Age</h2>
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
      />
      <h2>Update User Name</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <h2>Update User Location</h2>
      <input
        type="text"
        name="location"
        value={user.location}
        onChange={handleChange}
      />
    </div>
  );
}

export default Profile;
