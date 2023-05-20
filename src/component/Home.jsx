import React from 'react';
import { useDispatch } from 'react-redux';
import './Home.css';
import { useSelector } from 'react-redux';
import { todolist } from '../store';

export default function Home() {
  let dispatch = useDispatch();
  const list = useSelector((state) => state.Todo);

  console.log('Home', list);

  function handleDelete() {
    dispatch(todolist.actions.onDelete());
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
          fontWeight: 'bold',
          fontSize: '2rem',
          color: 'white',
        }}
      >
        <div>Welcome to Home Page</div>
        <button onClick={handleDelete}>Clear</button>
      </div>

      {list.length &&
        list.map((e) => (
          <div className="fieldcss">
            <div>
              {' '}
              First Name: <span>{e.firstName}</span>
            </div>
            <div>
              {' '}
              Last Name: <span>{e.LastName}</span>
            </div>
            <div>
              {' '}
              Email : <span>{e.email}</span>
            </div>
            <div>
              Phone No: <span>{e.phone}</span>
            </div>
          </div>
        ))}
    </div>
  );
}
