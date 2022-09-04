const loadCountrise = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountrise(data));
}

const displayCountrise = countrise => {
    // for (const country of countrise) {
    //     console.log(country);
    // }
    const countriseContainer = document.getElementById('countries-container');
    countrise.forEach(country => {
        const countryDiv = document.createElement('div');
        console.log(country);
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Country Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onclick="loadCountryDetail('${country.cca2}')">Derails</button>
        `
        countriseContainer.appendChild(countryDiv);
    });
}

const loadCountryDetail = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = country => {
    const countryDetail = document.getElementById('country-detail');
    console.log(country);
    countryDetail.innerHTML = `
        <h2>Details: ${country.name.common}</h2>
        <img class="flags" src="${country.flags.png}">
    `
}

loadCountryDetail()

loadCountrise();