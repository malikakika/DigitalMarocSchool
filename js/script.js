window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('myBtn').addEventListener('click', scrollToTop);

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }

    // Ajoutez le script Bootstrap Validator
    $('#contactForm').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            // Formulaires non valides
        } else {
            // Formulaires valides, traitez le formulaire ici
            e.preventDefault();
            // Vous pouvez ajouter une logique d'envoi par AJAX ici
            submitForm();
        }
    });


    function validateForm() {
    validator.validate(document.getElementById('contactForm'));
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    validateForm();
});
    function submitForm() {
        // Récupérez les données du formulaire ici
        var formData = {
            nom: $('#fullName').val(),
            prenom: $('#prenom').val(),
            tel: $('#phoneNumber').val(),
            email: $('#email').val(),
            // Ajoutez d'autres champs si nécessaire
        };

        // Exemple d'envoi des données du formulaire par AJAX
        $.ajax({
            url: '/votre-URL-de-traitement',
            type: 'POST',
            data: formData,
            success: function (response) {
                // Traitement réussi, affichez une confirmation ou redirigez l'utilisateur
                console.log(response);
            },
            error: function (error) {
                // Erreur lors de l'envoi des données du formulaire
                console.error(error);
            }
        });
    }

    

});
document.addEventListener('DOMContentLoaded', function() {
    const text = document.getElementById('typing-text').textContent;
    document.getElementById('typing-text').textContent = '';

    function type() {
        let i = 0;
        return function() {
            if (i < text.length) {
                document.getElementById('typing-text').textContent += text.charAt(i);
                i++;
            } else {
                document.getElementById('typing-text').textContent = '';
                i = 0;
            }
        };
    }

    const typeText = type();

    // Ajustez la vitesse de frappe ici (en millisecondes)
    const typingInterval = setInterval(typeText, 100);

});
