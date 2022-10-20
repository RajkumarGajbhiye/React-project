import React from 'react'

const Header = () => {
  const myStyle = {
    top:"20px",
    position:"relative",
    display:"flex",
    justifyContent: "space-around",
  };
  return (
    <div>
        <nav style={myStyle}> 
  <select>
    <option value="Home">Home</option>
  </select>
  <select>
    <option value="About">About us</option>
  </select>
    <select>
  <option value="Contacts">Contact</option>
</select>
<select>
<option value="Booking">Booking</option>
</select>
    </nav>
    </div>
  )
}

export default Header