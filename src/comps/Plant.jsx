import { useState } from 'react';
import { updateItem } from '../crud';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Plant = ({plant}) => {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: updateItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lista']})
    },
  });

  const [checked, setChecked] = useState(plant.active); 
  const handleChange = () => { 
    setChecked(!checked); 
    const input = {
      id: plant.id,
      title: plant.title,
      pic: plant.pic,
      active: !checked
    }
    mutation.mutate(input);
  }; 

  return(
  <li key={plant.id} className="text-lg p-3 flex flex-col justify-center items-center">
          <p className="w-32">{plant.title}</p>

          <div className={checked ? 'grayscale' : 'grayscale-0'}>
                  <img className="h-56 w-56 rounded-lg"src={plant.pic}></img>
          </div>

          <div className="mt-2">
              <input type="checkbox" value="" id="checkboxDefault" checked={checked} onChange={handleChange}/>
              <label className="inline-block pl-2 hover:cursor-pointer"> Szürkeárnyalatos </label>
        </div>
  </li>)

}

export default Plant