// src/mockMenuData.js

import {
  ABOUT_US_ROUTE,
  CONTACTS_ROUTE,
  FEATURES_ROUTE,
  PARTNER,
  RESOURCE,
  RESOURCE_BLOGS,
  RESOURCE_CAREER,
  RESOURCE_CASE_STUDIES,
  RESOURCE_FAQs,
  SERVICES_ROUTE,
  SUPPORT,
  TESTIMONIALS_ROUTE,
  TRACK_ORDER_ROUTE,
} from "../../../utils/constants";

const mockMenuData = [
  {
    name: "Our Services",
    link: "#services",
    route: SERVICES_ROUTE,
    dropdown: [
      {
        name: "Surface Transport",
        link: `${SERVICES_ROUTE}/surface-transport`,
      },
      { name: "Express Delivery", link: `${SERVICES_ROUTE}/express-delivery` },
      {
        name: "Project Transport",
        link: `${SERVICES_ROUTE}/project-transport`,
      },
    ],
  },
  // { name: 'Home', link: '#home', route: "/" },
  { name: "About Us", link: "#about", route: ABOUT_US_ROUTE },
  {
    name: "Resource",
    route: RESOURCE,
    link: "#features",
    dropdown: [
      { name: "Case Studies", link: RESOURCE_CASE_STUDIES },
      { name: "Blogs", link: RESOURCE_BLOGS },
      { name: "FAQs", link: RESOURCE_FAQs },
      // { name: "Career", link: RESOURCE_CAREER },
    ],
  },
  // { name: "Track Order", like: "#trackorder", route: TRACK_ORDER_ROUTE},
  // { name: "Account", link: "#testimonials", route: TESTIMONIALS_ROUTE},
  // { name: 'Contact US', link: '#contact', route: CONTACTS_ROUTE },
  // { name: "Support", link: "#support", route: SUPPORT },
  { name: "Partner with us", link: "#partner", route: PARTNER },
  //  { name: "Track Your Order", like: "#trackorder", route: TRACK_ORDER_ROUTE},
];

export default mockMenuData;
