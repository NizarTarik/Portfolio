import { translator } from './translator.js';

const documentPdf = document.getElementById('documentPdf');
// nav
const homeBtn = document.getElementById('showIndex');
const aboutBtn = document.getElementById('showAbout');


// Sidebar
const itKenntnisse = document.getElementById('itKenntnisse');
const Zusatzliche = document.getElementById('Zusatzliche');
const emailMe = document.getElementById('emailMe');

// home
const title = document.getElementById('title');
const homeText = document.getElementById('homeText');

// projects
const projectsSectionTitle = document.getElementById('projectsSectionTitle');
const repositorie = document.querySelectorAll('.project-repository');
const pdf = document.querySelectorAll('.project-pdf');
const play = document.querySelectorAll('.play');

const project1Title = document.getElementById('project1Title');
const project1Description = document.getElementById('project1Description');
const project2Title = document.getElementById('project2Title');
const project2Description = document.getElementById('project2Description');
const project3Title = document.getElementById('project3Title');
const project3Description = document.getElementById('project3Description');
const project4Title = document.getElementById('project4Title');
const project4Description = document.getElementById('project4Description');
const project5Title = document.getElementById('project5Title');
const project5Description = document.getElementById('project5Description');
const project6Title = document.getElementById('project6Title');
const project6Description = document.getElementById('project6Description');

// about
const b2cake = document.getElementById('b2cake');
const diplomeparty = document.getElementById('diplomeparty');
const stage = document.getElementById('stage');




// Helper function
const updateLanguageText = (data) => {

    documentPdf.innerHTML = `${data.documentPdf}<i class="fas fa-sm fa-up-right-from-square" style="margin-left: 4px;"></i>`;

    // nav
    homeBtn.innerHTML = data.nav.home;
    aboutBtn.innerHTML = data.nav.about;

    // sidebar
    itKenntnisse.innerHTML = data.sideBar.itKenntnisse;
    Zusatzliche.innerHTML = data.sideBar.Zusatzliche;
    emailMe.innerHTML = `<i class="fas fa-envelope" style="margin-right: 12px;"></i>${data.sideBar.emailMe}`;


    // home
    title.innerHTML = data.home.title;
    homeText.innerHTML = data.home.homeText;

    // projects
    projectsSectionTitle.innerHTML = data.projects.title;
    project1Title.innerHTML = data.projects.project1.title;
    project1Description.innerHTML = data.projects.project1.description;
    project2Title.innerHTML = data.projects.project2.title;
    project2Description.innerHTML = data.projects.project2.description;
    project3Title.innerHTML = data.projects.project3.title;
    project3Description.innerHTML = data.projects.project3.description;
    project4Title.innerHTML = data.projects.project4.title;
    project4Description.innerHTML = data.projects.project4.description;
    project5Title.innerHTML = data.projects.project5.title;
    project5Description.innerHTML = data.projects.project5.description;
    project6Title.innerHTML = data.projects.project6.title;
    project6Description.innerHTML = data.projects.project6.description;

    // about
    b2cake.innerHTML = data.about.b2cake;
    diplomeparty.innerHTML = data.about.diplomeparty;
    stage.innerHTML = data.about.stage;


    // all .project-repository buttons
    repositorie.forEach((button) => {
        button.innerHTML = `<i class="fab fa-github" style="margin-right: 8px;"></i> ${data.projects.repository}`;
    });

    pdf.forEach((button) => {
        button.innerHTML = `<i class="fas fa-file-pdf" style="margin-right: 8px; color: white;"></i> ${data.projects.pdf} <i class="fa-solid fa-up-right-from-square" style="margin-left: 8px; color: white;" ></i> `;
    });

    play.forEach((button) => {
        button.innerHTML = `<i class="fas fa-play-circle" style="margin-right: 8px; color: white;"></i>  ${data.projects.play}`;
    });



};

// Language select handler
document.querySelector('select').addEventListener('change', (event) => {
    const selectedLang = event.target.value;
    if (translator[selectedLang]) {
        updateLanguageText(translator[selectedLang]);
    }
});

// Default to DE
document.addEventListener('DOMContentLoaded', () => {
    updateLanguageText(translator.DE);
    document.querySelector('select').value = 'DE';
});
