import React, { useState, useEffect } from 'react';
import fetchMocked from '../utility/fetch';
import UserActivity from './UserActivity'
import 'bootstrap/dist/css/bootstrap.min.css';


function Users() {
  const [usersActivityData, setUsersActivityData] = useState({});
  const [userSelected, selectUser] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetchMocked('http://example.com/usersActivityData')
    .then(response => JSON.parse(response))
    .then(data => setUsersActivityData(data));
  }, []);

  function renderUsers() {
    return usersActivityData.members.map(({id, real_name}) => {
      return (
        <div key={id} data-key={id} className="card text-white bg-info mb-3" onClick={() => {
          selectUser(id)
          setShow(true)
        }}>
          <div className="card-body">
            <p className="card-text">{real_name}</p>
          </div>
        </div>
      );
    });
  }

  function renderUserActivityModal() {
    const userActivity = usersActivityData.members.find(({id}) => id === userSelected);
    return (
      <UserActivity userActivity={userActivity} setShow={setShow} show={show}/>
    );
  }

  return (
    <>
      {usersActivityData.members && renderUsers()}
      {show && renderUserActivityModal()}
    </>
  );
}

export default Users;
