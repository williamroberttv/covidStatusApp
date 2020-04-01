const button = document.querySelector("#btn");
const divSection = document.querySelector("#result-container");
const divBrazil = document.querySelector("#brazil");
const divItalia = document.querySelector("#italia");
const divChina = document.querySelector("#china");
const divDeaths = document.querySelector("#deaths");
const divSuspects = document.querySelector("#suspects");
const divCases = document.querySelector("#cases");
const divTitle = document.querySelector("#countries-title");
const divDate = document.querySelector("#date");

function createCountries(
  cases,
  deaths,
  suspects,
  icases,
  ideaths,
  isuspects,
  ccases,
  cdeaths,
  csuspects
) {
  const covidTitle = document.createElement("h3");
  covidTitle.innerHTML = "Covid-19 no Mundo";

  const brazilText = document.createElement("h3");
  brazilText.innerHTML = "BRASIL";
  const countryBrazilCases = document.createElement("p");
  countryBrazilCases.innerHTML = `Casos: ${cases}`;
  const countryBrazilDeaths = document.createElement("p");
  countryBrazilDeaths.innerHTML = `Mortes: ${deaths}`;
  const countryBrazilSuspects = document.createElement("p");
  countryBrazilSuspects.innerHTML = `Recuperados: ${suspects}`;

  const italiaText = document.createElement("h3");
  italiaText.innerHTML = "ITÁLIA";
  const countryItaliaCases = document.createElement("p");
  countryItaliaCases.innerHTML = `Casos: ${icases}`;
  const countryItaliaDeaths = document.createElement("p");
  countryItaliaDeaths.innerHTML = `Mortes: ${ideaths}`;
  const countryItaliaSuspects = document.createElement("p");
  countryItaliaSuspects.innerHTML = `Recuperados: ${isuspects}`;

  const chinaText = document.createElement("h3");
  chinaText.innerHTML = "CHINA";
  const countryChinaCases = document.createElement("p");
  countryChinaCases.innerHTML = `Casos: ${ccases}`;
  const countryChinaDeaths = document.createElement("p");
  countryChinaDeaths.innerHTML = `Mortes: ${cdeaths}`;
  const countryChinaSuspects = document.createElement("p");
  countryChinaSuspects.innerHTML = `Recuperados: ${csuspects}`;

  divTitle.innerHTML = "";
  divBrazil.innerHTML = "";
  divItalia.innerHTML = "";
  divChina.innerHTML = "";

  divTitle.appendChild(covidTitle);
  divBrazil.appendChild(brazilText);
  divBrazil.appendChild(countryBrazilCases);
  divBrazil.appendChild(countryBrazilDeaths);
  divBrazil.appendChild(countryBrazilSuspects);
  divItalia.appendChild(italiaText);
  divItalia.appendChild(countryItaliaCases);
  divItalia.appendChild(countryItaliaDeaths);
  divItalia.appendChild(countryItaliaSuspects);
  divChina.appendChild(chinaText);
  divChina.appendChild(countryChinaCases);
  divChina.appendChild(countryChinaDeaths);
  divChina.appendChild(countryChinaSuspects);
}

button.addEventListener("click", requisicao);
function createResult(covidStates, covidDeaths, covidCases, covidSuspects, date) {
  const cases = document.createElement("p");
  const casesLogo = document.createElement("img");
  casesLogo.setAttribute(
    "src",
    "/assets/coronavirus.svg"
  );
  cases.innerHTML = `${covidStates} tem ${covidCases} casos confirmados.`;

  const deaths = document.createElement("p");
  const deathLogo = document.createElement("img");
  deathLogo.setAttribute(
    "src",
    "/assets/rip.svg"
  );
  deaths.innerHTML = `O número de mortes é ${covidDeaths}.`; //${deathLogo}.`;

  const suspectLogo = document.createElement("img");
  suspectLogo.setAttribute(
    "src",
    "/assets/attention.svg"
  );
  const suspects = document.createElement("p");
  suspects.innerHTML = `${covidSuspects} casos são suspeitos.`; //${suspectLogo};
  
  const dateTime = document.createElement("p");
  const dateTransform = new Date(date);
  dateTime.innerHTML = `Última atualização em : ${dateTransform}`;

  divDate.innerHTML = "";
  divCases.innerHTML = "";
  divSuspects.innerHTML = "";
  divDeaths.innerHTML = "";
  
  divDate.appendChild(dateTime);
  divCases.appendChild(cases);
  divCases.appendChild(casesLogo);
  divDeaths.appendChild(deaths);
  divDeaths.append(deathLogo);
  divSuspects.appendChild(suspects);
  divSuspects.append(suspectLogo);
}

function requisicao() {
  let uf = document.querySelector("select").value;
  fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`)
    .then(function(response) {
      return response.json();
    })
    .then(jsonBody => {
      createResult(
        jsonBody.state,
        jsonBody.deaths,
        jsonBody.cases,
        jsonBody.suspects,
        jsonBody.datetime
      );
      console.log(jsonBody);
    });
}

function requestApi() {
  fetch("https://covid19-brazil-api.now.sh/api/report/v1/countries")
    .then(function(response) {
      return response.json();
    })
    .then(jsonCountr => {
      createCountries(
        jsonCountr.data[39].cases,
        jsonCountr.data[39].deaths,
        jsonCountr.data[39].recovered,
        jsonCountr.data[10].cases,
        jsonCountr.data[10].deaths,
        jsonCountr.data[10].recovered,
        jsonCountr.data[3].cases,
        jsonCountr.data[3].deaths,
        jsonCountr.data[3].recovered
      );
    });
}

requestApi();
