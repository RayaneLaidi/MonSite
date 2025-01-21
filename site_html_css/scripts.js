function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }

// Sélectionner tous les onglets et les sections
/*const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');

// Ajouter un gestionnaire d'événement pour chaque onglet
tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    // Retirer la classe 'tab-active' de tous les onglets
    tabs.forEach(tab => {
      tab.classList.remove('tab-active');
    });

    // Ajouter la classe 'tab-active' à l'onglet cliqué
    this.classList.add('tab-active');

    // Retirer la classe 'active' de toutes les sections
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Récupérer la classe de l'onglet cliqué (ex: 'tab-content1')
    if (this.classList.contains('tab-content1')) {
      document.querySelector('.content1').classList.add('active');
    } else if (this.classList.contains('tab-content2')) {
      document.querySelector('.content2').classList.add('active');
    } else if (this.classList.contains('tab-content3')) {
      document.querySelector('.content3').classList.add('active');
    }
  });
});
*/
// Sélectionner tous les onglets et les sections
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');

// Ajouter un gestionnaire d'événement pour chaque onglet
tabs.forEach((tab, index) => {
  tab.addEventListener('click', function () {
    // Retirer la classe 'tab-active' de tous les onglets
    tabs.forEach(tab => tab.classList.remove('tab-active'));

    // Ajouter la classe 'tab-active' à l'onglet cliqué
    this.classList.add('tab-active');

    // Masquer toutes les sections
    sections.forEach(section => section.classList.remove('active'));

    // Afficher la section correspondant à l'onglet cliqué
    sections[index].classList.add('active');
  });
});
