// Sidebar Imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare
} from "@iconscout/react-unicons";

import img1 from '../imgs/avatar-3.jpg'
import img2 from '../imgs/image-avatar.jpg'
import img3 from '../imgs/img3.png'


// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Projects',
  },
  {
    icon: UilChart,
    heading: 'Vendors'
  },
];
// Analytics Cards Data
export const cardsData = [
    {
      title: "Revenue",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Total Project Revenue ",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Projects Completed",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 50,
      value: "13,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Profit",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Ongoing Projects",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 50,
      value: "12,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];

  // Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Jonna Young",
    noti: "has made a quote request on English-Swedish Translation.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Robert Dennis",
    noti: "has delivered translation and review task ID10000456.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "XYZ PLC",
    noti: "has ordered New English to Amharic Localization request of 100000 words.",
    time: "2 hours ago",
  },
];
