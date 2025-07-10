import { useRoutes } from 'react-router-dom';
import routes_data from '@/core/routes/routes.config';

export const Router = () => useRoutes(routes_data);
