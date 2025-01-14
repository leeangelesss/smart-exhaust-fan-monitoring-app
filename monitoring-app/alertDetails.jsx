import TEMP from "/images/sensorIcons/temperature.png";
import HUMID from "/images/sensorIcons/humidity.png";
import SMOKE from "/images/sensorIcons/smoke.png";
import KEROSENE from "/images/sensorIcons/kerosene.png";
import LPG from "/images/sensorIcons/lpg.png";
import AIRQUAL from "/images/sensorIcons/airquality.png";

const alertDetails = {
    Temperature: {
      icon : TEMP,
      Caution: {
        title: "Temperature Levels",
        effects: [
          "Heat cramps and heat exhaustion are possible.",
          "Continuing activity could lead to heat stroke."
        ],
        health_tips: [
          "Stay indoors and limit physical activity.",
          "Cool down with air conditioning or showers.",
          "Recognize symptoms of heat exhaustion."
        ]
      },    
      Danger: {
        title: "Temperature Levels",
        effects: [
          "Heat cramps and heat exhaustion are likely.",
          "Heat stroke is probable with continued exposure."
        ],
        health_tips: [
          "Stay in cool, air-conditioned areas.",
          "Hydrate frequently and avoid sugary drinks."
        ]
      },
      Critical: {
        title: "Temperature Levels",
        effects: ["Heat stroke is imminent."],
        health_tips: [
          "Move to a cooler location immediately.",
          "Seek medical help if symptoms occur."
        ]
      }
    },
    Humidity: {
      icon : HUMID,
      Caution: {
        title: "Humidity Levels",
        effects: [
          "Increased risk of respiratory issues and skin irritation."
        ],
        guidelines: [
          "Use a humidifier to maintain proper humidity.",
          "Hydrate your skin and drink water."
        ]
      },
      Danger: {
        title: "Humidity Levels",
        effects: [
          "Promotes mold and dust mite growth, causing allergies."
        ],
        guidelines: [
          "Use a dehumidifier to lower humidity levels.",
          "Clean surfaces prone to mold growth."
        ]
      },
      Critical: {
        title: "Humidity Levels",
        effects: [
          "Severe health hazards and structural damage."
        ],
        guidelines: [
          "Address water leaks immediately.",
          "Seek professional help for mold removal."
        ]
      }
    },
    Kerosene: {
      icon : KEROSENE,
      Caution: {
        title: "Kerosene Levels",
        effects: [
          "May cause mild irritation, headaches, or dizziness."
        ],
        guidelines: [
          "Ensure proper ventilation in kerosene-using areas.",
          "Minimize indoor use of kerosene-based appliances."
        ]
      },
      Danger: {
        title: "Kerosene Levels",
        effects: [
          "Acute effects such as nausea, headaches, and dizziness."
        ],
        guidelines: [
          "Stop using kerosene-based equipment immediately.",
          "Improve ventilation and leave the area until air quality improves."
        ]
      },
      Critical: {
        title: "Kerosene Levels",
        effects: [
          "Severe risks including chemical pneumonitis and organ damage."
        ],
        guidelines: [
          "Evacuate the area immediately.",
          "Contact authorities for inspection and intervention."
        ]
      }
    },
    LPG: {
      icon : LPG,
      Caution: {
        title: "LPG Exposure Levels",
        effects: [
          "Mild health effects such as dizziness or drowsiness."
        ],
        guidelines: [
          "Improve ventilation immediately by opening windows or using exhaust fans.",
          "Avoid open flames or potential ignition sources."
        ]
      },
      Danger: {
        title: "LPG Exposure Levels",
        effects: [
          "Moderate symptoms like headaches and potential asphyxiation."
        ],
        guidelines: [
          "Evacuate the area and improve ventilation.",
          "Contact professionals to assess and mitigate risks."
        ]
      },
      Critical: {
        title: "LPG Exposure Levels",
        effects: [
          "Severe health risks such as asphyxiation and loss of consciousness."
        ],
        guidelines: [
          "Evacuate the building immediately.",
          "Call emergency services for assistance."
        ]
      }
    },
    AirQuality: {
      icon : AIRQUAL,
      Caution: {
        title: "Air Quality Levels",
        effects: [
          "General public and sensitive individuals may experience irritation and respiratory issues."
        ], 
        guidelines: [
          "Limit outdoor activities, especially for children and the elderly.",
          "Keep windows closed and use air purifiers indoors."
        ]
      },
      Danger: {
        title: "Air Quality Levels",
        effects: [
          "Health effects become noticeable for the general public, with severe irritation for sensitive groups."
        ],
        guidelines: [
          "Stay indoors with air purifiers running.",
          "Seal gaps around windows and doors to prevent polluted air from entering."
        ]
      },
      Critical: {
        title: "Air Quality Levels",
        effects: [
          "High risk of adverse effects for everyone, including strong irritations and severe health hazards."
        ],
        guidelines: [
          "Remain indoors and avoid any physical activity.",
          "Use high-efficiency particulate air (HEPA) filters."
        ]
      }
    },
    Smoke: {
        icon : SMOKE,
        Caution: {
          title: "Smoke - Carbon Monoxide (CO) Levels",
          effects: [
            "Physical symptoms such as headaches, dizziness, and nausea after 6–8 hours of exposure."

          ],
          guidelines: [
            "Increase ventilation and stop using any potential CO sources until inspected.  ",
             "Check for appliance malfunctions or improper exhaust systems." 
          ]
        },
        Danger: {
          title: "Smoke - Carbon Monoxide (CO) Levels",
          effects: [
            "Symptoms such as fatigue, headache, and nausea after prolonged exposure (2–8 hours). "
          ],
          guidelines: [
            "Evacuate and ventilate the area immediately. ",
            "Contact a professional to assess CO sources.",
            "Do not re-enter the space until CO levels are confirmed safe. "
          ]
        },
        Critical: {
          title: "Smoke - Carbon Monoxide (CO) Levels",
          effects: [
            "Severe symptoms for 400-800 ppm (unconsciousness, potential fatalities) within 1–2 hours.",
            " Fatal within minutes for 800 ppm and above (1–30 minutes depending on concentration). "
          ],
          guidelines: [
            "Follow all evacuation and emergency protocols.",
            "Avoid entering the area without professional assistance and proper protective gear.",
            "Call emergency services immediately.",
          ]
        }
      }
  };
  
  export default alertDetails;
  