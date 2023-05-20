import React, { useState } from 'react';

export default function Todo() {
  const [value, setValue] = useState('');
  const [flag, setFlag] = useState(false);
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleList(e) {
    setValue(e.target.value);
  }

  function handlelistArray() {
    if (flag) {
      let copyList = [...list];
      copyList[editIndex] = value;
      setList(copyList)
    } else {
      setList([...list, value]);
      setValue('');
    }
  }

  function handleDelete(index) {
    const updatedList = list.filter((_, Findex) => index !== Findex);
    setList(updatedList);
  }

  function handleUpdate(index) {
    setEditIndex(index);
    setFlag(true);
    setValue(list[index]);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3rem',
        width: '19%',
        margin: 'auto',
      }}
    >
      <div
        style={{
          border: '1px solid',
          padding: '20px',
          textAlign: 'center',
          marginTop: '3rem',
          color: 'black',
          backgroundColor: 'white',
        }}
      >
        <h3>Todo Task</h3>
        <br />
        <label>Enter Your Task:</label>
        <br />
        <input
          value={value}
          placeholder="Enter Your Task"
          onChange={handleList}
        />
        <br />
        <button onClick={handlelistArray}>{flag ? 'Update' : 'Add'}</button>
        <ul>
          <table style={{ border: '1px solid', marginRight: '2rem',width:"400px" }}>
            <thead style={{ border: '1px solid', margin: 'auto',width:"400px"  }}>
              <tr style={{ border: '1px solid', margin: 'auto' ,width:"400px" }}>
                <th style={{ border: '1px solid', margin: 'auto',width:"400px"  }}>Task</th>
                <th style={{ border: '1px solid', margin: 'auto' ,width:"400px" }}>Delete</th>
                <th style={{ border: '1px solid', margin: 'auto' ,width:"400px" }}>Update</th>
              </tr>
            </thead>
            <tbody>
              {list.map((e, index) => (
                <tr key={index} style={{ border: '1px solid', margin: 'auto' }}>
                  <td style={{ border: '1px solid', margin: 'auto' }}>{e}</td>
                  <td
                    style={{
                      border: '1px solid',
                      margin: 'auto',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleDelete(index)}
                  >
                    ❌
                  </td>
                  <td
                    style={{ border: '1px solid', margin: 'auto' }}
                    onClick={() => handleUpdate(index)}
                  >
                    📏
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ul>
      </div>
    </div>
  );
}
