function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }



const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');


tabs.forEach((tab, index) => {
  tab.addEventListener('click', function () {
    
    tabs.forEach(tab => tab.classList.remove('tab-active'));

    
    this.classList.add('tab-active');

   
    sections.forEach(section => section.classList.remove('active'));

    
    sections[index].classList.add('active');
  });
});
