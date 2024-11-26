import { createContext } from 'react';
import { WeatherContextType } from '../types';

const WeatherContext = createContext({} as WeatherContextType);

export default WeatherContext;