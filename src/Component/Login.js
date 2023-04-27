import { useEffect, useState } from 'react';

export default function Login() {
  // get all uers
  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   fetch('https://fakestoreapi.com/auth/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       username: username,
  //       password: password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  //   window.location.reload();
  // };
  return (
    <>
      <form
        method="POST"
        action="https://fakestoreapi.com/auth/login"
      >
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              type="text"
              placeholder="Text input"
              defaultValue=""
              name="username"
              onChange={handleUsername}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Text input"
              name="password"
              onChange={handlePassword}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link"
              type="submit"
              // onClick={console.log(`${username} ${password}`)}
              // onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {/* <h2>{result}</h2> */}
      {/* display all the users */}
      <div className="container is-flex is-flex-direction-column mt-6">
        <h2 className="title has-text-centered has-text-info has-background-light">
          User List
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.username}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
