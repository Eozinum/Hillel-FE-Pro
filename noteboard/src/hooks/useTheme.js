import { useContext } from 'react';
import { themeContext } from '../context/themeContext';

export const useTheme = () => {
  return useContext(themeContext);
};
