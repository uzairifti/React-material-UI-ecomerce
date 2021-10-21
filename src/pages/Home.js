import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Announcemnet from '../components/Announcement';

const Hoem = () => {
return(
<div>
<Navbar/>
<Announcemnet/>
<Slider/>
<Categories/>
<Products/>
<Newsletter/>
<Footer/>

</div>
);
};

export default Hoem;