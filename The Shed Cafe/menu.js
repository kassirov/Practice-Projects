const menu = [
  {
    id: 1,
    title: "Maple Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./menu-fotos/pancakes.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 2,
    title: "Double Double",
    category: "lunch",
    price: 13.99,
    img: "./menu-fotos/double-burger.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 3,
    title: "Classic Milkshake",
    category: "shakes",
    price: 6.99,
    img: "./menu-fotos/strawberry-milkshake.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 4,
    title: "Humble Eggs",
    category: "breakfast",
    price: 20.99,
    img: "./menu-fotos/humble-eggs.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 5,
    title: "Egg Burger",
    category: "lunch",
    price: 22.99,
    img: "./menu-fotos/egg-burger.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 6,
    title: "Special Panini",
    category: "lunch",
    price: 18.99,
    img: "./menu-fotos/panini.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 7,
    title: "Texas Eggs",
    category: "breakfast",
    price: 8.99,
    img: "./menu-fotos/bacon-egg.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 12.99,
    img: "./menu-fotos/american-classic.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 9,
    title: "Mums Sandwich",
    category: "shakes",
    price: 16.99,
    img: "./menu-fotos/sandwich.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
  {
    id: 10,
    title: "Humble Steak",
    category: "dinner",
    price: 39.99,
    img: "./menu-fotos/steak.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium cumque error nemo cupiditate iusto earum recusandae repudiandae accusamus animi!",
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

//Load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

//Filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
        <img
          src=${item.img}
          class="photo"
          alt=${item.title}
        />
        <div class="item-info">
          <header class="header">
            <h4 class="item-title">${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit praesentium cumque error nemo cupiditate iusto earum
            recusandae repudiandae accusamus animi!
          </p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
