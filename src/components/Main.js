import '../index.css';

const Main = ({data}) => {
  return (
    <div>
      
      <img src={data.hdurl} alt={data.title || 'bg-image'}
        className='bgImage' />

    </div>
  )
}

export default Main;
