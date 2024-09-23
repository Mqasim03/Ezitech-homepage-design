document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const footer = document.getElementById('footer');
    const header = document.getElementById('header');
    const navbar = document.getElementById('navbar');
    const worksection = document.getElementById('worksection');
    const services = document.getElementById('services');
    const course = document.getElementById('course');
    const offer = document.getElementById('offer');
    const info = document.getElementById('info');
    const chatbot = document.getElementById('chatbot');
    const invest = document.getElementById('invest');


//hero
    
    fetch('hero.html')
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(err => console.error("Error loading hero.html:", err));

  //footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data;
        })
        .catch(err => console.error("Error loading footer.html:", err));
//header
        fetch('header.html')
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data;
        })
        .catch(err => console.error("Error loading footer.html:", err));

        //navbar

        fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            navbar.innerHTML = data;
        })
        .catch(err => console.error("Error loading footer.html:", err));
//work
        fetch('worksection.html')
        .then(response => response.text())
        .then(data => {
            worksection.innerHTML = data;
        })
        .catch(err => console.error("Error loading footer.html:", err));

 //services
        fetch('services.html')
        .then(response => response.text())
        .then(data => {
            services.innerHTML = data;
        })
        .catch(err => console.error("Error loading footer.html:", err));
//course
        fetch('course.html')
        .then(response => response.text())
        .then(data => {
            course.innerHTML = data;
        })
        .catch(err => console.error("Error loading footer.html:", err));
//offer
        fetch('offer.html')
        .then(response => response.text())
        .then(data => {
            offer.innerHTML = data;
        })
        .catch(err => console.error("Error loading footer.html:", err));
//info
        fetch('info.html')
        .then(response => response.text())
        .then(data => {
            info.innerHTML = data;
        })
        .catch(err => console.error("Error loading footer.html:", err));
//chatbot
        fetch('chatbot.html')
        .then(response => response.text())
        .then(data => {
            chatbot.innerHTML = data;
        })
        .catch(err => console.error("Error loading footer.html:", err));
//invest
        fetch('invest.html')
        .then(response => response.text())
        .then(data => {
            invest.innerHTML = data;
        })
        .catch(err => console.error("Error loading footer.html:", err));

});





