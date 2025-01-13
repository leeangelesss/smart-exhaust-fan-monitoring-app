import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
            <div className='pl-5'>
                <div className='flex inline-block'>
                    <p className="text-justify font-semibold italic">Effects:</p>
                    <p className="ml-5 text-justify">
                    {pageData[level].effects.map((effect, index) => (
                        <span key={index}>{effect}</span>
                    ))}
                    </p>
                </div>
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
        className="rounded-full bg-gray-200 p-2 cursor-pointer w-12 h-12 flex justify-center items-center m-5"
        aria-label="Information"
      >
        <FontAwesomeIcon icon={faInfo} className="text-xl" />
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
            <div className="mb-4">
              {renderPageContent(pages[currentPage])}
            </div>
            <div className="flex justify-between mt-4">
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
            <button
              onClick={toggleModal}
              className="mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 text-white w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;
