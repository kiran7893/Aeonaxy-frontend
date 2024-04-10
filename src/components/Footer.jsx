export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 py-8 px-4">
        <div className="container mx-auto text-gray-400">
          <div className="flex justify-between mb-8">
            <div>
              <h3 className="text-white font-bold mb-2">Dribbble</h3>
              <p>
                Dribbble is the worlds leading community for creatives to share,
                grow, and get hired.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">For designers</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Go Pro!
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Explore design work
                  </a>
                </li>
                {/* Add more links */}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Hire designers</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Post a job opening
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Post a freelance project
                  </a>
                </li>
                {/* Add more links */}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Company</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Careers
                  </a>
                </li>
                {/* Add more links */}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Directories</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Design jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Designers for hire
                  </a>
                </li>
                {/* Add more links */}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Design Resources</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Freelancing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Design Hiring
                  </a>
                </li>
                {/* Add more links */}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 px-4 flex justify-between">
            <p>&copy; 2023 Dribbble. All rights reserved.</p>
            <p>20,501,853 shots dribbbbled</p>
          </div>
        </div>
      </footer>
      ;
    </>
  );
}
