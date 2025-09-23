import profileImage from "./src/img/Group02.png";
import logoLinkedin from "./src/img/logo-linkedin.png";
import logoGithub from "./src/img/logo-github.png";
import LogoJavaScript from "./src/img/icon/icon-js.png"
import LogoReact from "./src/img/icon/icon-react.png"
import LogoRedux from "./src/img/icon/icon-redux.png"
import LogoNode from "./src/img/icon/icon-node.png"
import LogoVsCode from "./src/img/icon/icon-vscode.png"
import LogoFigma from "./src/img/icon/icon-figma.png"


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
        "description2": "Integer aliquam erat non ante porttitor, id ullamcorper dolor tristique. Quisque iaculis neque nec lacus auctor, a pellentesque neque rutrum. Sed consequat venenatis metus, in dictum orci tempor ac."
      }
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
        "description2": "Integer aliquam erat non ante porttitor, id ullamcorper dolor tristique. Quisque iaculis neque nec lacus auctor, a pellentesque neque rutrum. Sed consequat venenatis metus, in dictum orci tempor ac."
      }
    }
  }
};
export default data;