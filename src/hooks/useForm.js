import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {

  // const [formState, setFormState] = useState({
  //   username: '',
  //   email: '',
  //   password: ''
  // });

  const [formState, setFormState] = useState( initialForm );

  // const { username, email, password } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [ name ]: value // Propiedades computadas
    });
  }

  const onResetForm = () => {
    setFormState( initialForm );
  }

  return {
    formState,
    onInputChange,
    onResetForm,
    ...formState, // Exponer los campos del formulario
  }
}
