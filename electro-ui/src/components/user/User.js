import React, { useState, useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

function User() {
  const { user, handleLogin, isEmployee } = useContext(AuthContext);
  const navigate = useNavigate();

  function DropdownMenu() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOrdersClick = () => {
      navigate('user/orders');
    };

    const handleAdminClick = () => {
      navigate('/admin');
    }

    return (
      <div className="text-3xl relative">
        <div
          className={`rounded-full border w-12 h-12 flex justify-center items-center
           bg-white group hover:bg-gray-300 ${
            isDropdownOpen ? 'bg-gray-300' : ''
          }`}
          onClick={toggleDropdown}
        >
          <FaUser />
        </div>
        {isDropdownOpen && (
          <div className="absolute -right-0 mt-8 p-2 bg-white border rounded-lg shadow-lg w-40">
            <ul>
            {user && isEmployee && (
              <li
              className='text-lg cursor-pointer hover:bg-gray-200 p-2'
              onClick={handleAdminClick}
              >
                Admin
              </li>
            )}
              {user ? (
                <form
                  action="/logout"
                  method="post"
                  className="cursor-pointer text-lg hover:bg-gray-200 p-2"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value={Cookies.get('XSRF-TOKEN')}
                  />
                  <button type="submit">Log out</button>
                </form>
              ) : (
                <li
                  className="text-lg cursor-pointer hover:bg-gray-200 p-2"
                  onClick={handleLogin}
                >
                  Log In
                </li>
              )}
              {user && (
                <li
                  className="text-lg cursor-pointer hover:bg-gray-200 p-2"
                  onClick={handleOrdersClick}
                >
                  My Orders
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return <DropdownMenu />;
}

export default User;