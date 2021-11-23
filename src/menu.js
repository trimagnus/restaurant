const menuData = {
  Appetizers: [
    {title: 'Egg Rolls',
    description: 'Hot and fresh egg rolls.',
    price: '$5'},
    {title: 'Egg Rolls',
    description: 'Hot and fresh egg rolls.',
    price: '$5'}
  ],
  Dinners: [
    {title: 'Chicken Parmesean',
    description: 'Juicy breaded chicken topped with grandma\'s home made sauce and gooey mozzella.',
    price: '$15'},
    {title: 'Chicken Parmesean',
    description: 'Juicy breaded chicken topped with grandma\'s home made sauce and gooey mozzella.',
    price: '$15'},
  ],
  Desserts: [
    {title: 'Tiramisu',
    description: 'Espresso soaked lady fingers topped with mascapone whip and cocoa powder.',
    price: '$12'},
    {title: 'Tiramisu',
    description: 'Espresso soaked lady fingers topped with mascapone whip and cocoa powder.',
    price: '$12'},
  ],
  Drinks: [
    {title: 'Soft Drinks',
    description: 'Enjoy our selection of any conceivable fountain drink.',
    price: '$4'},
    {title: 'Soft Drinks',
    description: 'Enjoy our selection of any conceivable fountain drink.',
    price: '$4'},
  ]
};

export default function makeMenuPage() {
  const menu = document.createElement('div');

  //.menuItemCard
  //  .menuItemTitle .menuItemPrice
  //  .menuItemDescription
  let finishedMenu = '';

  for(const menuCatagory of Object.keys(menuData)){
    finishedMenu += `<h2 class="menuSectionHeader">${menuCatagory}</h2>`;

    let menuSection = '<div class="menuSection">'
    for(const item of menuData[menuCatagory]) {
      menuSection += `<div class="menuCard">
        <p class="menuItemTitle">${item.title} | ${item.price}</p>
        <p class="menuItemDescription"><em>${item.description}</em></p>
      </div>`;
    }
    menuSection += '</div>'
    finishedMenu += menuSection;
  }

  menu.innerHTML = finishedMenu;
  return menu;
}