import Plant from "./Plant";
import { fetchData } from '../crud';
import { useQuery, useQueryClient } from '@tanstack/react-query';


const Plants = () => {

    const queryClient = useQueryClient();
    const { data, status, isLoading } = useQuery({
      queryKey: ['lista'],
      queryFn: fetchData,
      refetchOnWindowFocus: true,
      staleTime: 1000,
      cacheTime: 600000,
    });
  
    if (isLoading) {
      return <div>Nincsenek megjeleníthető növények...</div>
    }
  
    return (
      <div className="rounded p-3 m-4 shadow-md bg-slate-100 text-center">
        <h1 className="text-xl mb-4">Növények</h1>

        <ul className="flex flex-row flex-wrap justify-center">
        { data.map((plant) => (
          <Plant plant={plant}/>
        ))
        }
        </ul>
        
      </div>
    )
  }

  export default Plants