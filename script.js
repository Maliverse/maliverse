// Intersection observers //

const myProjects = document.querySelectorAll('.projects');
const heroContent = document.querySelectorAll('.heroText');
const heroFrame = document.querySelectorAll('.frame');



const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    entry.target.classList.toggle('slide', entry.isIntersecting)
   // if(entry.isIntersecting) observer.unobserve(entry.target)
    })
},
    {
        threshold: 0.3
    }
)

heroFrame.forEach(frame => {
    observer.observe(frame)
    })  

heroContent.forEach(heroText => {
    observer.observe(heroText)
    })  

myProjects.forEach(projects => {
observer.observe(projects)
})
    
   
    
// Intersection observers //

const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const closeMenu = document.getElementById('close-menu');


hamburger.addEventListener('click', () => {

    navUL.classList.toggle('see')
    hamburger.classList.toggle('disappear')
    closeMenu.classList.toggle('see')

})


closeMenu.addEventListener('click', () => {

    navUL.classList.toggle('see')
    hamburger.classList.toggle('disappear')
    closeMenu.classList.toggle('see')

})

const turnOn = document.getElementById('switch-on');
const turnOff = document.getElementById('switch-off');
const backgroundMode = document.querySelector('body');
const heroContainer = document.getElementById('Home');
const headings = document.querySelector('h1');
const headingsToo = document.querySelector('h2');
const taglineStuff = document.getElementById('js-tag');
const aboutMeWall = document.getElementById('personal-details');
const heroImage = document.getElementById('profile-img');
const footerCta = document.getElementById ('cta');
const footerTagline = document.getElementById('tagline');
const footerContainer = document.getElementById('footer')

const projectContainer = document.getElementsByClassName('projects');
const projectTexts = document.getElementsByClassName('h2project');
const socialIcons = document.getElementsByClassName('hero-icons');
const aboutMeBar = document.getElementsByClassName('About-Me');

turnOff.addEventListener ('click', () => {
turnOff.classList.toggle('disappear')
turnOn.classList.toggle('see')
backgroundMode.classList.toggle('darkmode')
heroContainer.classList.toggle('dark')
headings.classList.toggle('dark')
headingsToo.classList.toggle('dark')
taglineStuff.classList.toggle('light')
aboutMeWall.classList.toggle('black')
heroImage.classList.toggle('switch')
footerCta.classList.toggle('light')
footerTagline.classList.toggle('light')
footerContainer.classList.toggle('dark')




for (var i = 0; i < projectContainer.length; i++){
     projectContainer[i].classList.toggle('dark');
}

for (var i = 0; i < projectTexts.length; i++){
    projectTexts[i].classList.toggle('light');
}
for (var i = 0; i < socialIcons.length; i++){
    socialIcons[i].classList.toggle('bright');
}
for (var i = 0; i < aboutMeBar.length; i++){
    aboutMeBar [i].classList.toggle('switch');
}
})
turnOn.addEventListener ('click', () => {
turnOff.classList.toggle('disappear')
turnOn.classList.toggle('see')
backgroundMode.classList.toggle('darkmode')
heroContainer.classList.toggle('dark')
headings.classList.toggle('dark')
headingsToo.classList.toggle('dark')
taglineStuff.classList.toggle('light')
aboutMeWall.classList.toggle('black')
heroImage.classList.toggle('switch')
footerCta.classList.toggle('light')
footerTagline.classList.toggle('light')
footerContainer.classList.toggle('dark')


  for (var i = 0; i < projectContainer.length; i++){
projectContainer[i].classList.toggle('dark');
}

  for (var i = 0; i < projectTexts.length; i++){
            projectTexts[i].classList.toggle('light');
        }

        for (var i = 0; i < socialIcons.length; i++){
    socialIcons[i].classList.toggle('bright');
}
for (var i = 0; i < aboutMeBar.length; i++){
    aboutMeBar [i].classList.toggle('switch');
}
})







 
    

