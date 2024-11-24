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
        value: '35', 
        unit: '°C', // Degree Celsius
        minValue: '0',
        maxValue: '100',
    },
    { 
        label: 'Humidity', 
        icon: humidity, 
        value: '42', 
        unit: '%', // Percentage
        minValue: '0',
        maxValue: '100',
    },
    { 
        label: 'Carbon Monoxide', 
        icon: carbonMonoxide, 
        value: '61', 
        unit: 'ppm', // Parts per million
        minValue: '0',
        maxValue: '100',
    },
    { 
        label: 'Carbon Dioxide', 
        icon: carbonDioxide, 
        value: '45', 
        unit: 'ppm', // Parts per million
        minValue: '0',
        maxValue: '100',
    },
    { 
        label: 'Butane', 
        icon: butane, 
        value: '53', 
        unit: 'ppm', // Parts per million
        minValue: '0',
        maxValue: '100',
    },
    { 
        label: 'Propane', 
        icon: propane, 
        value: '86', 
        unit: 'ppm', // Parts per million
        minValue: '0',
        maxValue: '100',
    },
];

export default sensors;
