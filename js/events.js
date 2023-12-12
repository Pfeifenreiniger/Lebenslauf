// aktuellen Monat und Jahr
const currentDate = new Date();
const options = { month: 'long', year: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('de-DE', options);
document.getElementById('aktuellesDatum').textContent = formattedDate;