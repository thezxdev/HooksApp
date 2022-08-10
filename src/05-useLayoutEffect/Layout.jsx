import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {

  const { counter, increment } = useCounter( 1 );
  const { data, hasError, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
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

      {/* {
        ( isLoading )
          ? (
              <div className="alert alert-info text-center">
                Loading...
              </div>
            )
          : (
              <blockquote className="blockquote text-end">
                <p className="mb-1">{ quote }</p>
                <footer className="blockquote-footer mt-2">{ author }</footer>
              </blockquote>
          )
      } */}

      {
        ( isLoading )
        ? <LoadingQuote />
        : <Quote
            quote={ quote }
            author={ author }
          />
      }

      <button
        onClick={ () => increment() }
        disabled={ isLoading }
        className="btn btn-primary">
        Next quote
      </button>

    </>
  )
}
