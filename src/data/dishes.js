import customDish from "../assets/dishes/custom.png";
import boloneze from "../assets/dishes/boloneze.png";
import nioki from "../assets/dishes/nioki.png";
import rigatoniPesto from "../assets/dishes/rigatoni_pesto.png";
import carbonara from "../assets/dishes/karbonara.png";
import seaFood from "../assets/dishes/zgvis_produqtebis.png";
import alPomodoro from "../assets/dishes/al_pomidoro.png";
import mushroomTruffle from "../assets/dishes/sokos_pasta.png";
import blueCheese from "../assets/dishes/lurji_yvelis_pasta.png";
import niokiPesto from "../assets/dishes/niokis_pesto.png";
import cacioPepe from "../assets/dishes/kachio_pepe.png";
import pastaIngredients from "./additional-ingrediets";

const dishes = [
  {
    name: "shenipasta",
    productId: "",
    price: null,
    image: customDish,
  },
  {
    productId: "c61419c7-686a-473c-a162-ac85ee7f6f9d",
    name: "boloneze",
    price: 21.05,
    image: boloneze,
    extras: [
      {
        name: pastaIngredients.olive.name,
        productId: pastaIngredients.olive.productId,
        price: pastaIngredients.olive.price,
        image: pastaIngredients.olive.image,
      },
      {
        name: pastaIngredients.nagebi.name,
        productId: pastaIngredients.nagebi.productId,
        price: pastaIngredients.nagebi.price,
        image: pastaIngredients.nagebi.image,
      },
      {
        name: pastaIngredients.capers.name,
        productId: pastaIngredients.capers.productId,
        price: pastaIngredients.capers.price,
        image: pastaIngredients.capers.image,
      },
      {
        name: pastaIngredients.driedTomato.name,
        productId: pastaIngredients.driedTomato.productId,
        price: pastaIngredients.driedTomato.price,
        image: pastaIngredients.driedTomato.image,
      },
      {
        name: pastaIngredients.parmesan.name,
        productId: pastaIngredients.parmesan.productId,
        price: pastaIngredients.parmesan.price,
        image: pastaIngredients.parmesan.image,
      },
    ],
  },
  {
    productId: "ca6bcca4-9ee8-444c-8646-880ac13e3edf",
    name: "nioki",
    price: 20.7,
    image: nioki,
  },
  {
    productId: "9a681600-b84f-4bbc-8093-7d64e53f2720",
    name: "pestos pasta strachatelit",
    price: 19.1,
    image: rigatoniPesto,
    extras: [
      {
        name: pastaIngredients.olive.name,
        productId: pastaIngredients.olive.productId,
        price: pastaIngredients.olive.price,
        image: pastaIngredients.olive.image,
      },
      {
        name: pastaIngredients.capers.name,
        productId: pastaIngredients.capers.productId,
        price: pastaIngredients.capers.price,
        image: pastaIngredients.capers.image,
      },
      {
        name: pastaIngredients.driedTomato.name,
        productId: pastaIngredients.driedTomato.productId,
        price: pastaIngredients.driedTomato.price,
        image: pastaIngredients.driedTomato.image,
      },
      {
        name: pastaIngredients.parmaHam.name,
        productId: pastaIngredients.parmaHam.productId,
        price: pastaIngredients.parmaHam.price,
        image: pastaIngredients.parmaHam.image,
      },
      {
        name: pastaIngredients.stracciatella.name,
        productId: pastaIngredients.stracciatella.productId,
        price: pastaIngredients.stracciatella.price,
        image: pastaIngredients.stracciatella.image,
      },
      {
        name: pastaIngredients.parmesan.name,
        productId: pastaIngredients.parmesan.productId,
        price: pastaIngredients.parmesan.price,
        image: pastaIngredients.parmesan.image,
      },
      {
        name: pastaIngredients.roastedCherry.name,
        productId: pastaIngredients.roastedCherry.productId,
        price: pastaIngredients.roastedCherry.price,
        image: pastaIngredients.roastedCherry.image,
      },
    ],
  },
  {
    productId: "0b2a467b-25dd-4002-a6a2-14e66c5d1b88",
    name: "karbonara",
    img: "karbonara",
    price: 21.5,
    image: carbonara,
    extras: [
      {
        name: pastaIngredients.driedTomato.name,
        productId: pastaIngredients.driedTomato.productId,
        price: pastaIngredients.driedTomato.price,
        image: pastaIngredients.driedTomato.image,
      },
      {
        name: pastaIngredients.parmesan.name,
        productId: pastaIngredients.parmesan.productId,
        price: pastaIngredients.parmesan.price,
        image: pastaIngredients.parmesan.image,
      },
      {
        name: pastaIngredients.basil.name,
        productId: pastaIngredients.basil.productId,
        price: pastaIngredients.basil.price,
        image: pastaIngredients.basil.image,
      },
      {
        name: pastaIngredients.bacon.name,
        productId: pastaIngredients.bacon.productId,
        price: pastaIngredients.bacon.price,
        image: pastaIngredients.bacon.image,
      },
      {
        name: pastaIngredients.pecorino.name,
        productId: pastaIngredients.pecorino.productId,
        price: pastaIngredients.pecorino.price,
        image: pastaIngredients.pecorino.image,
      },
      {
        name: pastaIngredients.kimchi.name,
        productId: pastaIngredients.kimchi.productId,
        price: pastaIngredients.kimchi.price,
        image: pastaIngredients.kimchi.image,
      },
    ],
  },

  // {
  //   productId: "",
  //   name: "karbonara kimchis sousit",
  //   price: 20.90,
  //   image: karbonara_kimchis_sousit,
  // },

  {
    productId: "b36a7f74-c08c-492a-8e59-db2eb960085a",
    name: "zgvis pasta",
    price: 22.3,
    image: seaFood,
    extras: [
      {
        name: pastaIngredients.olive.name,
        productId: pastaIngredients.olive.productId,
        price: pastaIngredients.olive.price,
        image: pastaIngredients.olive.image,
      },
      {
        name: pastaIngredients.capers.name,
        productId: pastaIngredients.capers.productId,
        price: pastaIngredients.capers.price,
        image: pastaIngredients.capers.image,
      },
      {
        name: pastaIngredients.driedTomato.name,
        productId: pastaIngredients.driedTomato.productId,
        price: pastaIngredients.driedTomato.price,
        image: pastaIngredients.driedTomato.image,
      },
    ],
  },
  {
    productId: "efa6e618-5d34-4059-b820-2de9740a083d",
    name: "al pomidoro",
    price: 20.3,
    image: alPomodoro,
    extras: [
      {
        name: pastaIngredients.olive.name,
        productId: pastaIngredients.olive.productId,
        price: pastaIngredients.olive.price,
        image: pastaIngredients.olive.image,
      },
      {
        name: pastaIngredients.capers.name,
        productId: pastaIngredients.capers.productId,
        price: pastaIngredients.capers.price,
        image: pastaIngredients.capers.image,
      },
      {
        name: pastaIngredients.stracciatella.name,
        productId: pastaIngredients.stracciatella.productId,
        price: pastaIngredients.stracciatella.price,
        image: pastaIngredients.stracciatella.image,
      },
      {
        name: pastaIngredients.parmesan.name,
        productId: pastaIngredients.parmesan.productId,
        price: pastaIngredients.parmesan.price,
        image: pastaIngredients.parmesan.image,
      },
      {
        name: pastaIngredients.bacon.name,
        productId: pastaIngredients.bacon.productId,
        price: pastaIngredients.bacon.price,
        image: pastaIngredients.bacon.image,
      },
      {
        name: pastaIngredients.blueCheese.name,
        productId: pastaIngredients.blueCheese.productId,
        price: pastaIngredients.blueCheese.price,
        image: pastaIngredients.blueCheese.image,
      },
    ],
  },
  {
    productId: "08c41f98-7e16-49b3-b946-93c86127a096",
    name: "sokos pasta",
    price: 19.5,
    image: mushroomTruffle,
    extras: [
      {
        name: pastaIngredients.olive.name,
        productId: pastaIngredients.olive.productId,
        price: pastaIngredients.olive.price,
        image: pastaIngredients.olive.image,
      },
      {
        name: pastaIngredients.capers.name,
        productId: pastaIngredients.capers.productId,
        price: pastaIngredients.capers.price,
        image: pastaIngredients.capers.image,
      },

      {
        name: pastaIngredients.parmesan.name,
        productId: pastaIngredients.parmesan.productId,
        price: pastaIngredients.parmesan.price,
        image: pastaIngredients.parmesan.image,
      },
      {
        name: pastaIngredients.bacon.name,
        productId: pastaIngredients.bacon.productId,
        price: pastaIngredients.bacon.price,
        image: pastaIngredients.bacon.image,
      },
      {
        name: pastaIngredients.doubleMushroom.name,
        productId: pastaIngredients.doubleMushroom.productId,
        price: pastaIngredients.doubleMushroom.price,
        image: pastaIngredients.doubleMushroom.image,
      },
    ],
  },
  {
    productId: "a5630ec6-7d8e-4ca3-8ed2-0126f8799fe5",
    name: "blue cheese",
    price: 19.5,
    image: blueCheese,
    extras: [
      {
        name: pastaIngredients.olive.name,
        productId: pastaIngredients.olive.productId,
        price: pastaIngredients.olive.price,
        image: pastaIngredients.olive.image,
      },
      {
        name: pastaIngredients.capers.name,
        productId: pastaIngredients.capers.productId,
        price: pastaIngredients.capers.price,
        image: pastaIngredients.capers.image,
      },
      {
        name: pastaIngredients.driedTomato.name,
        productId: pastaIngredients.driedTomato.productId,
        price: pastaIngredients.driedTomato.price,
        image: pastaIngredients.driedTomato.image,
      },
      {
        name: pastaIngredients.parmesan.name,
        productId: pastaIngredients.parmesan.productId,
        price: pastaIngredients.parmesan.price,
        image: pastaIngredients.parmesan.image,
      },
      {
        name: pastaIngredients.basil.name,
        productId: pastaIngredients.basil.productId,
        price: pastaIngredients.basil.price,
        image: pastaIngredients.basil.image,
      },
      {
        name: pastaIngredients.bacon.name,
        productId: pastaIngredients.bacon.productId,
        price: pastaIngredients.bacon.price,
        image: pastaIngredients.bacon.image,
      },
      {
        name: pastaIngredients.blueCheese.name,
        productId: pastaIngredients.blueCheese.productId,
        price: pastaIngredients.blueCheese.price,
        image: pastaIngredients.blueCheese.image,
      },
    ],
  },
  {
    productId: "759fb5b4-3014-4e74-a4ee-4528d21a851a",
    name: "nioki pesto strachateli",
    price: 21.5,
    image: niokiPesto,
    extras: [
      {
        name: pastaIngredients.olive.name,
        productId: pastaIngredients.olive.productId,
        price: pastaIngredients.olive.price,
        image: pastaIngredients.olive.image,
      },
      {
        name: pastaIngredients.capers.name,
        productId: pastaIngredients.capers.productId,
        price: pastaIngredients.capers.price,
        image: pastaIngredients.capers.image,
      },
      {
        name: pastaIngredients.driedTomato.name,
        productId: pastaIngredients.driedTomato.productId,
        price: pastaIngredients.driedTomato.price,
        image: pastaIngredients.driedTomato.image,
      },
      {
        name: pastaIngredients.parmaHam.name,
        productId: pastaIngredients.parmaHam.productId,
        price: pastaIngredients.parmaHam.price,
        image: pastaIngredients.parmaHam.image,
      },
      {
        name: pastaIngredients.stracciatella.name,
        productId: pastaIngredients.stracciatella.productId,
        price: pastaIngredients.stracciatella.price,
        image: pastaIngredients.stracciatella.image,
      },
      {
        name: pastaIngredients.parmesan.name,
        productId: pastaIngredients.parmesan.productId,
        price: pastaIngredients.parmesan.price,
        image: pastaIngredients.parmesan.image,
      },
      {
        name: pastaIngredients.roastedCherry.name,
        productId: pastaIngredients.roastedCherry.productId,
        price: pastaIngredients.roastedCherry.price,
        image: pastaIngredients.roastedCherry.image,
      },
    ],
  },
  {
    productId: "9e42ed40-be6e-4177-8601-ed5bcef7f909",
    name: "kachio",
    price: 16.7,
    image: cacioPepe,
    extras: [
      {
        name: pastaIngredients.olive.name,
        productId: pastaIngredients.olive.productId,
        price: pastaIngredients.olive.price,
        image: pastaIngredients.olive.image,
      },
      {
        name: pastaIngredients.capers.name,
        productId: pastaIngredients.capers.productId,
        price: pastaIngredients.capers.price,
        image: pastaIngredients.capers.image,
      },
      {
        name: pastaIngredients.basil.name,
        productId: pastaIngredients.basil.productId,
        price: pastaIngredients.basil.price,
        image: pastaIngredients.basil.image,
      },
    ],
  },
];

export default dishes;
