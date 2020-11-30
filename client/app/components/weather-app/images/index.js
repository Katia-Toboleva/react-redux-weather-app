import blizzard from './blizzard.jpg';
import blowingSnow from './blowing-snow.jpg';
import clear from './clear.jpg';
import clouds from './clouds.jpg';
import drizzle from './drizzle.jpg';
import fog from './fog.jpg';
import hail from './hail.jpg';
import mist from './mist.jpg';
import heavyRain from './heavy-rain.jpg';
import icePellets from './ice-pellets.jpg';
import lightSnow from './light-snow.jpg';
import lightRain from './light-rain.jpg';
import moderateRain from './moderate-rain.jpg';
import moderateSnow from './moderate-snow.jpg';
import overcast from './overcast.jpg';
import partlyCloudy from './partly-cloudy.jpg';
import rain from './rain.jpg';
import showers from './showers.jpg';
import sleet from './sleet.jpg';
import snow from './snow.jpg';
import thunderstorm from './thunderstorm.jpg';

const weatherConditions = {
  1000: clear,
  1003: partlyCloudy,
  1006: clouds,
  1009: overcast,
  1030: mist,
  1063: rain,
  1066: snow,
  1069: sleet,
  1072: drizzle,
  1087: thunderstorm,
  1114: blowingSnow,
  1117: blizzard,
  1135: fog,
  1147: fog,
  1150: drizzle,
  1153: drizzle,
  1168: drizzle,
  1171: drizzle,
  1180: lightRain,
  1183: lightRain,
  1186: moderateRain,
  1189: moderateRain,
  1192: heavyRain,
  1195: heavyRain,
  1198: heavyRain,
  1201: rain,
  1204: sleet,
  1207: sleet,
  1210: lightSnow,
  1213: lightSnow,
  1216: moderateSnow,
  1219: moderateSnow,
  1222: snow,
  1225: snow,
  1237: icePellets,
  1240: rain,
  1243: heavyRain,
  1246: showers,
  1249: showers,
  1252: showers,
  1255: moderateSnow,
  1258: moderateSnow,
  1261: hail,
  1264: hail,
  1273: thunderstorm,
  1276: thunderstorm,
  1279: snow,
  1282: snow,
};

export default weatherConditions;
