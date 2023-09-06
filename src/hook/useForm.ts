import { useEffect, useRef, useState } from 'react'; 
import { IGlobalComponents } from '../Interfaces/IGlobal';

interface IUseForm<T> {
  initialState?: T;
}

export const useForm = <T>(params: IUseForm<T>) => {
  const mounted = useRef(false);
  const [getForm, setStateForm] = useState(params.initialState);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const handleForm = ({
    target: { name, value, checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (mounted.current) {
      setStateForm({ ...getForm, [name]: value } as any);
    }
  };

  const handleFormCheck = ({ target: { name, checked } }: React.ChangeEvent<HTMLInputElement>) => {
    if (mounted.current) {
      setStateForm({ ...getForm, [name]: checked } as any);
    }
  };

  const handleSubmitForm = (
    e: React.FormEvent<HTMLFormElement>,
    { onSubmit }: IGlobalComponents
  ) => {
    e.preventDefault();
    if (mounted.current) {
      if (onSubmit) {
        onSubmit();
      }
    }
  };

  return { getForm, handleForm, handleFormCheck, handleSubmitForm };
};
