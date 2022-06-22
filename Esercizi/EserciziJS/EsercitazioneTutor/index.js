/*
    Per una nota App di food delivery, ci viene richiesto di
    implementare alcune funzionalità per la gestione del carrello.
*/


//prodotti attualmente presenti nel carrello dell'utente
const productsInCart = [{
    id: 324234,
    category: 0,
    quantity: 1,
    title: 'Margherita',
    description: "Pomodoro, mozzarella e basilico",
    ingredients: ['pomodoro', 'mozzarella', 'basilico'],
    price: 6.5
  },
  {
    id: 098394,
    category: 0,
    quantity: 2,
    title: 'Calzone Classico',
    description: "Ripieno di Pomodoro, mozzarella e prosciutto cotto",
    ingredients: ['pomodoro', 'mozzarella', 'prosciutto cotto'],
    price: 7.0
  },
  {
    id: 432432,
    category: 4,
    quantity: 1,
    title: 'Coca Cola Zero (33CL)',
    description: "",
    price: 3.0
  },
  {
    id: 564564,
    category: 0,
    quantity: 2,
    title: 'Salamino',
    description: "Pomodoro, mozzarella e salamino piccante",
    ingredients: [ 'pomodoro', 'mozzarella', 'salamino', ],
    price: 7.5
  },
  {
    id: 564564,
    category: 0,
    quantity: 1,
    title: 'Salamino',
    description: "Mozzarella, salsiccia, patate al forno",
    ingredients: ['mozzarella', 'salsiccia', 'patate al forno'],
    price: 7.5
  },
  {
    id: 333445,
    category: 4,
    quantity: 1,
    title: 'Acqua Naturale (1L)',
    description: "",
    price: 2
  },
  {
    id: 656765,
    category: 3,
    quantity: 3,
    title: 'Cheesecake Cioccolato',
    description: "Dolce a base di formaggio fresco e topping al cioccolato",
    price: 5
  },
]

//array statico di oggetti che contiene tutte le categorie presenti nell'app
const categories = [{
    id: 0,
    name: "pizze"
  },
  {
    id: 1,
    name: "panini"
  },
  {
    id: 2,
    name: "sushi"
  },
  {
    id: 3,
    name: "dessert"
  },
  {
    id: 4,
    name: "bevande"
  },
];

//FUNZIONI DA IMPLEMENTARE:

/*
    ---------------------------------------
    getTotalAmount: restituisce il prezzo finale che l'utente dovrà pagare al checkout
    ---------------------------------------
*/
const getTotalAmount = () => {
    let totalAmount = 0;
    productsInCart.forEach((product) => {
        totalAmount += product.quantity * product.price;
    })
    return totalAmount;
}


/*
    ---------------------------------------
    getCategoryCode: prende come parametro il nome di una categoria e ne restituisce l'id
    ---------------------------------------
*/

const getCategoryCode = (name) => {
   const category =  categories.find((categoria) => {
        return categoria.name == name
    })
    return category?.id;
}

/*
    ---------------------------------------
    getCategoryCount: prende come parametro il nome di una categoria e restituisce il numero di prodotti presenti per questa
    ---------------------------------------
*/
const getCategoryCount = (name) => {
    const categoryId = getCategoryCode(name);
    if (!categoryId && categoryId != 0) {
        throw new Error('Id not found');
    }
    const productArray = productsInCart.filter((product) => {
        return product.category == categoryId
    })
    const quantityInArray = productArray.reduce((total, current) => {
        return total += current.quantity
    }, 0)
    return quantityInArray;
}
/*
    ---------------------------------------
    removeFromCart: prende l'id di un prodotto e ne rimuove una unità dal carrello. Se quantity diventa 0, rimuove il prodotto dall'array
    ---------------------------------------
*/
const removeFromCart = (id) => {
    const cartId =  productsInCart.find((product) => {
        return product.id == id
    })
    let newArray = []
    if (cartId.quantity == 1) {
     newArray = productsInCart.filter(item => item !== cartId); 
    } else {
        cartId.quantity -= 1;
    }
    console.log(newArray);
    return cartId;
}

/*
    ---------------------------------------
    printCart: stampa su console tutti i prodotti divisi per categoria.

    formato richiesto:
        *** PIZZA ***
        - 1 x Margherita (Pomodoro, mozzarella e basilico) | 6.5€
        - 1 x Calzone classico (Ripieno di Pomodoro, mozzarella e prosciutto cotto) | 7€

        *** BEVANDE ***
        - 1 x Coca Cola Zero (33CL) | 3€

        *** TOTALE ***
        16.5€
    ---------------------------------------
*/

const printCart = () => {
    let pizze = [];
    let panini = [];
    let sushi = [];
    let bevande = [];
    let dolci = [];

    productsInCart.filter(product => {
      if (product.category == 0) pizze.push(product);
      if (product.category == 1) panini.push(product);
      if (product.category == 2) sushi.push(product);
      if (product.category == 4) bevande.push(product);
      if (product.category == 3) dolci.push(product);

    })

    if(pizze.length != 0) {
      console.log("*** PIZZE ***");
      pizze.forEach(product => {
        return  console.log(`- ${product.quantity} x ${product.title} (${product.description}) | $${product.price}`);
      })
      console.log("")
    }
    
    if(panini.length != 0) {
      console.log("*** PANINI ***");
      panini.forEach(product => {
        return  console.log(`- ${product.quantity} x ${product.title} (${product.description}) | $${product.price}`);
      })
      console.log("")
    }

    if(sushi.length != 0) {
      console.log("*** SUSHI ***");
      sushi.forEach(product => {
        return  console.log(`- ${product.quantity} x ${product.title} (${product.description}) | $${product.price}`);
      })
      console.log("")
    }
    
    if(bevande.length != 0) {
      console.log("*** BEVANDE ***");
      bevande.forEach(product => {
        return  console.log(`- ${product.quantity} x ${product.title} | $${product.price}`);
      })
      console.log("")
    }

    if(dolci.length != 0) {
      console.log("*** DESSERTS ***");
      dolci.forEach(product => {
        return  console.log(`- ${product.quantity} x ${product.title} (${product.description}) | $${product.price}`);
      })
      console.log("")
    }

    const totale = getTotalAmount();
      console.log("*** TOTALE ***");
      console.log(`${totale}€`);

}

/*
    ---------------------------------------
    getPizzeBianche: Restituisce tutte le pizze bianche presenti nel carrello (pizze senza pomodoro)
    ---------------------------------------

*/
const getPizzeBianche = () => {
let newPizzeArray = [];
productsInCart.forEach((product) => {
    if (product.category == 0 && product.ingredients.indexOf("pomodoro") == -1) {
     newPizzeArray.push(product);
    }
})
return newPizzeArray;
}

/*console.log(getTotalAmount());
console.log(getCategoryCode("dessert"));
console.log(getCategoryCount("pizze"));
console.log(removeFromCart(432432)); */
console.log(getPizzeBianche());
printCart();