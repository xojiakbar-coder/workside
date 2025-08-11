// React
import { useContext } from 'react';

// Context
import { LayoutContext } from './Layout';

// Hook
const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};

export default useLayout;
