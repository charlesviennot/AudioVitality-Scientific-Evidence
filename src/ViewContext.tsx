import { createContext, useContext } from 'react';

export const ViewContext = createContext<'web' | 'pdf'>('web');

export const useViewMode = () => useContext(ViewContext);
