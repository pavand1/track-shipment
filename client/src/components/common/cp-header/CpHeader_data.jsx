// src/mockMenuData.js

import { ABOUT_US_ROUTE, CONTACTS_ROUTE, FEATURES_ROUTE, SERVICES_ROUTE, TESTIMONIALS_ROUTE, TRACK_ORDER_ROUTE } from "../../../utils/constants";

const mockMenuData = [
  { name: 'Home', link: '#home', route: "/" },
  { name: 'About', link: '#about', route: ABOUT_US_ROUTE },
  { name: "Features", route: FEATURES_ROUTE, link: "#features"},
  {
    name: 'Services',
    link: '#services',
    route: SERVICES_ROUTE,
    dropdown: [
      { name: 'Full Truck Load', link: '#web' },
      { name: 'Part Truck Load', link: '#design' },
      { name: 'Exim Movement', link: '#marketing' },
      { name: 'Project Transportation', link: '#marketing' },
      { name: 'Express Delivery', link: '#marketing' },
      { name: 'E-Commerce Delivery', link: '#marketing' },
      { name: 'Milk Run', link: '#marketing' },
    ],
  },
  { name: "Track Order", like: "#trackorder", route: TRACK_ORDER_ROUTE},
  { name: "Account", link: "#testimonials", route: TESTIMONIALS_ROUTE},
  { name: 'Contact US', link: '#contact', route: CONTACTS_ROUTE },
];

export default mockMenuData;
