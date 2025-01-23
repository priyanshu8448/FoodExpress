import {Link} from 'react-router';
const Footer = () => {
  return (<div id="Footer">
    <Link className='links' to="/about">About Us</Link>
    <Link className='links' to="/contact">Contact Us</Link>
    <Link className='links' to="/feedback">Feedback</Link>
  </div>)
};
export default Footer;
