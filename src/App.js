import React, {useState, useEffect } from 'react';


const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setUsers(datos.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="contenido">
      <h1>EJERCICIO2 - SEMANA7</h1>

      <table class="tabalprinc" border="1">

        <thead>
          <tr>
            <th>Posición</th>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Género</th>
            <th>Celular</th>
            <th>País</th>
            <th>Ciudad</th>
            <th>Calle</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.login.uuid}>

              <td>{index + 1}</td>
              <td><img src={user.picture.medium} alt="User"/></td>
              <td>{user.name.title} {user.name.first} {user.name.last}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.cell}</td>
              <td>{user.location.country}</td>
              <td>{user.location.city}</td>
              <td>{user.location.street.name} {user.location.street.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;