import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <div className='home-container'>
      <div className="overlay">
          <div className='home'>
            <h1><i>Fake Furniture</i></h1>
            <h2>Transform your space, elevate your style.</h2>
            <Link className="link" to="/products">Shop now</Link>
            <div className='featured'>
                <div className='out'>1</div>
                <div className='mid'>2</div>
                <div className='center'>3</div>
                <div className='mid'>4</div>
                <div className='out'>5</div>
            </div>
          </div>
      </div>
    </div>
  );
}
