import React from 'react'
import './Profile.css'

const user= {
                name :"sachin",
                image: "https://imgs.search.brave.com/DwEHj3j6NuGuRIQiyKhZi2OPTheDoT7tIcQ3vKMlAR4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAyMi8wNi9tYXJr/dXMtc3Bpc2tlLS1k/Yk9yZHRyUjFBLXVu/c3BsYXNoLmpwZw",
                


            };
function Profile(){
    return (
        <div>
            <h1>{user.name} </h1>
            <image id = "img" src ={user.image} alt={user.name +"name image"} />
            
        </div>
    )
}
export default Profile
