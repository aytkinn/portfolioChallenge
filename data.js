import profileImage from "./src/img/Group02.png";

const data = {
  "en": {
    "heroSection": {
      "greeting": "Hi!",
      "intro": "I'm İbrahim.",
      "profileImage": profileImage,
      "socials": [
        {
          "logo": "./src/img/logo-linkedin.png",
          "alt_text": "linkedin",
          "link": "https://example.com"
        },
        {
          "logo": "./src/img/logo-github.png",
          "alt_text": "github",
          "link": "https://github.com"
        }
      ],
      "textH1": "Currently looking for a job as a <strong>Frontend Developer</strong> in Amsterdam."
    },
    "skillsSection": {
      "title": "Skills",
      "skills": [
        {
          "name": "HTML",
          "icon": "icon-html.png"
        },
        {
          "name": "CSS",
          "icon": "icon-css.png"
        },
        {
          "name": "JavaScript",
          "icon": "icon-js.png"
        }
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
          "logo": "./src/img/logo-linkedin.png",
          "alt_text": "linkedin",
          "link": "https://example.com"
        },
        {
          "logo": "./src/img/logo-github.png",
          "alt_text": "github",
          "link": "https://github.com"
        }
      ],
      "textH1": "Şu anda <strong>Amsterdam</strong>'da <strong>Frontend Developer</strong> olarak bir iş arıyorum."
    },
    "skillsSection": {
      "title": "Yetenekler",
      "skills": [
        {
          "name": "HTML",
          "icon": "icon-html.png"
        },
        {
          "name": "CSS",
          "icon": "icon-css.png"
        },
        {
          "name": "JavaScript",
          "icon": "icon-js.png"
        }
      ]
    }
  }
};
export default data;