import profileImage from "./src/img/Group02.png";
import logoLinkedin from "./src/img/logo-linkedin.png";
import logoGithub from "./src/img/logo-github.png";
import LogoJavaScript from "./src/img/icon/icon-js.png"
import LogoReact from "./src/img/icon/icon-react.png"
import LogoRedux from "./src/img/icon/icon-redux.png"
import LogoNode from "./src/img/icon/icon-node.png"
import LogoVsCode from "./src/img/icon/icon-vscode.png"
import LogoFigma from "./src/img/icon/icon-figma.png"
import ComputerLogo from "./src/img/projectsIcon/Rectangle37.png"
import QuickitLogo from "./src/img/projectsIcon/quickit.png"
import Computer2Logo from "./src/img/projectsIcon/Computer2.png"

const data = {
  "en": {
    "heroSection": {
      "greeting": "Hi!",
      "intro": "I'm İbrahim.",
      "profileImage": profileImage,
      "socials": [
        {
          "logo": logoLinkedin,
          "alt_text": "linkedin",
          "link": "https://example.com"
        },
        {
          "logo": logoGithub,
          "alt_text": "github",
          "link": "https://github.com"
        }
      ],
      "textH1": "Currently looking for a job as a <strong>Frontend Developer</strong> in Amsterdam."
    },
    "skillsSection": {
      "title": "Skills",
      "skills": [
        { "name": "JavaScript", "icon": LogoJavaScript },
        { "name": "REACT", "icon": LogoReact },
        { "name": "REDUX", "icon": LogoRedux },
        { "name": "NODE", "icon": LogoNode },
        { "name": "VS CODE", "icon": LogoVsCode },
        { "name": "FIGMA", "icon": LogoFigma }
      ]
    },
    "profile": {
      "title": "Basic Informations",
      "basicInfo": {        
        "date_of_birth": "25.02.1994",
        "birth_place": "Turkey/Gaziantep",
        "school": "Math Engineering",
        "role": "Full-Stack Developer",
      },
      "labels": {
        "date_of_birth": "Date of Birth",
        "birth_place": "Birth Place",
        "school": "School",
        "role": "Role"
      },
      "about": {
        "title": "About Me",
        "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris ipsum, bibendum id facilisis id, vestibulum quis diam. Phasellus in suscipit odio. Vivamus sit amet pretium quam. Sed a pretium augue. Ut vestibulum quis ante posuere sodales.",
        
      }

    }, "projects": [{
      "title": "Absolute Acı Pizza Project",
      "description": "An application where users can create and order the type of pizza they want.",
      "imageUrl": ComputerLogo,
      "tags": ["React", "Vercel", "Axios", "Router"],
      "githubUrl": "https://github.com/ibrahim/random-jokes",
      "liveUrl": "https://random-jokes-app.vercel.app"
    }, {
      "title": "Watch List Solution",
      "description": "An app where everyone can list the movies and series they should watch. The most popular content on IMDB.",
      "imageUrl": QuickitLogo,
      "tags": ["React", "Node.js", "Express", "MongoDB"],
      "githubUrl": "https://github.com/ibrahim/ecommerce",
      "liveUrl": "https://ecommerce-app.vercel.app"
    }],
  },
  "tr": {
    "heroSection": {
      "greeting": "Merhaba!",
      "intro": "Ben İbrahim.",
      "profileImage": profileImage,
      "socials": [
        {
          "logo": logoLinkedin,
          "alt_text": "linkedin",
          "link": "https://example.com"
        },
        {
          "logo": logoGithub,
          "alt_text": "github",
          "link": "https://github.com"
        }
      ],
      "textH1": "Şu anda <strong>Amsterdam</strong>'da <strong>Frontend Developer</strong> olarak bir iş arıyorum."
    },
    "skillsSection": {
      "title": "Yetenekler",
      "skills": [
        { "name": "JavaScript", "icon": LogoJavaScript },
        { "name": "REACT", "icon": LogoReact },
        { "name": "REDUX", "icon": LogoRedux },
        { "name": "NODE", "icon": LogoNode },
        { "name": "VS CODE", "icon": LogoVsCode },
        { "name": "FIGMA", "icon": LogoFigma }
      ]
    },
    "profile": {
      "title": "Genel Bilgiler",
      "basicInfo": {        
        "date_of_birth": "25.02.1994",
        "birth_place": "Türkiye/Gaziantep",
        "school": "Matematik Mühendisliği",
        "role": "Full-Stack Developer",

      },
      "labels": {
        "date_of_birth": "Doğum Tarihi",
        "birth_place": "Doğum Yeri",
        "school": "Okul",
        "role": "Pozisyon"
      },

      "about": {
        "title": "Hakkımda",
        "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris ipsum, bibendum id facilisis id, vestibulum quis diam. Phasellus in suscipit odio. Vivamus sit amet pretium quam. Sed a pretium augue. Ut vestibulum quis ante posuere sodales.",
        
      }
    },
    "projects": [{
      "title": "Gerçek Acı Pizza Projesi",
      "description": "Kullanıcıların istedikleri türde pizzalar oluşturup sipariş verebileceği bir uygulama.",
      "imageUrl": QuickitLogo,
      "tags": ["React", "Vercel", "Axios", "Router"],
      "githubUrl": "https://github.com/ibrahim/random-jokes",
      "liveUrl": "https://random-jokes-app.vercel.app"
    }, {
      "title": "İzleme Listesi Projesi",
      "description": "Herkesin izlemesi gereken filmleri ve dizileri listeleyebileceği bir uygulama. IMDB üzerinden en popüler içerikler.",
      "imageUrl":Computer2Logo,
      "tags": ["React", "Node.js", "Express", "MongoDB"],
      "githubUrl": "https://github.com/ibrahim/ecommerce",
      "liveUrl": "https://ecommerce-app.vercel.app"
    }],
  }
};
export default data;