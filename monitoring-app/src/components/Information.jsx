import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faArrowLeft, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
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
    const levels = Object.keys(pageData);

    return (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-justify text-black">{pageData[levels[0]].title}</h2>
        {levels.map((level) => (
          <div key={level} className="mb-4">
            <h3 className="font-bold text-lg text-justify">{level}</h3>
            <div className='pl-4'>
                <p className="text-justify font-semibold italic">Effects:</p>
                <ul className="list-disc ml-5 text-justify">
                {pageData[level].effects.map((effect, index) => (
                    <li key={index}>{effect}</li>
                ))}
                </ul>
                <p className="mt-2 text-justify font-semibold italic">Guidelines:</p>
                <ul className="list-disc ml-5 text-justify">
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
        className="rounded-full bg-gray-300 p-2 cursor-pointer w-12 h-12 flex justify-center items-center m-5 shadow-lg"
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
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto h-[calc(100%-80px)]">
              {renderPageContent(pages[currentPage])}
            </div>

            {/* Fixed Navigation Buttons */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 bg-gray-100 border-t">
              <button
                onClick={prevPage}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                aria-label="Previous"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
              </button>
              <button
                onClick={nextPage}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                aria-label="Next"
              >
                <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;
