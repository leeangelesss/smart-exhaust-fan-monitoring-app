import temperature from '/images/sensorIcons/temperature.png';
import humidity from '/images/sensorIcons/humidity.png';
import carbonMonoxide from '/images/sensorIcons/carbonMonoxide.png';
import carbonDioxide from '/images/sensorIcons/carbonDioxide.png';
import butane from '/images/sensorIcons/butane.png';
import propane from '/images/sensorIcons/propane.png';

const sensors = [
    { 
        label: 'Temperature', 
        icon: temperature, 
        value: '20', 
        unit: '°C', // Degree Celsius
        minValue: '0',
        maxValue: '100',
    },
    { 
        label: 'Humidity', 
        icon: humidity, 
        value: '78', 
        unit: '%', // Percentage
        minValue: '0',
        maxValue: '100',
    },
    { 
        label: 'Carbon Monoxide', 
        icon: carbonMonoxide, 
        value: '26', 
        unit: 'ppm', // Parts per million
        minValue: '0',
        maxValue: '100',
    },
    { 
        label: 'Carbon Dioxide', 
        icon: carbonDioxide, 
        value: '3022', 
        unit: 'ppm', // Parts per million
        minValue: '0',
        maxValue: '5000',
    },
    { 
        label: 'Butane', 
        icon: butane, 
        value: '1350', 
        unit: 'ppm', // Parts per million
        minValue: '0',
        maxValue: '5000',
    },
    { 
        label: 'Propane', 
        icon: propane, 
        value: '4389', 
        unit: 'ppm', // Parts per million
        minValue: '0',
        maxValue: '5000',
    },
];

export default sensors;
