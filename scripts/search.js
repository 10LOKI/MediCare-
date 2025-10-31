const rechercheInput = document.getElementById('search');
const medecinCartes = document.querySelectorAll('.doctor-card');
// Event listener 
searchInput.addEventListener('keyup', (event_r) =>
{
    const rechTerme = event_r.target.value.toLowerCase();
    medecinCartes.forEach(card => 
    {
        const medcinNom = card.querySelector('h4').textContent.toLowerCase();
        const medcinSpecialite = card.querySelector('.doctor-specialty').textContent.toLowerCase();
        if (medcinNom.includes(rechTerme) || medcinSpecialite.includes(rechTerme))
        {
            card.style.display = 'flex';
        }
        else
        {
            card.style.display = 'none';
        }
    }
    );
});