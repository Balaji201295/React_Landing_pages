import {
  Brand_1,
  Brand_2,
  Brand_3,
  Brand_4,
  Brand_5,
  Icon_1,
  Icon_2,
  Icon_3,
  Icon_4,
  Icon_5,
  Icon_6,
  Profile,
} from "../assets";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "feedback",
    title: "Feedback",
  },
  {
    id: "contact",
    title: "contact",
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
  {
    imgUrl: Brand_5,
  },
];

export const products = [
  {
    icon: Icon_1,
    title: "Cross platform",
    content: "Elit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    icon: Icon_2,
    title: "Cloud server",
    content: "Elit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    icon: Icon_3,
    title: "Pure Javascript",
    content: "Elit esse cillum dolore eu fugiat nulla pariatur",
  },
];

export const plans = [
  {
    icon: Icon_4,
    title: "Starter Plan",
    benefits: [
      {
        point: "Store unlimited data",
      },
      {
        point: "Export to pdf, xls, csv",
      },
      {
        point: "Cloud server support",
      },
    ],
    price: 9.99,
    user: 3,
  },
  {
    icon: Icon_5,
    title: "Silver Plan",
    benefits: [
      {
        point: "Store unlimited data",
      },
      {
        point: "Export to pdf, xls, csv",
      },
      {
        point: "Cloud server support",
      },
    ],
    price: 19.99,
    user: 5,
  },
  {
    icon: Icon_6,
    title: "Diamond Plan",
    benefits: [
      {
        point: "Store unlimited data",
      },
      {
        point: "Export to pdf, xls, csv",
      },
      {
        point: "Cloud server support",
      },
    ],
    price: 29.99,
    user: 9,
  },
];

export const testimonials = [
  {
    profileImg: Profile,
    profileName: "Cameron Williamson",
    position: "CEO",
    content:
      "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
  },
  {
    profileImg: Profile,
    profileName: "Smirithi Mandhana",
    position: "HOD",
    content:
      "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
  },
  {
    profileImg: Profile,
    profileName: "Charles Gadith",
    position: "Senior Manager",
    content:
      "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
  },
  {
    profileImg: Profile,
    profileName: "Liv Morgan",
    position: "Manager",
    content:
      "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
  },
  {
    profileImg: Profile,
    profileName: "Becky Lench",
    position: "Senior Associate",
    content:
      "Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium felis massa mauris, aliquam congue.",
  },
];

export const footerLinks = [
  {
    title: "Links",
    links: [
      {
        name: "Home",
        link: "home",
      },
      {
        name: "About",
        link: "about",
      },
      {
        name: "Careers",
        link: "careers",
      },
      {
        name: "Pricing",
        link: "pricing",
      },
      {
        name: "Features",
        link: "features",
      },
      {
        name: "Blog",
        link: "blog",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Terms of Use",
        link: "#",
      },
      {
        name: "Terms of Conditions",
        link: "#",
      },
      {
        name: "Privacy Policy",
        link: "#",
      },
      {
        name: "Cookie Policy",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: FaFacebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-2",
    icon: FaInstagram,
    link: "https://www.instagram.com/",
  },

  {
    id: "social-media-3",
    icon: FaTwitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/",
  },
  {
    id: "social-media-5",
    icon: FaYoutube,
    link: "https://www.youtube.com/",
  },
];
