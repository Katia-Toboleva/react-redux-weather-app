export const calcTemperatureValue = (tempType, temperature) => {

  const { metric, imperial } = temperature;

  const celcium = Math.round(metric);
  const farenheit = Math.round(imperial);

  switch (tempType) {
    case 'metric': return (celcium > 0 ? `+${celcium}°` : `${celcium}°`);
    case 'imperial': return (farenheit > 0 ? `+${farenheit}°` : `${farenheit}°`);
    default: return (celcium > 0 ? `+${celcium}°` : `${celcium}°`);
  }
};
