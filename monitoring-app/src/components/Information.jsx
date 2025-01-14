import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faTimes } from '@fortawesome/free-solid-svg-icons';
import alertDetails from '../../alertDetails';

const Information = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setCurrentPage(0); // Reset to the first page when reopening
  };

  const pages = Object.keys(alertDetails);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length); // Loops forward
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length); // Loops backward
  };

  const renderPageContent = (page) => {
    const pageData = alertDetails[page];
    const levels = Object.keys(pageData).filter((key) => key !== 'icon'); // Exclude "icon" key

    return (
      <div>
        <div className="flex items-center mb-4">
          {/* Dynamically render the icon */}
          <img src={pageData.icon} alt={`${page} icon`} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mr-3" />
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-black flex-grow">{pageData[levels[0]].title}</h2>
        </div>
        {levels.map((level) => (
          <div key={level} className="mb-6 text-sm sm:text-sm md:text-base lg:text-base">
            <h3 className="font-bold text-black">{level}</h3>
            <div className="pl-4">
              <p className="font-semibold italic ">Effects:</p>
              <ul className="list-disc ml-5">
                {pageData[level].effects.map((effect, index) => (
                  <li key={index}>{effect}</li>
                ))}
              </ul>
              <p className="mt-2 font-semibold italic">Guidelines:</p>
              <ul className="list-disc ml-5">
                {(pageData[level].guidelines || pageData[level].health_tips).map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative text-black">
      <button
        onClick={toggleModal}
        className="rounded-full bg-teal-300 p-2 cursor-pointer w-12 h-12 flex justify-center items-center m-5 shadow-lg hover:bg-teal-500"
        aria-label="Information"
      >
        <FontAwesomeIcon icon={faInfo} className="text-xl" />
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl sm:w-96 md:w-[28rem] lg:w-[32rem] h-4/5 max-h-[90vh] relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-3 right-6 text-gray-600 hover:text-gray-800"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto h-[calc(100%-100px)]">
              {renderPageContent(pages[currentPage])}
            </div>

            {/* Fixed Navigation Buttons */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center space-x-4">
              <button
                onClick={prevPage}
                className="px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                aria-label="Previous"
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                className="px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                aria-label="Next"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;
