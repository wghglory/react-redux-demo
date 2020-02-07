import React from 'react';

import { initialState } from '../reducers';

export default ({ name }) => (
  <div>
    <h2>Hello {name}!</h2>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {initialState.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
