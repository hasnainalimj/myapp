
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Hasnain Ali",
  title: "Hi all, I'm Hasnain Ali",
  subTitle: emoji("Sr. Software Engineer 💻 having 3 years of development experience and build around 40+ web & mobile applications."),
  resumeLink: "https://drive.google.com/file/d/1hDCXOH4tNQddsRlbiOeTLTNhTeBFKnVu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/hasnainalimj",
  linkedin: "https://www.linkedin.com/in/hasnainalimj/",
  gmail: "mjhasnain15@gmail.com",
  gitlab: "https://gitlab.com/mjhasnain15",
  facebook: "https://www.facebook.com/hasnain.alimj.5",
  medium: "https://medium.com/@mjhasnain15",
  stackoverflow: "https://stackoverflow.com/users/12589665/hasnain-ali"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Sr. Software Engineer & A Passionate Programming Teacher",
  skills: [
    emoji("⚡ Developing pixel perfect UI for web & mobile"),
    emoji("⚡ Teaching Programming to all newbies & freshers in my own institute"),
    emoji("⚡ Make apps real by using third-party modules like Firebase, Express, MongoDB etc"),
    emoji("⚡ Deploying Apps on App & Play Store"),

  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Virtual University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelors in Computer Science",
      duration: "March 2014 - May 2018"
    },
    {
      schoolName: "Govt. Degree Science Collage",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Intermediate in Pre-Engineering",
      duration: "April 2012 - June 2014"
    },
    {
      schoolName: "Little Genius Grammar School",
      logo: require("./assets/images/school.jpg"),
      subHeader: "Matric in Computer Science",
      duration: "Jul 2000 - May 2012"
    },
    {
      schoolName: "Aptech Computer Education",
      logo: require("./assets/images/aptech.png"),
      subHeader: "3 Years Diploma in Software Engineering (ACCP Pro)",
      duration: "Nov 2015 - Nov 2018"
    },
    {
      schoolName: "Saylani Mass IT Training Program",
      logo: require("./assets/images/saylani.jpg"),
      subHeader: "1.5 Years Certification Software Engineering",
      duration: "Jan 2016 - Mar 2018"
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML5/CSS3",  //Insert stack or technology you have experience in
      progressPercentage: "100%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Javascript",
      progressPercentage: "100%"
    },
    {
      Stack: "React",
      progressPercentage: "100%"
    },
    {
      Stack: "React Native",
      progressPercentage: "100%"
    },
    {
      Stack: "Node",
      progressPercentage: "70%"
    },
    {
      Stack: "MongoDB",
      progressPercentage: "70%"
    },
    {
      Stack: "Firebase",
      progressPercentage: "100%"
    },
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Software Engineer (React Native)",
      company: "ZEPCOM INTERNATIONALS",
      companylogo: require("./assets/images/zepcom.png"),
      date: "April 2020 – Present"
    },
    {
      role: "Sr. Software Engineer (React Native)",
      company: "CLOUD PRIMERO",
      companylogo: require("./assets/images/cloud.png"),
      date: "April 2020 – Present"
    },
    {
      role: "Sr. Software Engineer (React Native)",
      company: "JOGO.AI",
      companylogo: require("./assets/images/jogo.jpg"),
      date: "April 2020 – Present"
    },
    {
      role: "Sr. Frontend Developer",
      company: "Expertizo",
      companylogo: require("./assets/images/exp.jpg"),
      date: "Nov 2018 – Mar 2020",
    },
    {
      role: "Founder/Startup",
      company: "Developers Academy & SoftHub",
      companylogo: require("./assets/images/das.png"),
      date: "Aug 2018 – Present",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/jog.png"),
      link: "https://jogo.ai/"
    },
    {
      image: require("./assets/images/expert.png"),
      link: "http://spaceshiptech.com/expert/"
    },
    {
      image: require("./assets/images/mandi.png"),
      link: "http://expertizo.pk/thecowmandi.html"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Hackathon Winner",
      subtitle: "Winner of IOT based hackathon and won cash prize of 50,000PKR",
      image: require("./assets/images/ignite.jpg"),
      footerLink: [
        { name: "Certification" },
        { name: "Award Letter" },
        { name: "Prize" }
      ]
    },
    {
      title: "Certified Developer",
      subtitle: "Certified Mobile & Web App Developer",
      image: require("./assets/images/say.jpg"),
      footerLink: [{ name: "Certification" },
      { name: "Award Letter" },]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@mjhasnain15/why-i-choose-react-js-ad9796eddf7a",
      title: "Why I choose React JS?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3102932665",
  email_address: "mjhasnain15@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
