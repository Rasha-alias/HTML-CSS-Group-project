//skapa en funktion som returnerar ett objeck med sina parametrar(bild, namn och pris), där den ligger i en column 
function productCard(p) {
    return `
        <div class="col-sm-6 col-lg-4">
            <div class="shadow-sm shadow-hover">
                <div class="imgContainer">
                    <img class="" src="${p.imageUrl}">
                </div>
                <div class="p-2">
                    <h2 class="text-green">${p.name}</h2>
                    <span class="font-bold text-green">${p.price}:-</span>
                </div>
            </div>
        </div>
    `;
}
//en array av object där innehåller Namn,pris
let products = [{
        "name": "Donalds tuggis",
        "price": "99",
        "imageUrl": "https://quickbutik.imgix.net/11979u/products/5dc86df786708.png",
        "category": "dog"
    },
    {
        "name": "Älg tuggis",
        "price": "79",
        "imageUrl": "https://www.tinybuddy.se/assets/products/hundleksak-lg-hundleksak-1.jpg",
        "category": "dog"
    },
    {
        "name": "Pumba tuggis",
        "price": "79",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ouFdtUaG7In0572SSuNHlF0KRAUhUosF9w&usqp=CAU",
        "category": "dog"

    },
    {
        "name": "Svin tuggis",
        "price": "99",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUgeKDzQ_Q32YhzY2Vqvut8wHWbcmrzHf1A&usqp=CAU",
        "category": "dog"
    },
    {
        "name": "Poop tuggis",
        "price": "49",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDKPOPfpTASfRDJbuV7Y4T35GA7T-NMk5sdw&usqp=CAU",
        "category": "dog"
    },
    {
        "name": "Fido tuggis",
        "price": "69",
        "imageUrl": "http://cdn.shopify.com/s/files/1/0569/8935/2113/products/23.gif?v=1624564032",
        "category": "dog"
    },
    {
        "name": "Kattvippa",
        "price": "99",
        "imageUrl": "https://get.musti.media/shops/mse/resources/ftp/productpage/b9/kissan-onki-littlebigger-check-mate-tahti-az-b9.jpg",
        "category": "cat"
    },
    {
        "name": "Kattunnel",
        "price": "149",
        "imageUrl": "https://get.musti.media/shops/mse/resources/ftp/productpage/64/kissan-rapinatunneli-littlebigger-leopardi-az-64.jpg",
        "category": "cat"
    },
    {
        "name": "Recycled 3-pack Fiskar",
        "price": "40",
        "imageUrl": "https://get.musti.media/shops/mse/resources/ftp/productpage/35/littlebigger-recycled-pet-fiskar-2-pack-35.jpg",
        "category": "cat"
    },
    {
        "name": "Mus Radiostyrd",
        "price": "199",
        "imageUrl": "https://get.musti.media/shops/mse/resources/ftp/productpage/c1/littlebigger-leksaksmus-med-fjarrkontroll-c1.jpg",
        "category": "cat"
    },
    {
        "name": "3-pack Minimöss",
        "price": "40",
        "imageUrl": "https://get.musti.media/shops/mse/resources/ftp/productpage/96/littlebigger-frosty-night-minimoss-3-pack-96.jpg",
        "category": "cat"
    },
    {
        "name": "Godisboll",
        "price": "30",
        "imageUrl": "https://get.musti.media/shops/mse/resources/ftp/productpage/74/kattleksak-littlebigger-gizmocat-godisboll-74.jpg",
        "category": "cat"
    },
];

//skappa en ny funktion som i en for loop ger artikel list beroende på om det är katt eller hund sidan
function generateProduct(category) {
    for (var p of products) {
        if (category == p.category) {
            document.getElementById('articleList').innerHTML += productCard(p);
        }
    }
}