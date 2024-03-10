import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const initialUserFromData = {
  id: '',
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: ""
};

const CreateUser = () => {
  let location = useLocation();
  const { users, setUsers } = useContext(UserContext);
  const [userData, setUserData] = useState(initialUserFromData);

  useEffect(
    () => {
      if (location.state && location.state.user) {
        setUserData(location.state.user);
      }
    },
    [location]
  );

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (location.state?.isEdit) {
      const updatedUsers = users.map(user => 
        user.id === userData.id ? userData : user
      );
      setUsers(updatedUsers);
    } else {
      setUsers([...users, { ...userData, id: uuidv4() }]);
    }
    setUserData(initialUserFromData);
  };

  return (
    <div class="container m-5">
      <form onSubmit={handleSubmit}>
        <div class="row mb-4">
          <div class="col">
            <div data-mdb-input-init class="form-outline">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                class="form-control"
              />
              <label class="form-label" for="form3Example1">
                First name
              </label>
            </div>
          </div>
          <div class="col">
            <div data-mdb-input-init class="form-outline">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                class="form-control"
              />
              <label class="form-label" for="form3Example2">
                Last name
              </label>
            </div>
          </div>
        </div>

        <div data-mdb-input-init class="form-outline mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            class="form-control"
          />
          <label class="form-label" for="form3Example3">
            Email address
          </label>
        </div>

        <div data-mdb-input-init class="form-outline mb-4">
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
            class="form-control"
          />
          <label class="form-label" for="form3Example4">
            Phone Number
          </label>
        </div>

        <button
          data-mdb-input-init
          type="submit"
          class="btn btn-primary btn-block mb-4"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
