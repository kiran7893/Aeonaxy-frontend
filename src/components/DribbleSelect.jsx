import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DribbbleSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const handleNavigate = () => {
    navigate("/page");
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
      <div className="flex flex-col items-center justify-center h-full p-10  bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-7xl">
          <div className="flex items-center mb-8 justify-center">
            <h1 className="text-3xl font-bold mb-6  text-pink-600">
              What brings you to Dribbble?
            </h1>
          </div>
          <div className="flex items-center mb-8 justify-center">
            <p className="mb-8 text-gray-600">
              Select the options that best describe you. Dont worry, you can
              explore other options later.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div
              className={`p-4 rounded-lg cursor-pointer transition-colors duration-300 ${
                selectedOptions.includes(
                  "I'm a designer looking to share my work"
                )
                  ? "bg-green-100 text-green-800"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
              onClick={() =>
                handleOptionSelect("I'm a designer looking to share my work")
              }
            >
              <h2 className="text-lg font-bold mb-2">
                I am a designer looking to share my work
              </h2>
              <img
                src="https://cdn.dribbble.com/users/2418882/screenshots/6459584/cozy_drib-01_4x.png?resize=1000x750&vertical=center"
                alt="designer"
              />
              {/* Add your icon or image here */}
            </div>

            <div
              className={`p-4 rounded-lg cursor-pointer transition-colors duration-300 ${
                selectedOptions.includes("I'm looking to hire a designer")
                  ? "bg-green-100 text-green-800"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
              onClick={() =>
                handleOptionSelect("I'm looking to hire a designer")
              }
            >
              <h2 className="text-lg font-bold mb-2">
                I am looking to hire a designer
              </h2>
              <img
                src="https://cdn.dribbble.com/users/2418882/screenshots/6876351/workspace-01.png"
                alt="designer"
              />

              {/* Add your icon or image here */}
            </div>

            <div
              className={`p-4 rounded-lg cursor-pointer transition-colors duration-300 ${
                selectedOptions.includes("I'm looking for design inspiration")
                  ? "bg-green-100 text-green-800"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
              onClick={() =>
                handleOptionSelect("I'm looking for design inspiration")
              }
            >
              <h2 className="text-lg font-bold mb-2">
                I am looking for design inspiration
              </h2>
              <img
                src="https://cdn.dribbble.com/uploads/28433/original/81ebf0ef3aec49dde5657bd4b1f5a459.png?1633637515"
                alt="designer"
              />
            </div>
          </div>
          <div className="flex items-center mb-8 justify-center">
            <p className="mb-8 text-gray-600">
              Anything else? You can select multiple.
            </p>
          </div>

          <div className="flex justify-center items-center mb-8">
            <button
              className="mt-8 bg-pink-500 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={selectedOptions.length === 0}
              onClick={handleNavigate}
            >
              Finish
            </button>
          </div>
          <p className="mt-4 text-gray-500 text-sm">or Press RETURN</p>
        </div>
      </div>
    </>
  );
};

export default DribbbleSelect;
