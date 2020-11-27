export const calcTemperatureValue = (tempType, temperature) => {
  const celcium = Math.round(temperature - 273.15);
  const farenheit = Math.round((temperature * 9) / 5 - 459.67);

  switch (tempType) {
    case 'metric': return (celcium > 0 ? `+${celcium}°` : `${celcium}°`);
    case 'imperial': return (farenheit > 0 ? `+${farenheit}` : farenheit);
    default: return (celcium > 0 ? `+${celcium}°` : `${celcium}°`);
  }
};
