import React from 'react';
import { ThemeProvider } from './ThemeProvider';

const providers: React.ComponentType<{ children: React.ReactNode }>[] = [ThemeProvider];

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children);
};

export default AppProviders;

// const AppProviders = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div>
//       <div>
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default AppProviders;
