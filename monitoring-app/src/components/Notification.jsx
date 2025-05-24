import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faTimes } from '@fortawesome/free-solid-svg-icons';
import { supabase } from "../utils/supabase";
import alertDetails from "../../alertDetails";

const Notification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertData, setAlertData] = useState([]);
  const [hasNewAlert, setHasNewAlert] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      setHasNewAlert(false);
    }
  };

  useEffect(() => {
    // You can add your subscription logic here
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

  const getAlertContent = (sensorName, sensorStat) => {
    const sensorDetails = alertDetails[sensorName];
    if (!sensorDetails) return null;

    const levelDetails = sensorDetails[sensorStat];
    return levelDetails ? levelDetails.alerts : null;
  };

  const getLevelStyles = (level) => {
    const baseStyle =
      "mb-4 p-4 rounded-lg shadow-lg border-l-0 border-r-0 border-b-2 bg-teal-800 text-white";
    let levelClass = "";

    switch (level) {
      case "Caution":
        levelClass = "border-yellow-500 text-yellow-500";
        break;
      case "Danger":
        levelClass = "border-orange-500 text-orange-500";
        break;
      case "Critical":
        levelClass = "border-red-500 text-red-500";
        break;
      case "Good":
        levelClass = "border-green-500 text-green-500";
        break;
      default:
        levelClass = "border-gray-300 text-gray-500";
    }

    return `${baseStyle} ${levelClass}`;
  };

  return (
    <div className="relative text-white">
      <div className="relative">
        {hasNewAlert && (
          <div className="absolute -top-2 left-6 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            !
          </div>
        )}
        <button
          onClick={handleToggleModal}
          className="rounded-full bg-teal-300 p-2 cursor-pointer w-12 h-12 flex justify-center items-center m-5 shadow-lg hover:bg-teal-500"
          aria-label="Show Notification"
        >
          <FontAwesomeIcon icon={faTriangleExclamation} className="text-xl text-black" />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-teal-900 rounded-lg shadow-lg w-11/12 max-w-3xl h-4/5 max-h-[90vh] relative p-6 flex flex-col">
            <button
              onClick={handleToggleModal}
              className="absolute top-3 right-6 text-gray-300 hover:text-white"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>

            <h2 className="text-2xl font-bold text-center text-white mb-6">Alert Notifications</h2>

            <div className="overflow-y-auto pr-2 flex-grow">
              {alertData.length > 0 ? (
                alertData.map((alert, index) => {
                  const content = getAlertContent(alert.sensor_name, alert.sensor_stat);
                  const levelStyles = getLevelStyles(alert.sensor_stat);

                  return (
                    <div key={index} className={levelStyles}>
                      <div className="flex items-center mb-3">
                        <FontAwesomeIcon
                          icon={faTriangleExclamation}
                          className={`w-6 h-6 mr-3 ${levelStyles.includes('text-yellow-500') ? 'text-yellow-500' : levelStyles.includes('text-orange-500') ? 'text-orange-500' : levelStyles.includes('text-red-500') ? 'text-red-500' : 'text-green-500'}`}
                        />
                        <h3 className={`text-xl font-bold ${levelStyles.includes('text-yellow-500') ? 'text-yellow-500' : levelStyles.includes('text-orange-500') ? 'text-orange-500' : levelStyles.includes('text-red-500') ? 'text-red-500' : 'text-green-500'}`}>
                          {alert.sensor_name}: {alert.sensor_stat}
                        </h3>
                      </div>
                      <p className="text-gray-300">{content}</p>
                    </div>
                  );
                })
              ) : (
                <div className={getLevelStyles("Good")}>
                  <div className="flex items-center mb-3">
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      className="w-6 h-6 mr-3 text-green-500"
                    />
                    <h3 className="text-xl font-bold text-green-500">
                      Good
                    </h3>
                  </div>
                  <p className="text-white">All systems are operating under optimal conditions.!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;