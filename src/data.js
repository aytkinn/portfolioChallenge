import profileImage from "./img/profileFoto.png";
import logoLinkedin from "./img/logo-linkedin.png";
import logoGithub from "./img/logo-github.png";
import LogoJavaScript from "./img/icon/icon-js.png"
import LogoReact from "./img/icon/icon-react.png"
import LogoRedux from "./img/icon/icon-redux.png"
import LogoNode from "./img/icon/icon-node.png"
import LogoVsCode from "./img/icon/icon-vscode.png"
import LogoFigma from "./img/icon/icon-figma.png"
import ComputerLogo from "./img/projectsIcon/laptop.png"
import QuickitLogo from "./img/projectsIcon/quickit.png"
import Computer2Logo from "./img/projectsIcon/computer2.png"

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
        { "name": "JAVASCRIPT", "icon": LogoJavaScript },
        { "name": "REACT", "icon": LogoReact },
        { "name": "REDUX", "icon": LogoRedux },
        { "name": "NODE", "icon": LogoNode },
        { "name": "VS CODE", "icon": LogoVsCode },
        { "name": "FIGMA", "icon": LogoFigma }
      ]
    },
    "profile": {
      "titleh1":"Profile",
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

    }, 
    "projects": [{
      "titleh1":"Projects",
      "title": "Absolute Acı Pizza Project",
      "description": "An application where users can create and order the type of pizza they want.",
      "imageUrl": Computer2Logo,
      "tags": ["React", "Vercel", "Axios", "Router"],
      "githubUrl": "https://github.com/ibrahim/random-jokes",
      "liveUrl": "https://random-jokes-app.vercel.app"
    }, {
      "title": "Watch List Solution",
      "description": "An app where everyone can list the movies and series they should watch. The most popular content on IMDB.",
      "imageUrl": QuickitLogo,
      "tags": ["React", "Node.js", "Express", "MongoDB"],
      "githubUrl": "https://github.com/ibrahim/ecommerce",
      "liveUrl": "https://ecommerce-app.vercel.app",
      "text1":"View on GitHub",
      "text2":"Go to App"
    }],
    "projectsFooter": {
      "titleLine1": "Let’s work together on ",
      "titleLine2": " your next product.",
      "links": [
        { "label": "Github", "url": "https://github.com/aytkinn" },
        { "label": "Personal Blog", "url": "#"},
        { "label": "Linkedin", "url": "https://www.linkedin.com/" },
        { "label": "Email", "url": "mailto:aytkinn21@gmail.com" }
      ]
    }
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
      "titleh1":"Profil",
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
      "titleh1":"Projeler",
      "title": "Gerçek Acı Pizza Projesi",
      "description": "Kullanıcıların istedikleri türde pizzalar oluşturup sipariş verebileceği bir uygulama.",
      "imageUrl": QuickitLogo,
      "tags": ["React", "Vercel", "Axios", "Router"],
      "githubUrl": "https://github.com/aytkinn/fsweb-s8-challenge-pizza.git",
      "liveUrl": "https://github.com/aytkinn/portfolioChallenge.git",
      "text1":"Github'da görüntüleyin",
      "text2":"App'e git"
    }, {
      "title": "İzleme Listesi Projesi",
      "description": "Herkesin izlemesi gereken filmleri ve dizileri listeleyebileceği bir uygulama. IMDB üzerinden en popüler içerikler.",
      "imageUrl":Computer2Logo,
      "tags": ["React", "Node.js", "Express", "MongoDB"],
      "githubUrl": "https://github.com/aytkinn/fsweb-s10g3-redux-watchlist-solution.git",
      "liveUrl": "https://github.com/aytkinn/fsweb-s10g3-redux-watchlist-solution.git"
    }],
    "projectsFooter": {
      "titleLine1": "Birlikte çalışalım",
      "titleLine2": "bir sonraki ürününüz için.",
      "links": [
        { "label": "Github", "url": "https://github.com/aytkinn"  },
        { "label": "Kişisel Blog", "url": "#" },
        { "label": "LinkedIn", "url": "https://www.linkedin.com/" },
        { "label": "E‑posta", "url": "mailto:aytkinn21@gmail.com"}
      ]
    }
  }
};
export default data;