document.getElementById('wa-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const meds = document.getElementById('meds').value;
    const pharmacyNum = "923001234567"; // CHANGE THIS

    const text = `*ALI MEDICOS - NEW ORDER*%0A` +
                 `----------------------------%0A` +
                 `*Patient:* ${name}%0A` +
                 `*Contact:* ${phone}%0A` +
                 `*Medicine List:*%0A${meds}%0A` +
                 `----------------------------%0A` +
                 `_Please confirm availability and price._`;

    window.open(`https://wa.me/${pharmacyNum}?text=${text}`, '_blank');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});