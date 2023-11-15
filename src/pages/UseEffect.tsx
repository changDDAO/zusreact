import React, {useEffect, useState} from 'react'

interface User{
   id: number;
   name: string;
   email: string;
}
function UseEffect(){
   const [users, setUsers] = useState<User[]>([]);
   useEffect(() => {
      const fetchUsers = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      };
      fetchUsers();
   }, []);
return (
   <div>
      <h2>User List</h2>
      <ul>
         {users.map((user) =>(
             <li key={user.id}>
                {user.name} {user.email}
             </li>
         ))}
      </ul>
   </div>
);
}
export default UseEffect;