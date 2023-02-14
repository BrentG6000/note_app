import moment from 'moment';
import coffeePic from '../images/coffee_cup.jpg';
import '../css/header.scss';

const Header = () => {
  const date = moment().format('dddd, MMMM D, YYYY').toUpperCase(); 

  return (
    <header>
      <p>{date}</p>
      <img src={coffeePic} alt='coffee cup' />
    </header>
  );
};

export default Header;