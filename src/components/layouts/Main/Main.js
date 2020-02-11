import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import Header from '../../Header';
//import Footer from '../../Footer';
//import '../../../assets/stylesheets/Layouts/Main.scss'

const Main = props => {
  const { children } = props;

  // const handleSidebarOpen = () => {
  //   setOpenSidebar(true);
  // };
  //
  // const handleSidebarClose = () => {
  //   setOpenSidebar(false);
  // };

  return (
      <div className={`mainLayout`}>
        {/* {<Header />} */}
        <div className={`pageContent`} >
          {children}
        </div>
        {/* {<Footer />} */}
      </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;