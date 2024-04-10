export default function Navbar() {
  return (
    <>
      <header className="bg-white py-4 px-4 shadow">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-pink-600 font-bold text-2xl">
              dribbble
            </a>
            <ul className="ml-8 flex space-x-4">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Inspiration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Find Work
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Learn Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Go Pro
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Hire Designers
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 focus:outline-none">
              Upload
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
