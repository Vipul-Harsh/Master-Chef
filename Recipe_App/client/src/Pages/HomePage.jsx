import React from 'react';
import NavBar from '../Componenets/NavBar';
import BackGround from '../Componenets/BackGround';

import ShowCategory from '../Componenets/ShowCategory';
import Popular from '../Componenets/Popular';

import Caurosel from '../Componenets/Caurosel';
import Reviews from '../Componenets/Reviews';
import Footer from '../Componenets/Footer'
import SubsCribe from '../Componenets/SubsCribe';
const HomePage = () => {
  return (
	<div>
	  <NavBar />
<BackGround />
<ShowCategory />
<Popular />
<Caurosel />
<SubsCribe />
<Reviews />
<Footer />
	</div>
  );
}

export default HomePage;
