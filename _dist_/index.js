/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

 const baseUrl = "https://platzi-avo.vercel.app";

 const appNode = document.querySelector('#app');

 const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: "EUR",
    }).format(price)
    return newPrice
 }
 //web api
 //conectarnos al servidor
 window.fetch(`${baseUrl}/api/avo`)
 //procesar la respuesta y convertirla en JSON
 .then(respuesta => respuesta.json())
 //JSON -> DATA -> RENDERIZAR
.then((responseJson) => {
    const todosLosItems = []
    responseJson.data.forEach((item) => {
        //crear imagen
        const imagen = document.createElement('img')
        imagen.src = `${baseUrl}${item.image}`;
        imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
        //crear titulo
        const title = document.createElement('h2')
        title.textContent=item.name;
        title.className = "text-lg";
      
        //crear precio
        const price = document.createElement('div')
        price.textContent= formatPrice(item.price);
        price.className = "text-gray-600";

        // Wrap price & title
        // <div class="text-center md:text-left"><price ><title ></div>
        const priceAndTitle = document.createElement("div");
        priceAndTitle.className = "text-center md:text-left";
        priceAndTitle.appendChild(title);
        priceAndTitle.appendChild(price);

        // Wrap Img and priceAndTitle
        // <div class="md:flex bg-white rounded-lg p-6">
        const card = document.createElement("div");
        card.className = "shadow-xl md:flex bg-white rounded-lg p-6 hover:bg-green-500";
        card.appendChild(imagen);
        card.appendChild(priceAndTitle);
  

        todosLosItems.push(card)

    });

    appNode.append(...todosLosItems);
});
