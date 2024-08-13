// src/mockMenuData.js

const mockMenuData = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  {
    name: 'Services',
    link: '#services',
    dropdown: [
      { name: 'Web Development', link: '#web' },
      { name: 'Design', link: '#design' },
      { name: 'Marketing', link: '#marketing' },
    ],
  },
  { name: 'Contact', link: '#contact' },
];

export default mockMenuData;
