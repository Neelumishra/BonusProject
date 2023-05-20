import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todolist } from '../store';
import joi from 'joi-browser';
import './contact.css';
export default function Contact() {
  let dispatch = useDispatch();
  const [error, setError] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    const details = {
      firstName: e.target[0].value,
      LastName: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
    };
    console.log(details);
    const { error, value } = userSchema.validate(details);
    console.log(error, value);
    if (error) {
      setError(error.details[0].message);
      return;
    }
    setError('');
    dispatch(todolist.actions.onlist(details));
  }
  const userSchema = joi.object({
    firstName: joi.string().required().min(5).max(8),
    LastName: joi.string().required().min(5).max(8),
    email: joi.string().email().required(),
    phone: joi.string().required().max(10).min(10),
  });
  return (
    <div
      style={{
        paddingTop: '2rem',
        border: '2px solid white',
        width: '30%',
        margin: 'auto',
        marginTop: '1rem',
        borderRadius: '10px',
      }}
    >
      <form onSubmit={handleSubmit}>
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <label>First Name : </label>
        <input name="firstName" />
        <br />
        <label>Last Name : </label>
        <input name="LastName" />
        <br />
        <label>Email Id : </label>
        <input name="email" />
        <br />

        <label>Phone No : </label>
        <input type="number" name="phone" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
