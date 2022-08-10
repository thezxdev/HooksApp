import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {

  const { data, hasError, isLoading } = useFetch('https://www.breakingbadapi.com/api/quotes/1');

  console.log( data, hasError, isLoading );

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />


    </>
  )
}
