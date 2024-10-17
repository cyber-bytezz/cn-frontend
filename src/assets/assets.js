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
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";

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
    name: "Jeppiaar Engineering College",
    image:
      "https://www.static-contents.youth4work.com/university/Documents/Colleges/newsEvent/7ff4495c-1948-4f05-ace0-96837380a810.jpg",
    speciality: "Engineering",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/appImage/1522667396Jepp.jpg?h=260&w=360&mode=crop",
      "https://image-static.collegedunia.com/public/college_data/images/appImage/1522667396Jepp.jpg?h=260&w=360&mode=crop",
      "https://image-static.collegedunia.com/public/college_data/images/appImage/1522667396Jepp.jpg?h=260&w=360&mode=crop",
      "https://image-static.collegedunia.com/public/college_data/images/appImage/1522667396Jepp.jpg?h=260&w=360&mode=crop",
      "https://image-static.collegedunia.com/public/college_data/images/appImage/1522667396Jepp.jpg?h=260&w=360&mode=crop",
    ],
    location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.643931980014!2d80.2179173750746!3d12.866259387439543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525bbace477413%3A0xf70e4decbbd645ea!2sJeppiaar%20Engineering%20College!5e0!3m2!1sen!2sin!4v1729173979491!5m2!1sen!2sin",
    experience: "1 Year",
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
      "Jeppiaar Engineering College is renowned for its commitment to producing skilled engineers who are ready to tackle global challenges. With a focus on technical education and practical application, the college offers state-of-the-art facilities and an industry-aligned curriculum that ensures students are prepared for real-world engineering problems. The campus promotes innovation and encourages collaboration among its students to push the boundaries of technology.",
      highlights: [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1077/1077113.png",  // Infrastructure (building icon)
          title: "Infrastructure",
          rating: "4.5",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3039/3039491.png",  // Academics (book icon)
          title: "Academics",
          rating: "4.6",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1046/1046873.png",  // Faculty (teacher icon)
          title: "Faculty",
          rating: "4.4",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1047/1047634.png",  // Campus Life (activities icon)
          title: "Campus Life",
          rating: "4.7",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1681/1681053.png",  // Placements (briefcase icon)
          title: "Placements",
          rating: "4.3",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2591/2591146.png",  // Value for Money (money icon)
          title: "Value for Money",
          rating: "4.2",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/4466/4466882.png",  // Research (research icon)
          title: "Research",
          rating: "4.5",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3629/3629368.png",  // Environment (tree icon)
          title: "Environment",
          rating: "4.5",
        }
      ],
      
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "Avit-Vinayaka Mission",
    image: doc2,
    speciality: "Management",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    experience: "3 Years",
    about:
      "Avit-Vinayaka Mission is a premier institution focused on holistic development, offering a wide range of courses aimed at shaping the next generation of professionals. Known for its strong academic framework and student-centric approach, the institution provides personalized support and a rich learning environment that fosters both academic and personal growth. Avit ensures that its students not only excel academically but are also prepared for leadership roles in their chosen careers.",
    fees: 60,
    highlights: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1077/1077113.png",  // Infrastructure (building icon)
        title: "Infrastructure",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3039/3039491.png",  // Academics (book icon)
        title: "Academics",
        rating: "4.6",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1046/1046873.png",  // Faculty (teacher icon)
        title: "Faculty",
        rating: "4.4",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1047/1047634.png",  // Campus Life (activities icon)
        title: "Campus Life",
        rating: "4.7",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1681/1681053.png",  // Placements (briefcase icon)
        title: "Placements",
        rating: "4.3",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2591/2591146.png",  // Value for Money (money icon)
        title: "Value for Money",
        rating: "4.2",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/4466/4466882.png",  // Research (research icon)
        title: "Research",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3629/3629368.png",  // Environment (tree icon)
        title: "Environment",
        rating: "4.5",
      }
    ],
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc3",
    name: "Bharath University",
    image: doc3,
    speciality: "Medical",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Bharath University prides itself on being a center of excellence in education and research. The university offers a diverse range of programs aimed at cultivating intellectual curiosity and fostering innovation. Students at Bharath University benefit from a dynamic learning environment that encourages interdisciplinary thinking and hands-on experience, making it a leading choice for those aspiring to make a significant impact in their fields.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1077/1077113.png",  // Infrastructure (building icon)
        title: "Infrastructure",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3039/3039491.png",  // Academics (book icon)
        title: "Academics",
        rating: "4.6",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1046/1046873.png",  // Faculty (teacher icon)
        title: "Faculty",
        rating: "4.4",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1047/1047634.png",  // Campus Life (activities icon)
        title: "Campus Life",
        rating: "4.7",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1681/1681053.png",  // Placements (briefcase icon)
        title: "Placements",
        rating: "4.3",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2591/2591146.png",  // Value for Money (money icon)
        title: "Value for Money",
        rating: "4.2",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/4466/4466882.png",  // Research (research icon)
        title: "Research",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3629/3629368.png",  // Environment (tree icon)
        title: "Environment",
        rating: "4.5",
      }
    ],
  },
  {
    _id: "doc4",
    name: "Joy University",
    image: doc4,
    speciality: "Arts & Humanities",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    experience: "2 Years",
    about:
      "Joy University offers a unique blend of academic rigor and creative freedom, making it an ideal choice for students seeking a vibrant and fulfilling educational experience. The university is committed to nurturing talents across various disciplines, with a curriculum that balances theory with real-world application. Joy University creates a supportive community where students are encouraged to explore their passions and develop their full potential.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1077/1077113.png",  // Infrastructure (building icon)
        title: "Infrastructure",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3039/3039491.png",  // Academics (book icon)
        title: "Academics",
        rating: "4.6",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1046/1046873.png",  // Faculty (teacher icon)
        title: "Faculty",
        rating: "4.4",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1047/1047634.png",  // Campus Life (activities icon)
        title: "Campus Life",
        rating: "4.7",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1681/1681053.png",  // Placements (briefcase icon)
        title: "Placements",
        rating: "4.3",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2591/2591146.png",  // Value for Money (money icon)
        title: "Value for Money",
        rating: "4.2",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/4466/4466882.png",  // Research (research icon)
        title: "Research",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3629/3629368.png",  // Environment (tree icon)
        title: "Environment",
        rating: "4.5",
      }
    ],
  },
  {
    _id: "doc5",
    name: "Kalasalingam Engineering College",
    image: doc5,
    speciality: "Agriculture",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    experience: "4 Years",
    about:
      "Kalasalingam Engineering College is dedicated to cultivating engineering talent through its cutting-edge programs and industry partnerships. With a focus on both traditional engineering fields and emerging technologies, the college provides students with the tools they need to excel in a rapidly evolving tech landscape. The college’s emphasis on innovation and research ensures graduates are well-equipped to drive the future of engineering.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1077/1077113.png",  // Infrastructure (building icon)
        title: "Infrastructure",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3039/3039491.png",  // Academics (book icon)
        title: "Academics",
        rating: "4.6",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1046/1046873.png",  // Faculty (teacher icon)
        title: "Faculty",
        rating: "4.4",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1047/1047634.png",  // Campus Life (activities icon)
        title: "Campus Life",
        rating: "4.7",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1681/1681053.png",  // Placements (briefcase icon)
        title: "Placements",
        rating: "4.3",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2591/2591146.png",  // Value for Money (money icon)
        title: "Value for Money",
        rating: "4.2",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/4466/4466882.png",  // Research (research icon)
        title: "Research",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3629/3629368.png",  // Environment (tree icon)
        title: "Environment",
        rating: "4.5",
      }
    ],
  },
  {
    _id: "doc6",
    name: "LPU University",
    image: doc6,
    speciality: "Law",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    experience: "4 Years",
    about:
      "LPU University is known for its wide-reaching impact on higher education, offering a broad spectrum of academic programs that cater to a global student body. The university's comprehensive approach to education ensures that students not only receive academic knowledge but also develop the soft skills needed to thrive in today’s competitive world. LPU fosters an inclusive, multicultural environment where students from all backgrounds can succeed.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1077/1077113.png",  // Infrastructure (building icon)
        title: "Infrastructure",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3039/3039491.png",  // Academics (book icon)
        title: "Academics",
        rating: "4.6",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1046/1046873.png",  // Faculty (teacher icon)
        title: "Faculty",
        rating: "4.4",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1047/1047634.png",  // Campus Life (activities icon)
        title: "Campus Life",
        rating: "4.7",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1681/1681053.png",  // Placements (briefcase icon)
        title: "Placements",
        rating: "4.3",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2591/2591146.png",  // Value for Money (money icon)
        title: "Value for Money",
        rating: "4.2",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/4466/4466882.png",  // Research (research icon)
        title: "Research",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3629/3629368.png",  // Environment (tree icon)
        title: "Environment",
        rating: "4.5",
      }
    ],
  },
  {
    _id: "doc7",
    name: "MGR University",
    image:
      "https://images.shiksha.com/mediadata/images/1680762147php5ZgOJ3.jpeg",
    speciality: "Pharmacy",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    experience: "4 Years",
    about:
      "MGR University is a leader in professional education, offering cutting-edge programs across a variety of fields. With a mission to provide quality education that combines academic excellence with practical experience, MGR University prepares its students for success in both local and international arenas. The institution is committed to fostering a spirit of innovation, leadership, and social responsibility among its students.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1077/1077113.png",  // Infrastructure (building icon)
        title: "Infrastructure",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3039/3039491.png",  // Academics (book icon)
        title: "Academics",
        rating: "4.6",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1046/1046873.png",  // Faculty (teacher icon)
        title: "Faculty",
        rating: "4.4",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1047/1047634.png",  // Campus Life (activities icon)
        title: "Campus Life",
        rating: "4.7",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1681/1681053.png",  // Placements (briefcase icon)
        title: "Placements",
        rating: "4.3",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2591/2591146.png",  // Value for Money (money icon)
        title: "Value for Money",
        rating: "4.2",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/4466/4466882.png",  // Research (research icon)
        title: "Research",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3629/3629368.png",  // Environment (tree icon)
        title: "Environment",
        rating: "4.5",
      }
    ],
  },
  {
    _id: "doc8",
    name: "Sathyabama University",
    image: doc8,
    speciality: "Allied Health Sciences",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    experience: "3 Years",
    about:
      "Sathyabama University is a renowned institution known for its emphasis on research and academic excellence. The university provides an environment where students are encouraged to explore new ideas and engage in groundbreaking research. With a wide array of courses and a strong focus on interdisciplinary learning, Sathyabama University aims to shape thought leaders who will drive progress in their respective fields.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1077/1077113.png",  // Infrastructure (building icon)
        title: "Infrastructure",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3039/3039491.png",  // Academics (book icon)
        title: "Academics",
        rating: "4.6",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1046/1046873.png",  // Faculty (teacher icon)
        title: "Faculty",
        rating: "4.4",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1047/1047634.png",  // Campus Life (activities icon)
        title: "Campus Life",
        rating: "4.7",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1681/1681053.png",  // Placements (briefcase icon)
        title: "Placements",
        rating: "4.3",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2591/2591146.png",  // Value for Money (money icon)
        title: "Value for Money",
        rating: "4.2",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/4466/4466882.png",  // Research (research icon)
        title: "Research",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3629/3629368.png",  // Environment (tree icon)
        title: "Environment",
        rating: "4.5",
      }
    ],
  },
  {
    _id: "doc9",
    name: "SRM University",
    image:
      "https://www.orchidfoundation.info/sites/default/files/2021-01/SRM-University-Kattankulath.jpg",
    speciality: "Engineering",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    experience: "1 Year",
    about:
      "SRM University is a prestigious institution that offers a comprehensive education with a strong emphasis on practical skills and research opportunities. Known for its state-of-the-art facilities and innovative teaching methods, SRM provides a platform for students to develop the knowledge and skills needed to succeed in a globalized world. The university’s focus on industry collaboration ensures that students are well-prepared for the demands of the modern workforce.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1077/1077113.png",  // Infrastructure (building icon)
        title: "Infrastructure",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3039/3039491.png",  // Academics (book icon)
        title: "Academics",
        rating: "4.6",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1046/1046873.png",  // Faculty (teacher icon)
        title: "Faculty",
        rating: "4.4",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1047/1047634.png",  // Campus Life (activities icon)
        title: "Campus Life",
        rating: "4.7",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1681/1681053.png",  // Placements (briefcase icon)
        title: "Placements",
        rating: "4.3",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2591/2591146.png",  // Value for Money (money icon)
        title: "Value for Money",
        rating: "4.2",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/4466/4466882.png",  // Research (research icon)
        title: "Research",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3629/3629368.png",  // Environment (tree icon)
        title: "Environment",
        rating: "4.5",
      }
    ],
  },
  {
    _id: "doc10",
    name: "Vellore Institute of Technology",
    image:
      "https://5.imimg.com/data5/WY/DL/LG/SELLER-44655142/direct-admission-in-vit-university-vellore-university-call-9910123170.jpg",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    speciality: "Management",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Vellore Institute of Technology is synonymous with excellence in higher education, offering a range of programs designed to equip students with both academic knowledge and practical expertise. VIT is known for its collaborative environment, where students are encouraged to work on real-world projects that enhance their learning experience. With its strong global connections and focus on innovation, VIT continues to be a top choice for aspiring professionals.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1077/1077113.png",  // Infrastructure (building icon)
        title: "Infrastructure",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3039/3039491.png",  // Academics (book icon)
        title: "Academics",
        rating: "4.6",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1046/1046873.png",  // Faculty (teacher icon)
        title: "Faculty",
        rating: "4.4",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1047/1047634.png",  // Campus Life (activities icon)
        title: "Campus Life",
        rating: "4.7",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1681/1681053.png",  // Placements (briefcase icon)
        title: "Placements",
        rating: "4.3",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2591/2591146.png",  // Value for Money (money icon)
        title: "Value for Money",
        rating: "4.2",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/4466/4466882.png",  // Research (research icon)
        title: "Research",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3629/3629368.png",  // Environment (tree icon)
        title: "Environment",
        rating: "4.5",
      }
    ],
  },
  {
    _id: "doc11",
    name: "VelTech University",
    image: doc11,
    speciality: "Medical",
    degree: "MBBS",
    field1: "Electronic & Communication Engineering",
    field2: "Computer & Communication Engineering",
    field3: "Information & Technology",
    field4: "Bio-Technology",
    field5: "Mechanical Engineering",
    experience: "4 Years",
    about:
      "VelTech University is committed to providing a world-class education with an emphasis on innovation, research, and entrepreneurship. The university’s interdisciplinary approach enables students to tackle complex challenges and develop cutting-edge solutions. VelTech fosters a culture of academic excellence and encourages its students to think critically and creatively, preparing them for leadership roles in their chosen fields.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
    highlights: [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1077/1077113.png",  // Infrastructure (building icon)
        title: "Infrastructure",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3039/3039491.png",  // Academics (book icon)
        title: "Academics",
        rating: "4.6",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1046/1046873.png",  // Faculty (teacher icon)
        title: "Faculty",
        rating: "4.4",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1047/1047634.png",  // Campus Life (activities icon)
        title: "Campus Life",
        rating: "4.7",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1681/1681053.png",  // Placements (briefcase icon)
        title: "Placements",
        rating: "4.3",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/2591/2591146.png",  // Value for Money (money icon)
        title: "Value for Money",
        rating: "4.2",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/4466/4466882.png",  // Research (research icon)
        title: "Research",
        rating: "4.5",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3629/3629368.png",  // Environment (tree icon)
        title: "Environment",
        rating: "4.5",
      }
    ],
  },
  // You can continue with the remaining colleges similarly
];

