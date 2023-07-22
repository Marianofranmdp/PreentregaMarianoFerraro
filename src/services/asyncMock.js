
  const productos = [
    {
      title: "Samsung Galaxy S21",
      id: 1001,
      stock: 8,
      price: 799.99,
      description: "Smartphone Samsung Galaxy S21 con pantalla de 6.2 pulgadas y cámara de 64 MP.",
      img: "url_de_la_imagen_1.jpg",
     category: "Celulares"
    },
    {
      title: "iPhone 13",
      id: 1002,
      stock: 5,
      price: 899.99,
      description: "Último modelo de iPhone con procesador A15 Bionic y cámara dual de 12 MP.",
      img: "url_de_la_imagen_2.jpg",
     category: "Celulares"
    },
    {
      title: "Xiaomi Redmi Note 10",
      id: 1003,
      stock: 12,
      price: 299.99,
      description: "Teléfono Xiaomi Redmi Note 10 con pantalla AMOLED de 6.43 pulgadas y batería de 5000 mAh.",
      img: "url_de_la_imagen_3.jpg",
     category: "Celulares"
    },
    {
      title: "Lenovo ThinkPad E14",
      id: 1004,
      stock: 3,
      price: 799.00,
      description: "Notebook Lenovo ThinkPad E14 con procesador Intel Core i5 y pantalla de 14 pulgadas.",
      img: "url_de_la_imagen_4.jpg",
     category: "Notebooks"
    },
    {
      title: "Dell XPS 13",
      id: 1005,
      stock: 6,
      price: 1299.00,
      description: "Notebook Dell XPS 13 con pantalla InfinityEdge de 13.4 pulgadas y procesador Intel Core i7.",
      img: "url_de_la_imagen_5.jpg",
     category: "Notebooks"
    },
    {
      title: "LG OLED TV",
      id: 1006,
      stock: 10,
      price: 1499.99,
      description: "Televisor LG OLED de 55 pulgadas con resolución 4K y tecnología HDR.",
      img: "url_de_la_imagen_6.jpg",
     category: "Televisores"
    },
    {
      title: "Sony Bravia 65\"",
      id: 1007,
      stock: 2,
      price: 1999.99,
      description: "Televisor Sony Bravia de 65 pulgadas con tecnología X1 Ultimate y Android TV.",
      img: "url_de_la_imagen_7.jpg",
     category: "Televisores"
    },
    {
      title: "Samsung Galaxy Tab S7",
      id: 1008,
      stock: 7,
      price: 599.00,
      description: "Tableta Samsung Galaxy Tab S7 con pantalla de 11 pulgadas y S Pen incluido.",
      img: "url_de_la_imagen_8.jpg",
     category: "Tablets"
    },
    {
      title: "iPad Pro 11\"",
      id: 1009,
      stock: 4,
      price: 799.00,
      description: "iPad Pro de 11 pulgadas con procesador M1 y compatibilidad con Apple Pencil.",
      img: "url_de_la_imagen_9.jpg",
     category: "Tablets"
    },
    {
      title: "HP Pavilion Gaming Laptop",
      id: 1010,
      stock: 9,
      price: 999.00,
      description: "Notebook para juegos HP Pavilion Gaming con tarjeta gráfica NVIDIA GeForce GTX y pantalla de 15.6 pulgadas.",
      img: "url_de_la_imagen_10.jpg",
     category: "Notebooks"
    }
  ];
  
  function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const date = new Date().toLocaleDateString;
        resolve(productos, date);
      }, 2000);
    });
  }
  
  export function getProductData(idURL) {
    return new Promise((resolve, reject) => {
      const productRequested = productos.find(
        (item) => item.id === Number(idURL)
      );
  
      setTimeout(() => {
        resolve(productRequested);
      }, 2000);
    });
  }
  
  export function getCategoryData(categoryURL) {
    return new Promise((resolve, reject) => {
      const categoryRequested = productos.filter((item) => {
        /* .... */
        //return (item.category.toLowerCase() === categoryURL.toLowerCase())
        return item.category.toLowerCase() === categoryURL.toLowerCase();
      });
  
      setTimeout(() => {
        resolve(categoryRequested);
      }, 2000);
    });
  }
  
  export default getData;