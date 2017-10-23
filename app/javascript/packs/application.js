/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactOnRails from 'react-on-rails';
import HomeContainer from '../bundles/locations/containers/homeContainer';
import NavBar from '../bundles/locations/components/navBar';
import StoreCard from '../bundles/locations/components/storeCard';
import StoresContainer from '../bundles/locations/containers/storesContainer';
import ShowContainer from '../bundles/locations/containers/showContainer';
import GlassesContainer from '../bundles/locations/containers/glassesContainer';

ReactOnRails.register({
  HomeContainer, NavBar, StoresContainer, StoreCard, ShowContainer, GlassesContainer
});
