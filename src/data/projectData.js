import Portfolio from "../assets/portfolio.png";
import DailyNews from "../assets/Daily news.png";
import TextConveter from "../assets/Text-conveter!.png";
import Onlinebookstore from "../assets/Online book store.png";
import ToDoApp from "../assets/To-Do-App.png";
import TaskBridge from "../assets/Task-Bridge.png"


export const tabs = ["All", "Full Stack", "Front-end", "UI/UX"];

export const projects = [
    {
        id: 1,
        title: "My Portfolio!",
        description:
            "Welcome to my personal portfolio. This repository shows my projects, skills, and experience in various fields. Feel free to explore and learn more about my work.",
        category: "Front-end",
        image: Portfolio,
        alt: "Photo of the Portfolio website",
        link: "https://portfolio2-puce-nu-84.vercel.app/",
    },

    {
        id: 2,
        title: "Online book store",
        description:
            "Online Bookstore is a Spring Boot full-stack app using Thymeleaf and H2, supporting user login, role-based access, admin book management, and user browsing.",
        category: "Full Stack",
        image: Onlinebookstore,
        alt: "Photo of the Online book store website",
        link: "https://github.com/Rahul-web-2/onlinebookstore/blob/main/README.md",
    },

    {
        id: 3,
        title: "Daily-News!",
        description:
            "This project allows users to view top headlines and latest news across categories like Sports, Business and World fetched from the News API and displayed dynamically.",
        category: "Front-end",
        image: DailyNews,
        alt: "Photo of the Daily News website",
        link: "https://github.com/Rahul-web-2/Daily-News/blob/main/README.md",

    },

    {
        id: 4,
        title: "To-Do-App",
        description:
            "To-Do Web App is a Spring Boot full-stack project using Thymeleaf and H2, enabling add, edit, delete, and complete tasks with MVC and standard web technologies.",
        category: "Full Stack",
        image: ToDoApp,
        alt: "Photo of the To-Do App website",
        link: "https://github.com/Rahul-web-2/To-Do-App/blob/main/README.md",

    },

    {
        id: 5,
        title: "Text-conveter!",
        description:
            "This project allows users to manipulate text using multiple features like case conversion, formatting, cleanup, and analysis. Built with Reactjs and CSS for interactive UI.",
        category: "Front-end",
        image: TextConveter,
        alt: "Photo of the Text Conveter website",
        link: "https://text-conveter.vercel.app/",
    },

    {
        id: 6,
        title: "TaskBridge",
        description:
            "TaskBridge is a full-stack task management web app built with React, Spring Boot, and MySQL that lets users create, update, delete, and track tasks efficiently.",
        category: "Full Stack",
        image: TaskBridge,
        alt: "Photo of the Task Bridge website",
        link: "https://task-management-system-fe-psi.vercel.app/",
    }
];