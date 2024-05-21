import {
  Brand_1,
  Brand_2,
  Brand_3,
  Brand_4,
  Product_1,
  Product_10,
  Product_11,
  Product_12,
  Product_13,
  Product_14,
  Product_15,
  Product_2,
  Product_3,
  Product_4,
  Product_5,
  Product_6,
  Product_7,
  Product_8,
  Product_9,
} from "../assets";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";

export const navItems = [
  {
    title: "Home",
    link: "home",
  },
  {
    title: "About",
    link: "about",
  },
  {
    title: "Product",
    link: "#",
    submenu: [
      {
        title: "Product Items",
        link: "product-items",
      },
      {
        title: "About Product",
        link: "about-product",
      },
      {
        title: "New Product",
        link: "new-product",
      },
    ],
  },
  {
    title: "Shop",
    link: "shop",
  },
  {
    title: "Contact Us",
    link: "contact-us",
  },
];

export const brands = [
  {
    imgUrl: Brand_1,
  },
  {
    imgUrl: Brand_2,
  },
  {
    imgUrl: Brand_3,
  },
  {
    imgUrl: Brand_4,
  },
];

export const products = [
  {
    filter: "recent arrival",
    imgUrl: Product_1,
    productName: "Boss Speaker",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 49.99,
    retailPrice: 59.99,
    ratings: 4,
    offerPercentage: 25,
  },
  {
    filter: "best seller",
    imgUrl: Product_2,
    productName: "Sony Headphone",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 24.99,
    retailPrice: 29.99,
    ratings: 3,
    offerPercentage: 15,
  },
  {
    filter: "special offers",
    imgUrl: Product_3,
    productName: "DJI Drone",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 129.99,
    retailPrice: 159.99,
    ratings: 5,
    offerPercentage: 20,
  },
  {
    filter: "featured in",
    imgUrl: Product_4,
    productName: "DSLR Camera",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 449.99,
    retailPrice: 499.99,
    ratings: 5,
    offerPercentage: 10,
  },
  {
    filter: "recent arrival",
    imgUrl: Product_5,
    productName: "Apple Mouse",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 19.99,
    retailPrice: 21.99,
    ratings: 4,
    offerPercentage: 10,
  },
  {
    filter: "special offers",
    imgUrl: Product_6,
    productName: "IOS Keyboard",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 20.99,
    retailPrice: 25.99,
    ratings: 3,
    offerPercentage: 25,
  },
  {
    filter: "featured in",
    imgUrl: Product_7,
    productName: "Macbook pro",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 699.99,
    retailPrice: 759.99,
    ratings: 5,
    offerPercentage: 15,
  },
  {
    filter: "special offers",
    imgUrl: Product_8,
    productName: "Portable Speaker",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 99.99,
    retailPrice: 119.99,
    ratings: 3,
    offerPercentage: 10,
  },
  {
    filter: "best seller",
    imgUrl: Product_9,
    productName: "SkullCandy Speaker",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 34.99,
    retailPrice: 40.99,
    ratings: 4,
    offerPercentage: 5,
  },
  {
    filter: "special offers",
    imgUrl: Product_10,
    productName: "DJI Drone Pro",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 499.99,
    retailPrice: 529.99,
    ratings: 4,
    offerPercentage: 20,
  },
  {
    filter: "best seller",
    imgUrl: Product_11,
    productName: "Iphone",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 624.99,
    retailPrice: 649.99,
    ratings: 4,
    offerPercentage: 10,
  },
  {
    filter: "featured in",
    imgUrl: Product_12,
    productName: "Apple Tab",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 249.99,
    retailPrice: 299.99,
    ratings: 3,
    offerPercentage: 25,
  },
  {
    filter: "recent arrival",
    imgUrl: Product_13,
    productName: "Bolt Speaker",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 49.99,
    retailPrice: 59.99,
    ratings: 4,
    offerPercentage: 25,
  },
  {
    filter: "recent arrival",
    imgUrl: Product_14,
    productName: "Macbook Pro 2",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 775.99,
    retailPrice: 799.99,
    ratings: 5,
    offerPercentage: 5,
  },

  {
    filter: "best seller",
    imgUrl: Product_2,
    productName: "Headphone",
    description:
      "The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.",
    offerPrice: 24.99,
    retailPrice: 29.99,
    ratings: 3,
    offerPercentage: 15,
  },
];

export const footerLinks = [
  {
    title: "Information",
    links: [
      {
        label: "New Collection",
        href: "new-products",
      },
      {
        label: "About Store",
        href: "about-product",
      },
      {
        label: "Contact Us",
        href: "contact-us",
      },
      {
        label: "Latest News",
        href: "latest-news",
      },
      {
        label: "Our Sitemap",
        href: "our-sitemap",
      },
      {
        label: "Orders History",
        href: "order-history",
      },
    ],
  },
  {
    title: "footer menu",
    links: [
      {
        label: "Instagram profile",
        href: "instagram-profile",
      },
      {
        label: "New Collection",
        href: "new-products",
      },
      {
        label: "Contact Us",
        href: "contact-us",
      },
      {
        label: "Latest News",
        href: "latest-news",
      },
      {
        label: "Terms & Conditions",
        href: "terms-conditions",
      },
      {
        label: "Purchase Theme",
        href: "purchase-theme",
      },
    ],
  },
  {
    title: "useful links",
    links: [
      {
        label: "Instagram profile",
        href: "instagram-profile",
      },
      {
        label: "New Collection",
        href: "new-products",
      },
      {
        label: "Contact Us",
        href: "contact-us",
      },
      {
        label: "Latest News",
        href: "latest-news",
      },
      {
        label: "Terms & Conditions",
        href: "terms-conditions",
      },
      {
        label: "Purchase Theme",
        href: "purchase-theme",
      },
    ],
  },
];

export const socialLinks = [
  {
    icon: FiFacebook,
    href: "https://www.facebook.com",
  },
  {
    icon: FiInstagram,
    href: "https://www.instagram.com",
  },
  {
    icon: FiTwitter,
    href: "https://www.x.com",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com",
  },
  {
    icon: FiYoutube,
    href: "https://www.youtube.com",
  },
];
