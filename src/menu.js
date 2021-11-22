export default function makeMenuPage() {
  const menu = document.createElement('div');
  menu.innerHTML = `<p>This is the menu page</p>`;
  
  const menuData = [
    {
      title: 'Chicken Parmesean',
      description: 'blah',
      price: '$10.99'
    },
    {}
  ];

  return menu;
}