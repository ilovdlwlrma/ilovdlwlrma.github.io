function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        console.log(sectionId);
        targetSection.style.display = 'block';
    }
}

self.addEventListener('fetch', (event) => {
    const preloadResponse = event.preloadResponse;
    event.waitUntil(
        preloadResponse.then(response => {
            return response || fetch(event.request);
        })
    );
    event.respondWith(
        preloadResponse.then(response => {
            return response || fetch(event.request);
        })
    );
});
