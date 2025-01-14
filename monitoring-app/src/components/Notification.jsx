import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "../utils/supabase";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import alertDetails from "../../alertDetails";

const Notification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertData, setAlertData] = useState([]);
  const [hasNewAlert, setHasNewAlert] = useState(false);
  const [expandedAlerts, setExpandedAlerts] = useState({}); // Tracks which alerts are expanded

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      setHasNewAlert(false);
    }
  };

  useEffect(() => {
    const channel = supabase.channel("sensor_notifications");

    channel
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "sensor_data" },
        (payload) => {
          if (payload.new) {
            const updatedSensor = payload.new;

            setAlertData((prevData) => {
              const updatedData = prevData.filter(
                (item) => item.sensor_name !== updatedSensor.sensor_name
              );

              if (
                ["Caution", "Danger", "Critical"].includes(
                  updatedSensor.sensor_stat
                )
              ) {
                updatedData.push(updatedSensor);
              }

              setHasNewAlert(updatedData.length > 0);
              return updatedData;
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const getAlertDetails = (sensorName, sensorStat) => {
    const sensorDetails = alertDetails[sensorName];
    if (!sensorDetails) return null;

    const levelDetails = sensorDetails[sensorStat];
    return levelDetails
      ? {
          title: levelDetails.title,
          effects: levelDetails.effects || [],
          guidelines: levelDetails.guidelines || [],
          healthTips: levelDetails.health_tips || [],
        }
      : null;
  };

  const toggleAlertDetails = (index) => {
    setExpandedAlerts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="relative">
      {/* Notification Icon */}
      <div className="relative">
        {hasNewAlert && (
          <div className="absolute -top-2 left-6 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            !
          </div>
        )}
        <div
          className="rounded-full bg-teal-300 p-2 cursor-pointer w-12 h-12 flex justify-center items-center m-5 shadow-lg hover:bg-teal-500"
          onClick={handleToggleModal}
          role="button"
          aria-label="Show Notification"
        >
          <FontAwesomeIcon icon={faTriangleExclamation} className="text-2xl text-black" />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black">
          <div className="bg-white rounded-lg p-6 w-96 relative">
            <h2 className="text-lg sm:text-sm md:text-md lg:text-lg font-semibold mb-4">Notifications</h2>

            {/* Alert Cards */}
            {alertData.length > 0 ? (
              alertData.map((alert, index) => {
                const details = getAlertDetails(
                  alert.sensor_name,
                  alert.sensor_stat
                );
                let borderColor;

                switch (alert.sensor_stat) {
                  case "Caution":
                    borderColor = "border-yellow-500";
                    break;
                  case "Danger":
                    borderColor = "border-orange-500";
                    break;
                  case "Critical":
                    borderColor = "border-red-500";
                    break;
                  default:
                    borderColor = "border-gray-300";
                }

                return (
                  <div
                    key={index}
                    className={`border ${borderColor} rounded-md p-4 mb-4 relative flex flex-col cursor-pointer`}
                    onClick={() => toggleAlertDetails(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg sm:text-sm md:text-md lg:text-lg font-bold">
                        {alert.sensor_stat} - {details?.title || alert.sensor_name}
                      </h3>
                      <FontAwesomeIcon
                        icon={expandedAlerts[index] ? faChevronUp : faChevronDown}
                        className="text-gray-500"
                      />
                    </div>
                    <h4 className="font-bold">Effects:</h4>
                    <p className="text-sm sm:text-sm md:text-md lg:text-lg mt-1"> 
                      {details
                        ? details.effects.join(" ")
                        : $}
                    </p>
                    {expandedAlerts[index] && details && (
                      <div className="mt-2">
                        {details.guidelines.length > 0 && (
                          <>
                            <h4 className="font-bold">Guidelines:</h4>
                            <ul className="list-disc ml-4 text-sm sm:text-sm md:text-md lg:text-lg">
                              {details.guidelines.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </>
                        )}
                        {details.healthTips.length > 0 && (
                          <>
                            <h4 className="font-bold">Health Tips:</h4>
                            <ul className="list-disc ml-4">
                              {details.healthTips.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-gray-600">
                All sensors are operating under optimal conditions.
              </p>
            )}

            {/* Close Button */}
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleToggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
