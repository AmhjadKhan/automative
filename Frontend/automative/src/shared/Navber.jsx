
import { NavLink } from 'react-router-dom'

const Navber = () => {
    const navLinks = (
    <>
      <li>
        <NavLink className='text-blue-500 font-bold' to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className='text-red-400 font-bold' to="/about">About</NavLink>
      </li>
      <li>
        <NavLink className='text-blue-500 font-bold' to="/addproduct">Add product</NavLink>
      </li>
      <li>
        <NavLink className='text-blue-500 font-bold' to="/mycart">My Cart</NavLink>
      </li>
      <li>
        <NavLink className='text-blue-500 font-bold' to="/user">User</NavLink>
      </li>
      <li>
        <NavLink className='text-red-400 font-bold' to="/login">Log in</NavLink>
      </li>
      
    </>
  );
  return (
    <div className="navbar bg-gray- py-5 shadow-2xl mb-8 rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className='flex'>
            <img className='w-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxB1v7rX2sGuaRLJ6Tpy-LiGXjAgHpBfe4fQ&usqp=CAU" alt="photo" />
        <div>
        <a className="btn btn-ghost normal-case text-xl font-extrabold text-green-700">Car World</a>
        <div>
        </div>
        </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src='' />
          </div>
        </label>
        {/* {
          user ?
        <button onClick={handleLogout} className="btn bg-yellow-300">Log out</button> 
         :
         <Link to='/login'>
           <button className="btn bg-green-300">Log in</button> 
         </Link>
        } */}
      </div>
    </div>
  );
}

export default Navber;
