import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc1.png";
import doc4 from "./doc2.png";
import doc5 from "./doc1.png";
import doc6 from "./doc2.png";
import doc7 from "./doc1.png";
import doc8 from "./doc2.png";
import doc9 from "./doc1.png";
import doc10 from "./doc2.png";
import doc11 from "./doc1.png";
import doc12 from "./doc2.png";

import Engineering from "./Engineering.png";
import Medical from "./Management.png";
import Management from "./Management.png";
import Arts_Humanities from "./Arts_Humanities.png";
import Agriculture from "./Agriculture.png";
import Law from "./Law.png";
import Pharmacy from "./Pharmacy.png";
import Allied_Health_Sciences from "./Allied_Health_Sciences.png";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "Engineering",
    image: Engineering,
  },
  {
    speciality: "Management",
    image: Management,
  },
  {
    speciality: "Medical",
    image: Medical,
  },
  {
    speciality: "Arts & Humanities",
    image: Arts_Humanities,
  },
  {
    speciality: "Agriculture",
    image: Agriculture,
  },
  {
    speciality: "Law",
    image: Law,
  },
  {
    speciality: "Pharmacy",
    image: Pharmacy,
  },
  {
    speciality: "Allied Health Sciences",
    image: Allied_Health_Sciences,
  },
];

export const Collages = [
  {
    _id: "doc1",
    name: "Harvard University",
    image: doc1,
    speciality: "Engineering",
    experience:"1 Year",
    degree: "MBBS",
    field1: "ECE",
    field2: "CSE",
    field3: "IT",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    field6: "Aeronautical Engineering",
    field7: "Law",
    field8: "Art & Science",
    fees: 50,
    about:
    "we specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!.",
    highlights: [
      {
        icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
        title: "Acadamic",
        description: "4.5",
      },
      {
        icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
        title: "Facilities",
        description: "4.5",
      },
      {
        icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
        title: "Campus Life",
        description: "4.5",
      },
      {
        icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
        title: "Culture",
        description: "4.5",
      },
      {
        icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
        title: "Environment",
        description: "4.5",
      },
    ],
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "Jeppiar Engineering Collage",
    image: doc2,
    speciality: "Management",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    field6: "Mechanical Engineering",
    field7: "Mechanical Engineering",
    field8: "Mechanical Engineering",
    experience: "3 Years",
    about:
      "we specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!.",
    fees: 60,
    highlights: [
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Acadamic",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Facilities",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Campus Life",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Culture",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Environment",
          description: "4.5",
        },
      ],
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc3",
    name: "St.Joseph Engineering Collage",
    image: doc3,
    speciality: "Medical",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    field6: "Mechanical Engineering",
    field7: "Mechanical Engineering",
    field8: "Mechanical Engineering",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "we specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Acadamic",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Facilities",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Campus Life",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Culture",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Environment",
          description: "4.5",
        },
      ],
  },
  {
    _id: "doc4",
    name: "SathyaBhama University",
    image: doc4,
    speciality: "Arts & Humanities",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    field6: "Mechanical Engineering",
    field7: "Mechanical Engineering",
    field8: "Mechanical Engineering",
    experience: "2 Years",
    about:
      "we specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Acadamic",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Facilities",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Campus Life",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Culture",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Environment",
          description: "4.5",
        },
      ],
  },
  {
    _id: "doc5",
    name: "Panimalar Engineering Collage",
    image: doc5,
    speciality: "Agriculture",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    field6: "Mechanical Engineering",
    field7: "Mechanical Engineering",
    field8: "Mechanical Engineering",
    experience: "4 Years",
    about:
      "we specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Acadamic",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Facilities",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Campus Life",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Culture",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Environment",
          description: "4.5",
        },
      ],
  },
  {
    _id: "doc6",
    name: "Rajalakshmi Engineering Collage",
    image: doc6,
    speciality: "Law",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    field6: "Mechanical Engineering",
    field7: "Mechanical Engineering",
    field8: "Mechanical Engineering",
    experience: "4 Years",
    about:
      "we specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Acadamic",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Facilities",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Campus Life",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Culture",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Environment",
          description: "4.5",
        },
      ],
  },
  {
    _id: "doc7",
    name: "Saveetha Engineering Collage",
    image: doc7,
    speciality: "Pharmacy",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    field6: "Mechanical Engineering",
    field7: "Mechanical Engineering",
    field8: "Mechanical Engineering",
    experience: "4 Years",
    about:
      "we specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Acadamic",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Facilities",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Campus Life",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Culture",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Environment",
          description: "4.5",
        },
      ],
  },
  {
    _id: "doc8",
    name: "SRM University",
    image: doc8,
    speciality: "Allied Health Sciences",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    field6: "Mechanical Engineering",
    field7: "Mechanical Engineering",
    field8: "Mechanical Engineering",
    experience: "3 Years",
    about:
      "we specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Acadamic",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Facilities",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Campus Life",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Culture",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Environment",
          description: "4.5",
        },
      ],
  },
  {
    _id: "doc9",
    name: "VelTech University",
    image: doc9,
    speciality: "Engineering",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    field6: "Mechanical Engineering",
    field7: "Mechanical Engineering",
    field8: "Mechanical Engineering",
    experience: "1 Years",
    about:
      "we specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Acadamic",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Facilities",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Campus Life",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Culture",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Environment",
          description: "4.5",
        },
      ],
  },
  {
    _id: "doc10",
    name: "SNS University",
    image: doc10,
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    field6: "Mechanical Engineering",
    field7: "Mechanical Engineering",
    field8: "Mechanical Engineering",
    speciality: "Management",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "we specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Acadamic",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Facilities",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Campus Life",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Culture",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Environment",
          description: "4.5",
        },
      ],
  },
  {
    _id: "doc11",
    name: "StanFord University",
    image: doc11,
    speciality: "Medical",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    field6: "Mechanical Engineering",
    field7: "Mechanical Engineering",
    field8: "Mechanical Engineering",
    experience: "4 Years",
    about:
      "we specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Acadamic",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Facilities",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Campus Life",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Culture",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Environment",
          description: "4.5",
        },
      ],
  },
  {
    _id: "doc12",
    name: "Kingdom University",
    image: doc12,
    speciality: "Arts & Humanities",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    field6: "Mechanical Engineering",
    field7: "Mechanical Engineering",
    field8: "Mechanical Engineering",
    experience: "4 Years",
    about:
      "we specialize in helping students navigate the college admission process. Our experienced consultants provide personalized guidance to secure placements in various Collages, ensuring you find the right fit for your academic goals. Let us simplify your journey and help you achieve a brighter future!.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Acadamic",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Facilities",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Campus Life",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Culture",
          description: "4.5",
        },
        {
          icon: "https://static.vecteezy.com/system/resources/previews/006/899/230/non_2x/mystery-random-loot-box-from-game-icon-vector.jpg",
          title: "Environment",
          description: "4.5",
        },
      ],
  },
];
