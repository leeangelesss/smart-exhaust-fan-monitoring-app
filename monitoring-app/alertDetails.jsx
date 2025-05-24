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
      guidelines: "Stay indoors, limit physical activity, use air conditioning or take cool showers, and be vigilant for signs of heat-related illnesses.",
      alerts: "Temperature is higher than normal. Stay hydrated, rest in a cool place, and reduce physical activity."
    },
    Danger: {
      effects: "Heat cramps and heat exhaustion are likely, with a high risk of heat stroke upon continued exposure.",
      guidelines: "Remain in cool, air-conditioned environments, hydrate frequently, and avoid sugary drinks.",
      alerts: "High temperature detected. Immediately move to a shaded or air-conditioned area and drink water often."
    },
    Critical: {
      effects: "Heat stroke is imminent, posing life-threatening risks.",
      guidelines: "Immediately move to a cooler location and seek assistance if symptoms occur.",
      alerts: "Extreme heat levels. Get to a cool environment now, rest, and lower your body temperature with water or fans."
    }
  },
  Humidity: {
    icon: HUMID,
    Caution: {
      effects: "Elevated humidity increases the risk of respiratory issues and skin irritation.",
      guidelines: "Maintain indoor humidity between 40-60% using humidifiers or dehumidifiers, and ensure adequate hydration.",
      alerts: "Humidity is above normal. Use a fan or dehumidifier, and keep your skin dry to avoid irritation."
    },
    Danger: {
      effects: "High humidity promotes mold and dust mite growth, exacerbating allergies.",
      guidelines: "Use dehumidifiers to lower humidity levels and regularly clean areas prone to mold.",
      alerts: "Dangerous humidity detected. Increase airflow by opening windows and clean surfaces to prevent mold growth."
    },
    Critical: {
      effects: "Excessive humidity can cause severe health hazards and structural damage.",
      guidelines: "Address water leaks promptly and consult professionals for mold remediation.",
      alerts: "Extremely high humidity levels. Ventilate immediately, dry damp areas, and avoid confined humid spaces."
    }
  },
  Kerosene: {
    icon: KEROSENE,
    Caution: {
      effects: "Short-term exposure to kerosene vapors may cause mild irritation, headaches, or dizziness.",
      guidelines: "Ensure proper ventilation in areas where kerosene is used and minimize indoor use of kerosene-based appliances.",
      alerts: "Kerosene levels slightly elevated. Open windows and avoid lighting flames or using appliances."
    },
    Danger: {
      effects: "Inhalation of kerosene vapors can lead to acute symptoms like nausea, headaches, and dizziness.",
      guidelines: "Cease use of kerosene-based equipment, improve ventilation, and vacate the area until air quality improves.",
      alerts: "Dangerous kerosene concentration. Turn off equipment, ventilate the area, and step outside temporarily."
    },
    Critical: {
      effects: "High levels of kerosene exposure can result in severe health risks, including chemical pneumonitis and organ damage.",
      guidelines: "Evacuate the area immediately and report the issue to the building maintenance or safety personnel for inspection.",
      alerts: "Extremely high kerosene levels detected. Leave the room, get fresh air, and avoid re-entering until the smell clears."
    }
  },
  LPG: {
    icon: LPG,
    Caution: {
      effects: "Low-level LPG exposure may cause mild symptoms such as dizziness or drowsiness.",
      guidelines: "Improve ventilation by opening windows or using exhaust fans, and avoid open flames or ignition sources.",
      alerts: "Low-level LPG detected. Open windows, turn off gas appliances, and avoid creating sparks or flames."
    },
    Danger: {
      effects: "Moderate LPG exposure can lead to headaches and potential asphyxiation.",
      guidelines: "Evacuate the area, enhance ventilation, and consult professionals to assess and mitigate risks.",
      alerts: "Moderate LPG levels found. Step outside for fresh air, increase ventilation, and avoid turning on electronics."
    },
    Critical: {
      effects: "High LPG concentrations pose severe health risks, including asphyxiation and loss of consciousness.",
      guidelines: "Evacuate the building immediately and inform onsite safety or maintenance staff for leak inspection and containment.",
      alerts: "High LPG concentration detected. Get to open air immediately and do not return until the air is safe."
    }
  },
  AirQuality: {
    icon: AIRQUAL,
    Caution: {
      effects: "Poor air quality may cause irritation and respiratory issues, especially in sensitive individuals.",
      guidelines: "Limit outdoor activities, keep windows closed, and use air purifiers indoors.",
      alerts: "Reduced air quality detected. Limit outdoor activity, wear a mask if needed, and use air purifiers inside."
    },
    Danger: {
      effects: "Deteriorating air quality can lead to noticeable health effects in the general public and severe irritation for sensitive groups.",
      guidelines: "Stay indoors with air purifiers running and seal gaps around windows and doors to prevent polluted air from entering.",
      alerts: "Poor air quality detected. Stay indoors, close windows, and use an air purifier or fan with a filter if available."
    },
    Critical: {
      effects: "Extremely poor air quality poses high risks of adverse effects for everyone, including strong irritations and severe health hazards.",
      guidelines: "Remain indoors, avoid physical activity, and use high-efficiency particulate air (HEPA) filters.",
      alerts: "Extremely unhealthy air quality. Avoid all outdoor exposure, seal windows, and use high-quality indoor filters."
    }
  },
  Smoke: {
    icon: SMOKE,
    Caution: {
      effects: "Exposure to smoke can cause symptoms like headaches, dizziness, and nausea after several hours.",
      guidelines: "Increase ventilation and discontinue use of potential carbon monoxide sources until inspected.",
      alerts: "Smoke levels detected. Open windows to improve airflow and take breaks in cleaner areas."
    },
    Danger: {
      effects: "Prolonged exposure to carbon monoxide can lead to fatigue, headaches, and nausea.",
      guidelines: "Evacuate and ventilate the area immediately, contact a professional to assess CO sources, and do not re-enter until CO levels are confirmed safe.",
      alerts: "High smoke levels. Leave the smoky space, breathe fresh air, and avoid exertion until air clears."
    },
    Critical: {
      effects: "High concentrations of carbon monoxide can cause severe symptoms, including unconsciousness and potential fatalities within minutes.",
      guidelines: "Follow all evacuation and safety protocols, and do not re-enter until professionals confirm air is safe.",
      alerts: "Extremely high smoke concentration detected. Get to a clean-air area immediately and avoid re-entering for now."
    }
  }
};

export default alertDetails;
