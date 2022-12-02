import React from 'react';
import { SubHeading} from '../../components'
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
    <SubHeading title="Como las hamburguesas deben de ser" />
      <h1 className='app__header-h1'>Las Hamburguesas mas ricas de la ciudad</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}} >Lorem ipsum dolor sit amet consectetur. Vitae diam eget velit vulputate turpis a pharetra mauris sapien. Ut aliquet ut parturient luctus diam aliquet sed. Nulla ornare fermentum in et fringilla. Tincidunt consectetur hac fames dui.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
   
   </div>
);

export default Header;
