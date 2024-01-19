document.addEventListener('DOMContentLoaded', function () {
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

    // Change navbar color on scroll
    var nav = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled-nav');
        } else {
            nav.classList.remove('scrolled-nav');
        }
    });

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

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }

    // Ajoutez le script Bootstrap Validator
    $('#contactForm').validator({
        custom: {
            // Définissez vos règles de validation personnalisées ici
        },
        errors: {
            delay: 300, // Délai avant l'affichage des messages d'erreur
            custom: 'Une erreur est survenue lors de la validation du formulaire.', // Message générique en cas d'erreur
            pattern: 'La valeur de ce champ est incorrecte.', // Message générique pour les champs pattern
        },
    }).on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            e.preventDefault();
            submitForm();
        }
    });

    // Traitement de la logique d'envoi par AJAX
    function submitForm() {
        // Récupérez les données du formulaire ici
        var formData = {
            nom: $('#fullName').val(),
            tel: $('#phoneNumber').val(),
            email: $('#email').val(),
            message: $('#message').val(),
            // Ajoutez d'autres champs si nécessaire
        };

        // Exemple d'envoi des données du formulaire par AJAX
        $.ajax({
            url: 'form.php', // Utilisez le chemin correct vers votre script de traitement PHP
            type: 'POST',
            data: formData,
            success: function (response) {
                // Traitement réussi, affichez une confirmation ou redirigez l'utilisateur
                console.log(response);

                // Afficher une notification SweetAlert2
                Swal.fire({
                    icon: 'success',
                    title: 'Email envoyé avec succès!',
                    text: 'Nous vous répondrons dès que possible.',
                    background: 'white',  // Couleur de fond
                    confirmButtonColor: '#107717',  // Couleur du bouton de confirmation
                    confirmButtonText: 'OK',  // Texte du bouton de confirmation
                    customClass: {
                        title: 'my-swal-title',  // Classe CSS pour le titre
                        content: 'my-swal-content',  // Classe CSS pour le contenu
                        confirmButton: 'my-swal-confirm-button',  // Classe CSS pour le bouton de confirmation
                    },
                });

                // Réinitialiser le formulaire après l'envoi réussi
                $('#contactForm')[0].reset();
            },
            error: function (error) {
                // Erreur lors de l'envoi des données du formulaire
                console.error(error);

                // Afficher une notification SweetAlert2 pour l'échec
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur lors de l\'envoi de l\'email',
                    text: 'Veuillez réessayer plus tard.',
                    background: '#white',  // Couleur de fond
                    confirmButtonColor: '#107717',  // Couleur du bouton de confirmation
                    confirmButtonText: 'OK',  // Texte du bouton de confirmation
                    customClass: {
                        title: 'my-swal-title',  // Classe CSS pour le titre
                        content: 'my-swal-content',  // Classe CSS pour le contenu
                        confirmButton: 'my-swal-confirm-button',  // Classe CSS pour le bouton de confirmation
                    },
                });
            }
        });
    }
});
