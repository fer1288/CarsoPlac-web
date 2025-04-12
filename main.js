document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const images = [
        './slider/foto.jpg', // Reemplaza con tus rutas de imágenes
        './slider/foto2.jpg',
        './slider/foto3.jpg'
    ];
    let currentImage = 0;

    function changeBackground() {
        const img = document.createElement('img');
        img.src = images[currentImage];
        img.classList.add('active');
        header.appendChild(img);

        if (header.children.length > 3) { // Asegura que solo haya 3 imágenes a la vez
            setTimeout(() => {
                header.removeChild(header.children[2]); // Elimina la imagen más antigua
            }, 1000); // Espera a que termine la transición
        }

        currentImage = (currentImage + 1) % images.length;
    }

    changeBackground(); // Inicia el slider inmediatamente
    setInterval(changeBackground, 5000); // Cambia la imagen cada 5 segundos
});