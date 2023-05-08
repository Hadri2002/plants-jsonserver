import { useState, useEffect } from 'react';
import Plants from './comps/Plants';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  
  const [data, setData] = useState([]);


  return (
    <>
    <QueryClientProvider client={queryClient}>
        <h1 className='text-2xl text-center mt-4'>Frontend keretrendszerek</h1>
        <h2 className='text-xl text-center mt-4'>Horváth Adrienn - ADC1BV</h2>

        <Plants />
    </QueryClientProvider>
        
    </>
  )
}

export default App
