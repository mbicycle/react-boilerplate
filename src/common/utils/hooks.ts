import { useDebouncedFn } from 'beautiful-react-hooks';
import { useState } from 'react';

type UseFormPropsReturnType = {
  values: unknown | Record<string, unknown>,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};

export const useForm = (initialValues?: Record<string, unknown>): UseFormPropsReturnType => {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = useDebouncedFn((e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === 'true' || e.target.value === 'false') {
      setValues((v) => (
        { ...v, [e.target.name]: e.target.value === 'false' }
      ));
    } else {
      setValues((v) => (
        { ...v, [e.target.name]: e.target.value.trim() }
      ));
    }
  }, 300);

  const handleSubmit = (): typeof values => values;

  return {
    values,
    handleChange,
    handleSubmit,
  };
};
