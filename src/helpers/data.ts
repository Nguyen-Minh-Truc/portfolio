import nestImg from "assets/project/nestjs.png";
import nextjsImg from "assets/project/nextjs.jpeg";
import reactNativeImg from "assets/project/react-native.png";
import reactUltimateImg from "assets/project/react-ultimate.png";
import springMvcImg from "assets/project/spring-mvc.png";
import springRestImg from "assets/project/spring-rest.png";

/* =========================
   🌐 APP LINKS
========================= */
export const APP_DATA = {
    YOUTUBE_URL: "https://www.youtube.com/@hoidanit",
    TIKTOK_URL: "https://www.tiktok.com/@hoidanit",
    UDEMY_URL: "https://www.udemy.com/user/eric-7039/",
    FACEBOOK_URL: "https://www.facebook.com/askITwithERIC/"
};

/* =========================
   💼 EXPERIENCES (REALISTIC VERSION)
========================= */
export const EXPERIENCES = [
    {
        id: 1,
        title: {
            vi: "Backend Developer Intern",
            en: "Backend Developer Intern"
        },
        company: {
            vi: "Dự án cá nhân & học tập",
            en: "Personal & Learning Projects"
        },
        duration: {
            vi: "2026 - Hiện tại",
            en: "2026 - Present"
        }
    },
    {
        id: 2,
        title: {
            vi: "Sinh viên Công nghệ Thông tin",
            en: "IT Student"
        },
        company: {
            vi: "Đại học Sài Gòn",
            en: "Saigon University"
        },
        duration: {
            vi: "2022 - Hiện tại",
            en: "2022 - Present"
        }
    }
];

/* =========================
   💻 PROJECTS (CLEANED + BACKEND STYLE)
========================= */
export const PROJECTS = [
    {
        id: 1,
        imgPath: springRestImg,
        title: "Mini Shop Management System",
        description:
            "Backend system for managing inventory, orders, and revenue analytics with real-time updates and authentication.",
        githubLink: "https://github.com/Nguyen-Minh-Truc/MiniShop",
        demoLink: "https://github.com/Nguyen-Minh-Truc/FE-MiniShop"
    },
    {
        id: 2,
        imgPath: nestImg,
        title: "Travel Tour Management System",
        description:
            "Backend API system for managing tours, bookings, payments, and AI-based travel recommendations.",
        githubLink: "https://github.com/Nguyen-Minh-Truc/TourManagement",
        demoLink: ""
    },
  
];

/* =========================
   🧠 SKILLS (BACKEND-FOCUSED CLEAN)
========================= */
export const SKILLS_DATA = [
    "Java",
    "JavaScript",
    "TypeScript",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Git",

];