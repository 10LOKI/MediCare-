document.addEventListener('DOMContentLoaded', () => {
    const medecinsData = [
        { image: "../images/doc1.jpg", nom: "Dr. Said Fetah", specialite: "Cardiologue", disponible: true },
        { image: "../images/doc2.jpg", nom: "Dr. Mehdi Mouhib", specialite: "Pédiatre", disponible: true },
        { image: "../images/doc3.jpg", nom: "Dr. Karim Saidi", specialite: "Dermatologue", disponible: false },
        { image: "../images/doc4.jpg", nom: "Dr. Youssef Benjelloun", specialite: "Médecin généraliste", disponible: true },
        { image: "../images/doc5.jpg", nom: "Dr. Houssam Miqri", specialite: "Ophtalmologue", disponible: false },
        { image: "../images/doc6.jpg", nom: "Dr. Lamia El Fassi", specialite: "Gynécologue", disponible: true },
        { image: "../images/doc7.jpg", nom: "Dr. Loubna Sari3a", specialite: "Neurologue", disponible: false },
        { image: "../images/doc8.jpg", nom: "Dr. Hmida Lamba", specialite: "Dentiste", disponible: true }
    ];

    const cardsContainer = document.querySelector('.cards');
    const filtreSpecialite = document.getElementById('filtre-specialite');
    const filtreDispo = document.getElementById('filtre-dispo');

    function afficherMedecins(medecins) {
        cardsContainer.innerHTML = '';
        medecins.forEach(medecin => {
            const card = document.createElement('div');
            card.className = "doctor-card flex flex-col bg-white shadow-lg border border-slate-200 rounded-lg my-6 w-full";
            const dispoStatut = medecin.disponible 
                ? `<span class="text-green-600 font-semibold">Disponible</span>` 
                : `<span class="text-red-600 font-semibold">Indisponible</span>`;

            card.innerHTML = `
                <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
                    <img class="w-full h-full object-contain" src="${medecin.image}" alt="photo de ${medecin.nom}" />
                </div>
                <div class="p-6 text-center">
                    <h4 class="mb-1 text-xl font-semibold text-slate-800">${medecin.nom}</h4>
                    <p class="text-base text-slate-600 mt-4 font-light">Spécialité: ${medecin.specialite}</p>
                    <p class="text-base text-slate-600 mt-4 font-light">${dispoStatut}</p>
                </div>
                <div class="flex justify-center p-6 pt-2 gap-7">
                    <a href="../pages/rendez-vous.html" class="min-w-32 rounded-md bg-blue-600 hover:bg-blue-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg ${!medecin.disponible ? 'opacity-50 cursor-not-allowed' : ''}">Réserver un rendez-vous</a>
                </div>`;
            cardsContainer.appendChild(card);
        });
    }

    function appliquerFiltres() {
        const valeurSpecialite = filtreSpecialite.value;
        const afficherDispoUniquement = filtreDispo.checked;

        let medecinsFiltres = medecinsData;
        if (valeurSpecialite) {
            medecinsFiltres = medecinsFiltres.filter(medecin => medecin.specialite === valeurSpecialite);
        }
        if (afficherDispoUniquement) {
            medecinsFiltres = medecinsFiltres.filter(medecin => medecin.disponible === true);
        }

        afficherMedecins(medecinsFiltres);
    }
    
    const specialitesUniques = [...new Set(medecinsData.map(m => m.specialite))];
    specialitesUniques.forEach(specialite => {
        const option = document.createElement('option');
        option.value = specialite;
        option.textContent = specialite;
        filtreSpecialite.appendChild(option);
    });

    filtreSpecialite.addEventListener('change', appliquerFiltres);
    filtreDispo.addEventListener('change', appliquerFiltres);

    afficherMedecins(medecinsData);
});