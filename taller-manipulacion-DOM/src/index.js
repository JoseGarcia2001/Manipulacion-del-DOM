const renderContent = async () => {
  const baseUrl = "https://platzi-avo.vercel.app/";

  const response = await (await fetch(`${baseUrl}api/avo`)).json();

  const formatPrice = (price) => {
    const newPrice = new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(price);

    return newPrice;
  };
  // SOLUCIÓN 1
  // const elementsToAdd = [];
  // response.data.forEach((element) => {
  //   // Creando imagen
  //   const img = document.createElement("img");
  //   img.src = `${baseUrl}${element.image}`;
  //   img.className = "image";

  //   // Creando título
  //   const h2 = document.createElement("h2");
  //   h2.textContent = element.name;
  //   h2.className = "title";

  //   // Creando precio
  //   const div = document.createElement("div");
  //   div.textContent = formatPrice(element.price);
  //   div.className = "price";

  //   // Creando contenedor
  //   const container = document.createElement("div");
  //   container.append(h2, img, div);
  //   container.className = "container";
  //   elementsToAdd.push(container);
  // });

  // SOLUCION 2
  const elements = response.data.map((element) => {
    return `
      <div class="container">
        <img class="image" src="${baseUrl}${element.image}" >
        <h2 class="title">${element.name}</h2>
        <div class="price">${formatPrice(element.price)}</div>
      </div>
    `;
  });

  const container = document.querySelector("#container");
  container.innerHTML = elements.join("");

  // container.append(...elementsToAdd);
};

renderContent();
