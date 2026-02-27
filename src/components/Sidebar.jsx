import { Navigate, useNavigate } from "react-router-dom";

const Sidebar = () => {

 const navigate = useNavigate(); 

  const handleNavigation = (path) => {
    navigate(path); 
  };


  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold text-black mb-3">Manage My Account</h3>
        <ul className="ml-4 space-y-2 text-gray-500 text-sm">
          <li className="text-red-500 cursor-pointer">My Profile</li>
          <li className="hover:text-red-500 cursor-pointer">Address Book</li>
          <li className="hover:text-red-500 cursor-pointer">My Payment Options</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-black mb-3">My Orders</h3>
        <ul className="ml-4 space-y-2 text-gray-500 text-sm">
          <li className="hover:text-red-500 cursor-pointer">My Returns</li>
          <li className="hover:text-red-500 cursor-pointer">My Cancellations</li>
        </ul>
      </div>

      <div>
        <h3
        onClick={() => handleNavigation('/wishlist')}
        className="font-bold text-black mb-3 cursor-pointer">My WishList</h3>
      </div>
    </div>
  );
};


export default Sidebar;