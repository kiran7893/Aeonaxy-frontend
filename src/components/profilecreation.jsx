import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProfileCreation = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/select");
  };
  const [avatarUrl, setAvatarUrl] = useState(null);

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setAvatarUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <a href="#" className="text-pink-600 font-bold px-6 text-2xl">
            dribbble
          </a>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-pink-600">
            Welcome! Lets create your profile
          </h1>
          <p className="mb-8 text-gray-600">
            Let others get to know you better! You can do these later
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Add an avatar</h2>
            <div className=" flex flex-row">
              <div className="py-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-2 border-2 border-dashed border-gray-400 flex items-center justify-center">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400">+</span>
                  )}
                </div>
              </div>
              <div className="px-16 py-16">
                <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded cursor-pointer">
                  Choose image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="px-4 py-6">
              <p className="text-gray-600 text-sm">
                Or choose one of our defaults
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Add your location</h2>
            <input
              type="text"
              placeholder="Enter a location"
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
            onClick={handleNavigate}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCreation;
