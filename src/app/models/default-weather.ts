import {IWeatherPreview} from './i-weather-preview';
import {Sanitizer} from '@angular/core';

export const DEFAULT_WEATHER: IWeatherPreview = {
  region: 'Bangladesh',
  temperature: 19,
  time: '20:23',
  description: 'few clouds',
  image_path: 'https://yastatic.net/weather/i/icons/blueye/color/svg/bkn_n.svg'
};

export const city_ids = {
  'Stavropol' : 487846,
  'Moscow' : 524901,
  'Kaluga' : 553915,
  'Vladivostok' : 2013348,
  'Los Angeles' : 5368381
};

export const imgMap = {
  'clear sky_d' : '../../assets/weather_icons/skc_d.svg',
  'clear sky_n' : '../../assets/weather_icons/skc_n.svg',
  'scattered clouds_d' : '../../assets/weather_icons/ovc.svg',
  'scattered clouds_n' : '../../assets/weather_icons/ovc.svg',
  'mist_d' : '../../assets/weather_icons/fg_d.svg',
  'mist_n' : '../../assets/weather_icons/fg_n.svg',
  'few clouds_d' : '../../assets/weather_icons/bkn_d.svg',
  'few clouds_n' : '../../assets/weather_icons/bkn_n.svg',
  'broken clouds_d' : '../../assets/weather_icons/bkn_d.svg',
  'broken clouds_n' : '../../assets/weather_icons/bkn_n.svg',
  'shower rain_d' : '../../assets/weather_icons/bkn_+ra_d.svg',
  'shower rain_n' : '../../assets/weather_icons/bkn_+ra_n.svg',
  'rain_d' : '../../assets/weather_icons/bkn_ra_d.svg',
  'rain_n' : '../../assets/weather_icons/bkn_ra_n.svg',
  'light rain_d' : '../../assets/weather_icons/bkn_-ra_d.svg',
  'light rain_n' : '../../assets/weather_icons/bkn_-ra_n.svg',
  'thunderstorm_d' : '../../assets/weather_icons/ovc_ts_ra.svg',
  'thunderstorm_n' : '../../assets/weather_icons/ovc_ts_ra.svg',
  'heavy snow_d' : '../../assets/weather_icons/ovc_+sn.svg',
  'heavy snow_n' : '../../assets/weather_icons/ovc_+sn.svg',
  'snow_d' : '../../assets/weather_icons/ovc_sn.svg',
  'snow_n' : '../../assets/weather_icons/ovc_sn.svg',
  'light snow_d' : '../../assets/weather_icons/ovc_-sn.svg',
  'light snow_n' : '../../assets/weather_icons/ovc_-sn.svg',
  'overcast clouds_d' : '../../assets/weather_icons/ovc.svg',
  'overcast clouds_n' : '../../assets/weather_icons/ovc.svg',
  'drizzle_d' : '../../assets/weather_icons/ovc_ra.svg',
  'drizzle_n' : '../../assets/weather_icons/ovc_ra.svg',
  'light drizzle_d' : '../../assets/weather_icons/ovc_-ra.svg',
  'light drizzle_n' : '../../assets/weather_icons/ovc_-ra.svg',
  'heavy drizzle_d' : '../../assets/weather_icons/ovc_+ra.svg',
  'heavy drizzle_n' : '../../assets/weather_icons/ovc_+ra.svg',
  'blizzard' : '../../assets/weather_icons/bl.svg'
};
