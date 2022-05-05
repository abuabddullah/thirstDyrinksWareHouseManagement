import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageTitle = ({title}) => {
    return (
        <Helmet>
          <title> {title} - Thisty Drinks</title>
        </Helmet>
    );
};

export default PageTitle;