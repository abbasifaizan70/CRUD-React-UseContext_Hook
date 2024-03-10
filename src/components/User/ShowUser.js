import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import User from "./User";

const ShowUser = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  const users = context.users;

  const handleEditClick = user => {
    navigate(`/create-user`, { state: { user, isEdit: true } });
  };

  const handleDeleteClick = id => {
    const updatedUsers = users.filter(user => user.id !== id);
    context.setUsers(updatedUsers);
  };

  const handleShowClick = user => {
    navigate(`/user/${user.id}`, { state: { user } });
  };

  return <div>
      {!users || users.length === 0 ? <div>No Users</div> : <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, userIndex) => <tr key={userIndex}>
                    {Object.entries(user).map(([key, value], index) =>
                      <td key={index}>
                        {value}
                      </td>
                    )}
                    <td>
                      <button className="btn btn-info" onClick={() => handleEditClick(user)}>
                        Edit User
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-info" onClick={() => handleDeleteClick(user.id)}>
                        Delete User
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-info" onClick={() => handleShowClick(user)}>
                        Show
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>}
    </div>;
};

export default ShowUser;
