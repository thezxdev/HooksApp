import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {

  const { data, hasError, isLoading } = useFetch('https://www.breakingbadapi.com/api/quotes/1');

  const { author, quote } = !!data && data[0];

  // console.log( data, hasError, isLoading );

  // if ( isLoading ) {
  //   return (
  //     <h1>Cargando...</h1>
  //   )
  // }

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        ( isLoading )
          ? (
              <div className="alert alert-info text-center">
                Loading...
              </div>
            )
          : (
              <blockquote className="blockquote text-end">
                <p className="mb-1">{ quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
              </blockquote>
          )
      }

      <button className="btn btn-primary">
        Next quote
      </button>

    </>
  )
}
