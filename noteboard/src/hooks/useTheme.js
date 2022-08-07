import { useContext } from 'react';
import { themeContext } from '../context/themeContext';

export const useTheme = () => {
  const value = useContext(themeContext);
  return value;
};
