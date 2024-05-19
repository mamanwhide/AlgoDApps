export interface Product {
  display: string;
  price: number;
  photo: string;
}

interface Products {
  [key: string]: Product[];
}

const products: Products = {
  "hot-drinks": [
    {
      display: "Americano",
      photo: "https://ik.imagekit.io/nurman/AlgoDapps/menu/americano.jpg?updatedAt=1714569117996",
      price: 2.99,
    },
    
  ],
   "cold-drinks": [
    {
      display: "Matcha Latte",
      photo: "https://ik.imagekit.io/nurman/AlgoDapps/menu/macha-latte.jpg?updatedAt=1714569118067",
      price: 1.99,
    },
    {
      display: "Palm Sugar",
      photo: "https://ik.imagekit.io/nurman/AlgoDapps/menu/palm-sugar.jpg?updatedAt=1714569117990",
      price: 1.99,
    },
    {
      display: "Red Velvet",
      photo: "https://ik.imagekit.io/nurman/AlgoDapps/menu/RedVelvet.jpg?updatedAt=1714569118062",
      price: 1.99,
    },
    {
      display: "Coffeee Milk",
      photo: "https://ik.imagekit.io/nurman/AlgoDapps/menu/coffe-milk.jpg?updatedAt=1714569117970",
      price: 0.99,
    },
    {
      display: "Taro",
      photo: "https://ik.imagekit.io/nurman/AlgoDapps/menu/taro.jpg?updatedAt=1714569118102",
      price: 1.99,
    },
    {
      display: "Cappuchino",
      photo: "https://ik.imagekit.io/nurman/AlgoDapps/menu/cappuchino.jpg?updatedAt=1714569118123",
      price: 2.99,
    },
    {
      display: "Chocolate",
      photo: "https://ik.imagekit.io/nurman/AlgoDapps/menu/cho.jpg?updatedAt=1714569117980",
      price: 2.99,
    },
  ],
  "snacks": [
    {
      display: "Coming Soon",
      photo: "https://dynamic.brandcrowd.com/template/preview/design/9a693033-1d1b-4665-850b-6d3c5bb16eae?v=4&designTemplateVersion=1&size=design-preview-standalone-1x",
      price: 2.99,
    },
    
  ],
};

export default products;
