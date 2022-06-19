;(() => {
  'use strict';

  const express = require('express');
  const expressLayouts = require('express-ejs-layouts');
  
  const app = express();
  const PORT = 8080;

  app.use(express.static('public'));
  app.use('/css', express.static(`${__dirname}public/css`));
  app.use('/js', express.static(`${__dirname}public/js`));
  app.use('/img', express.static(`${__dirname}public/img`));

  app.use(expressLayouts);

  app.set('layout extractScripts', true);
  app.set('layout', `${__dirname}/layouts/full-width-layout`);
  app.set('view engine', 'ejs');

  app.get('/', (req, res) => {
    res.render('home', { title: 'Simple CMS' });
  });

  app.get('/about', (req, res) => {
    res.render('about', { title: 'Simple CMS - about', layout: `${__dirname}/layouts/sidebar-layout` });
  });

  /**
   * Here's the route for image carousel and thumbnails
   * 
   * Public folder constist css folder and image-slider.css file for image slider
   * I include css file for layout: partials -> head.ejs
   * 
   * Public folder constist js folder and image-slider.js file for image slider
   * I include js file in layouts -> full-width-layout.ejs (default layout)
   * 
   * Images will come from DB and we can pass an array of them below as props
   * Also we can make a statement if it will be multiply one or single
  * */
  app.get('/image-gallery', (req, res) => {
    res.render('image-gallery', { title: 'Simple CMS - image-gallery', images: [
      '/img/evol.jpg',
      '/img/gamabuildings.jpg',
      '/img/krypto.jpg',
      '/img/serjoweb.jpg'
    ]});
  });

  app.listen(PORT, error => {
    try {
      if (!error) {
        console.info(`Server running on: http://localhost/:${PORT}`);
      } else {
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  });

})();
