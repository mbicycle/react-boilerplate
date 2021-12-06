import { useState } from 'react';

export const useForm = (): { value: { [key: string]: string }, handleChange: (e: { target: HTMLInputElement }) => void, handleSubmit: () => typeof value } => {
  const [value, setValue] = useState({
    firstName: 'Alex',
    lastName: 'Matveichikov',
    email: 'alexander.matveichikov@mbicycle.com',
    skype: 'kobuqa',
  });

  const handleChange = (e: { target: HTMLInputElement }): void => setValue((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));

  const handleSubmit = (): typeof value => value;

  return { value, handleChange, handleSubmit };
};
