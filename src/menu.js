const menuData = {
  Appetizers: [
    {title: 'Dipping Bread',
    description: 'Warmed french bread with an olive oil and balsamic vinegar dip.',
    price: '$5'},
    {title: 'Soup of the day',
    description: 'Chef\'s choice. Ask your server for more information.',
    price: '$5'}
  ],
  Dinners: [
    {title: 'Chicken Parmesean',
    description: 'Juicy breaded chicken topped with grandma\'s home made sauce and gooey mozzella.',
    price: '$15'},
    {title: 'Chicken Marsala',
    description: 'Chicken with garlic and mushrooms and a wine sauce made from local vinyards. Served with creamy mashed potatoes and roasted asparagus.',
    price: '$16.5'},
  ],
  Desserts: [
    {title: 'Tiramisù',
    description: 'Espresso soaked lady fingers topped with mascapone whip and cocoa powder.',
    price: '$12'},
  ],
  Drinks: [
    {title: 'Espresso',
    description: 'Made from fair trade coffee. Served to order.',
    price: '$5'},
    {title: 'Soft Drinks',
    description: 'Enjoy our selection of any conceivable fountain drink.',
    price: '$3.5'},
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