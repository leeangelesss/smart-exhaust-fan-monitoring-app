import TEMP from "/images/sensorIcons/temperature.png";
import HUMID from "/images/sensorIcons/humidity.png";
import SMOKE from "/images/sensorIcons/smoke.png";
import KEROSENE from "/images/sensorIcons/kerosene.png";
import LPG from "/images/sensorIcons/lpg.png";
import AIRQUAL from "/images/sensorIcons/airquality.png";

const alertDetails = {
  Temperature: {
    icon: TEMP,
    Caution: {
      effects: "Prolonged exposure to high temperatures can lead to heat cramps and heat exhaustion, potentially progressing to heat stroke if activity continues.",
      health_tips: "Stay indoors, limit physical activity, use air conditioning or take cool showers, and be vigilant for signs of heat-related illnesses."
    },
    Danger: {
      effects: "Heat cramps and heat exhaustion are likely, with a high risk of heat stroke upon continued exposure.",
      health_tips: "Remain in cool, air-conditioned environments, hydrate frequently, and avoid sugary drinks."
    },
    Critical: {
      effects: "Heat stroke is imminent, posing life-threatening risks.",
      health_tips: "Immediately move to a cooler location and seek medical attention if symptoms occur."
    }
  },
  Humidity: {
    icon: HUMID,
    Caution: {
      effects: "Elevated humidity increases the risk of respiratory issues and skin irritation.",
      guidelines: "Maintain indoor humidity between 40-60% using humidifiers or dehumidifiers, and ensure adequate hydration."
    },
    Danger: {
      effects: "High humidity promotes mold and dust mite growth, exacerbating allergies.",
      guidelines: "Use dehumidifiers to lower humidity levels and regularly clean areas prone to mold."
    },
    Critical: {
      effects: "Excessive humidity can cause severe health hazards and structural damage.",
      guidelines: "Address water leaks promptly and consult professionals for mold remediation."
    }
  },
  Kerosene: {
    icon: KEROSENE,
    Caution: {
      effects: "Short-term exposure to kerosene vapors may cause mild irritation, headaches, or dizziness.",
      guidelines: "Ensure proper ventilation in areas where kerosene is used and minimize indoor use of kerosene-based appliances."
    },
    Danger: {
      effects: "Inhalation of kerosene vapors can lead to acute symptoms like nausea, headaches, and dizziness.",
      guidelines: "Cease use of kerosene-based equipment, improve ventilation, and vacate the area until air quality improves."
    },
    Critical: {
      effects: "High levels of kerosene exposure can result in severe health risks, including chemical pneumonitis and organ damage.",
      guidelines: "Evacuate the area immediately and contact authorities for inspection and intervention."
    }
  },
  LPG: {
    icon: LPG,
    Caution: {
      effects: "Low-level LPG exposure may cause mild symptoms such as dizziness or drowsiness.",
      guidelines: "Improve ventilation by opening windows or using exhaust fans, and avoid open flames or ignition sources."
    },
    Danger: {
      effects: "Moderate LPG exposure can lead to headaches and potential asphyxiation.",
      guidelines: "Evacuate the area, enhance ventilation, and consult professionals to assess and mitigate risks."
    },
    Critical: {
      effects: "High LPG concentrations pose severe health risks, including asphyxiation and loss of consciousness.",
      guidelines: "Evacuate the building immediately and call emergency services for assistance."
    }
  },
  AirQuality: {
    icon: AIRQUAL,
    Caution: {
      effects: "Poor air quality may cause irritation and respiratory issues, especially in sensitive individuals.",
      guidelines: "Limit outdoor activities, keep windows closed, and use air purifiers indoors."
    },
    Danger: {
      effects: "Deteriorating air quality can lead to noticeable health effects in the general public and severe irritation for sensitive groups.",
      guidelines: "Stay indoors with air purifiers running and seal gaps around windows and doors to prevent polluted air from entering."
    },
    Critical: {
      effects: "Extremely poor air quality poses high risks of adverse effects for everyone, including strong irritations and severe health hazards.",
      guidelines: "Remain indoors, avoid physical activity, and use high-efficiency particulate air (HEPA) filters."
    }
  },
  Smoke: {
    icon: SMOKE,
    Caution: {
      effects: "Exposure to smoke can cause symptoms like headaches, dizziness, and nausea after several hours.",
      guidelines: "Increase ventilation and discontinue use of potential carbon monoxide sources until inspected."
    },
    Danger: {
      effects: "Prolonged exposure to carbon monoxide can lead to fatigue, headaches, and nausea.",
      guidelines: "Evacuate and ventilate the area immediately, contact a professional to assess CO sources, and do not re-enter until CO levels are confirmed safe."
    },
    Critical: {
      effects: "High concentrations of carbon monoxide can cause severe symptoms, including unconsciousness and potential fatalities within minutes.",
      guidelines: "Follow all evacuation and emergency protocols, avoid entering the area without professional assistance and proper protective gear, and call emergency services immediately."
    }
  }
};

export default alertDetails;