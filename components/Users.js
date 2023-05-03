"use client";
import {useRouter} from 'next/navigation'

function Users({users}) {

  const router = useRouter()

    return (
        <ul className='list-group'>
        {users.map(user => (
           <li key={user.id}

          className='list-group-item d-flex align-items-center justify-content-between list-group-item-action'

           onClick={() =>{
            router.push(`/users/${user.id}`)
           } }
           >
             <div>
             <h5 className='font-monospace'>{user.id} {user.first_name} {user.last_name}</h5>
             <p>{user.name}</p>
             <p>{user.email}</p>
             <p>{user.phone}</p>
             </div>
             <img src={user.avatar} alt={user.name}
             style={{borderRadius: "20%"}} />
           </li>
         ))
        }
        
       </ul>
    )
}
export default Users;