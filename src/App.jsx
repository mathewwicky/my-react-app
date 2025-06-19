import { useState } from "react";

// function Profile() {
//   const [user, setUser] = useState({
//     name: "John Doe",
//     age: 30,
//     location: "New York",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };
//   return (
//     <div>
//       <h1>Profile</h1>
//       <p>Name: {user.name}</p>
//       <p>Age: {user.age}</p>
//       <p>Location: {user.location}</p>

//       <h2>Update User Age</h2>
//       <input
//         type="number"
//         name="age"
//         value={user.age}
//         onChange={handleChange}
//       />
//       <h2>Update User Name</h2>
//       <input
//         type="text"
//         name="name"
//         value={user.name}
//         onChange={handleChange}
//       />
//       <h2>Update User Location</h2>
//       <input
//         type="text"
//         name="location"
//         value={user.location}
//         onChange={handleChange}
//       />
//     </div>
//   );
// }

// export default Profile;

// function ItemList (){
//     const [items, setItems] = useState([
//       {id: 0, name: "Item 1"},
//       {id: 1, name: "Item 2"},
//       {id: 2, name: "Item 3"},
//       {id: 3, name: "Item 4"},
//     ]);

//     const addItem = () => {
//       const newItem = {id: items.length + 1, name: `Item ${items.length + 1}`};
//       // create a new array with the new item
//       setItems((prevItems) => [...prevItems, newItem]);
//     }

//     // remove an item by id
//     const removeItem = (id) => {
//       setItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     }
//     return (
//       <div>
//         <h1>Item List</h1>
//        <button onClick={addItem}>Add Item</button>
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>
//               {item.name}
//               <button onClick={() => removeItem(item.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

// export default ItemList;

export const ToggleApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id="toggle-container">
      <button onClick={handleToggleVisibility} id="toggle-button">
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );
};
export default ToggleApp;
