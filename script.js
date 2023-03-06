let products = [
    {
        name: "product 1",
        url: "media\\200w.gif",
        id: 1
    },
    {
        name: "product 2",
        url: "media\\danny_devito_eating.gif",
        id: 2
    },
    {
        name: "product 3",
        url: "media\\danny-de-vito-no.gif",
        id: 3
    },
    {
        name: "product 4",
        url: "media\\the-moves.gif",
        id: 4
    },
];

function getProducts(){
    let divInfo = document.querySelector("#products");
    let inner = "";
    for(let i = 0; i < products.length ; i++){
        let img = "<img title='Danny DeVito' src='" + products[i].url + "'>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}