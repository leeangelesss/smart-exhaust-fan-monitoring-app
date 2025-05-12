import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faTimes, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import alertDetails from '../../alertDetails';

const Information = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setCurrentPage(0);
  };

  const pages = Object.keys(alertDetails);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  const getLevelStyles = (level) => {
    const baseStyle =
      'mb-4 p-4 rounded-lg shadow-lg border-b-4 bg-teal-800 text-white'; // Updated to darker teal
    switch (level) {
      case 'Caution':
        return `${baseStyle} border-yellow-500 text-lg`;
      case 'Danger':
        return `${baseStyle} border-orange-500 text-lg`;
      case 'Critical':
        return `${baseStyle} border-red-500 text-lg`;
      default:
        return `${baseStyle} border-green-500`;
    }
  };

  const renderPageContent = (page) => {
    const pageData = alertDetails[page];
    const levels = Object.keys(pageData).filter((key) => key !== 'icon');

    return (
      <>
        {/* Header */}
        <div className="flex items-center mb-4 flex-shrink-0 bg-teal-600 py-2 px-6 rounded-full w-max mx-auto">
          <img
            src={pageData.icon}
            alt={`${page} icon`}
            className="w-10 h-10 mr-3"
          />
          <h2 className="text-2xl font-bold text-black text-center">{page}</h2>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-2 flex-grow">
          {levels.map((level) => (
            <div key={level} className={getLevelStyles(level)}>
              <h3
                className={`font-bold text-xl mb-3 ${
                  level === 'Caution'
                    ? 'text-yellow-500'
                    : level === 'Danger'
                    ? 'text-orange-500'
                    : level === 'Critical'
                    ? 'text-red-500'
                    : ''
                }`}
              >
                {level}
              </h3>
              <div className="mb-3">
                <p className="whitespace-pre-line">
                  <strong>Effects:</strong> {pageData[level].effects}
                </p>
              </div>
              <div>
                <p className="whitespace-pre-line">
                  <strong>Guidelines:</strong> {pageData[level].guidelines || pageData[level].health_tips}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-4 pt-4 border-t border-gray-600 flex-shrink-0">
          <button
            onClick={prevPage}
            className="px-4 py-2 bg-teal-800 text-white rounded flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
          </button>
          <button
            onClick={nextPage}
            className="px-4 py-2 bg-teal-800 text-white rounded flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="relative text-white">
      <button
        onClick={toggleModal}
        className="rounded-full bg-teal-300 p-2 cursor-pointer w-12 h-12 flex justify-center items-center m-5 shadow-lg hover:bg-teal-500"
        aria-label="Information"
      >
        <FontAwesomeIcon icon={faInfo} className="text-xl text-black" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-teal-900 rounded-lg shadow-lg w-11/12 max-w-3xl h-4/5 max-h-[90vh] relative p-6 flex flex-col">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-6 text-gray-300 hover:text-white"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>

            {/* Modal layout: header, scrollable content, footer */}
            <div className="flex flex-col h-full overflow-hidden">
              {renderPageContent(pages[currentPage])}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;
