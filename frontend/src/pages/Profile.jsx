import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory

function ProfilePage() {

  const navigate = useNavigate();  // Use the hook here

  const handleMyOrders = () => {
    console.log("Navigating to My Orders...");
    navigate('/myorders');
  };
  
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    bio: '',
    accountNum: '',
    productDetails: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  // const navigate = useNavigate(); // Initialize navigate for redirection

  useEffect(() => {
    async function fetchUserProfile() {
      const fetchedUser = {
        name: 'John',
        surname: 'Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        bio: 'Software Developer passionate about building web applications.',
        accountNum: '123-456-789',
        productDetails: 'Product details go here.',
      };

      setUser(fetchedUser);
      setData({ ...fetchedUser });
    }

    fetchUserProfile();
  }, []);

  const handleSaveProfile = () => {
    console.log('Profile saved:', data);
    setUser({ ...data });
    setSuccessMessage('Profile successfully updated!');
    setIsEditing(false);

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleLogout = () => {
    console.log('Logged out');
    navigate('/login'); // Redirect to login page using navigate
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div
        className={`max-w-4xl mx-auto shadow-lg rounded-lg p-6 transition-colors duration-300 ${
          isEditing ? 'bg-yellow-100' : 'bg-white'
        }`}
      >
        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg">
            {successMessage}
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-white text-3xl font-bold">
              JD
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-blue-700">
                {user.name} {user.surname}
              </h1>
              <p className="text-lg text-blue-600">{user.email}</p>
              <p className="text-sm text-blue-500">{user.phone}</p>
            </div>
          </div>

          <div className="space-x-4">
            {isEditing ? (
              <button
                onClick={handleSaveProfile}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
              >
                Edit Profile
              </button>
            )}
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label htmlFor="name" className="text-lg font-medium text-blue-600">
                First Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Other fields go here */}
          </div>
        </div>

        <div className="mt-8 flex gap-4">
         <button
        onClick={handleMyOrders}  // Ensure this triggers the navigate function
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
      >
            My Orders
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
