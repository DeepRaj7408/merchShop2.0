// items.ts
const img1_1 = require("../assets/images/1.1.jpg");
const img1_2 = require("../assets/images/1.2.jpg");
const img1_3 = require("../assets/images/1.3.jpg");
const img2_1 = require("../assets/images/2.1.jpg");
const img2_2 = require("../assets/images/2.2.jpg");
const img2_3 = require("../assets/images/2.3.jpg");
const img3_1 = require("../assets/images/3.1.jpg");
const img3_2 = require("../assets/images/3.2.jpg");
const img3_3 = require("../assets/images/3.3.jpg");
const img4_1 = require("../assets/images/4.1.jpg");
const img4_2 = require("../assets/images/4.2.jpg");
const img4_3 = require("../assets/images/4.3.jpg");
const img5_1 = require("../assets/images/5.1.jpg");
const img5_2 = require("../assets/images/5.2.jpg");
const img5_3 = require("../assets/images/5.3.jpg");
const img6_1 = require("../assets/images/6.1.jpg");
const img6_2 = require("../assets/images/6.2.jpg");
const img6_3 = require("../assets/images/6.3.jpg");
const img7_1 = require("../assets/images/7.1.jpg");
const img7_2 = require("../assets/images/7.2.jpg");
const img7_3 = require("../assets/images/7.3.jpg");
const img8_1 = require("../assets/images/8.1.jpg");
const img8_2 = require("../assets/images/8.2.jpg");
const img8_3 = require("../assets/images/8.3.jpg");
const img9_1 = require("../assets/images/9.1.jpg");
const img9_2 = require("../assets/images/9.2.jpg");
const img9_3 = require("../assets/images/9.3.jpg");
const img10_1 = require("../assets/images/10.1.jpg");
const img10_2 = require("../assets/images/10.2.jpg");
const img10_3 = require("../assets/images/10.3.jpg");
const img11_1 = require("../assets/images/11.1.jpg");
const img11_2 = require("../assets/images/11.2.jpg");
const img11_3 = require("../assets/images/11.3.jpg");
const img12_1 = require("../assets/images/12.1.jpg");
const img12_2 = require("../assets/images/12.2.jpg");
const img12_3 = require("../assets/images/12.3.jpg");
const img13_1 = require("../assets/images/13.1.jpg");
const img13_2 = require("../assets/images/13.2.jpg");
const img13_3 = require("../assets/images/13.3.jpg");
const img14_1 = require("../assets/images/14.1.jpg");
const img14_2 = require("../assets/images/14.2.jpg");
const img14_3 = require("../assets/images/14.3.jpg");
const img15_1 = require("../assets/images/15.1.jpg");
const img15_2 = require("../assets/images/15.2.jpg");
const img15_3 = require("../assets/images/15.3.jpg");
const img16_1 = require("../assets/images/16.1.jpg");
const img16_2 = require("../assets/images/16.2.jpg");
const img16_3 = require("../assets/images/16.3.jpg");

export interface Product {
  id: number;
  name: string;
  photo1: number;
  photo2: number;
  photo3: number;
  price: number;
  tags: string[];
}

const itemsList: Product[] = [
  {
    id: 1,
    name: "Nirman Hoodie",
    photo1: img1_1,
    photo2: img1_2,
    photo3: img1_3,
    price: 599,
    tags: ["nirmaan", "hoodie"],
  },
  {
    id: 2,
    name: "Postman Hoodie",
    photo1: img2_1,
    photo2: img2_2,
    photo3: img2_3,
    price: 699,
    tags: ["postman", "hoodie"],
  },
  {
    id: 3,
    name: "NSS Hoodie",
    photo1: img3_1,
    photo2: img3_2,
    photo3: img3_3,
    price: 599,
    tags: ["nss", "hoodie"],
  },
  {
    id: 4,
    name: "CRAC Hoodie",
    photo1: img4_1,
    photo2: img4_2,
    photo3: img4_3,
    price: 699,
    tags: ["crac", "hoodie"],
  },
  {
    id: 5,
    name: "DVM Hoodie",
    photo1: img5_1,
    photo2: img5_2,
    photo3: img5_3,
    price: 799,
    tags: ["dvm", "hoodie"],
  },
  {
    id: 6,
    name: "DVM Tshirt",
    photo1: img6_1,
    photo2: img6_2,
    photo3: img6_3,
    price: 259,
    tags: ["dvm", "Tshirt"],
  },
  {
    id: 7,
    name: "CodingClub Tshirt",
    photo1: img7_1,
    photo2: img7_2,
    photo3: img7_3,
    price: 299,
    tags: ["codingclub", "tshirt"],
  },
  {
    id: 8,
    name: "SUTT Tshirt",
    photo1: img8_1,
    photo2: img8_2,
    photo3: img8_3,
    price: 399,
    tags: ["sutt", "tshirt"],
  },
  {
    id: 9,
    name: "Girls Oversized Tshirt (DVM)",
    photo1: img9_1,
    photo2: img9_2,
    photo3: img9_3,
    price: 299,
    tags: ["dvm", "tshirt"],
  },
  {
    id: 10,
    name: "Girls Tshirt (Pack of 2) (SUTT)",
    photo1: img10_1,
    photo2: img10_2,
    photo3: img10_3,
    price: 499,
    tags: ["sutt", "gadget"],
  },
  {
    id: 11,
    name: "DVM Bottle",
    photo1: img11_1,
    photo2: img11_2,
    photo3: img11_3,
    price: 259,
    tags: ["dvm", "bottle"],
  },
  {
    id: 12,
    name: "Postmat Bottle",
    photo1: img12_1,
    photo2: img12_2,
    photo3: img12_3,
    price: 799,
    tags: ["postman", "bottle"],
  },
  {
    id: 13,
    name: "Coding Club Cap",
    photo1: img13_1,
    photo2: img13_2,
    photo3: img13_3,
    price: 149,
    tags: ["coding club", "cap"],
  },
  {
    id: 14,
    name: "DVM Cap",
    photo1: img14_1,
    photo2: img14_2,
    photo3: img14_3,
    price: 249,
    tags: ["dvm", "cap"],
  },
  {
    id: 15,
    name: "Photography Club Keychain",
    photo1: img15_1,
    photo2: img15_2,
    photo3: img15_3,
    price: 99,
    tags: ["photog", "keychain"],
  },
  {
    id: 16,
    name: "Coding Club Keychain",
    photo1: img16_1,
    photo2: img16_2,
    photo3: img16_3,
    price: 69,
    tags: ["coding club", "keychain"],
  },
];

export default itemsList;