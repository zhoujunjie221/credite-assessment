/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const data = [
      {
          "dananow-page": "Personal Information",
          "dananow-content": [
              {
                  "dananow-title": "Full Name",
                  "dananow-type": "string",
                  "format": "^.{0,256}$"
              },
              {
                  "dananow-title": "Age",
                  "dananow-type": "number",
                  "format": "^(?:[1-9]|[1-9][0-9]|100)$"
              },
              {
                  "dananow-title": "Gender",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Male",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Female",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Other",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Unwilling to provide",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      }
                  ]
              },
              {
                  "dananow-title": "Country / Region",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Albania",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Algeria",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Angola",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Anguilla",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Argentina",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Armenia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Aruba",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Australia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Austria",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Azerbaijan",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Bahamas",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Bahrain",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Bangladesh",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Barbados",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Belarus",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Belgium",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Belize",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Benin",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Bermuda",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Bhutan",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Bolivia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Bosnia and Herzegovina",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Botswana",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Brazil",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Brunei Darussalam",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Bulgaria",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Burkina Faso",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Burundi",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Cambodia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Cameroon",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Canada",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Cape Verde",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Cayman Islands",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Central African Rep",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Chad",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Chile",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "China (People's Rep)",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Colombia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Congo(Rep)",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Cook Islands",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Costa Rica",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Cote d'Ivoire (Rep)",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Croatia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Cyprus",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Czech (Rep)",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Dem Rep of Congo",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Denmark",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Dominica (Commonwealth of)",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Dominican Rep.",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Ecuador",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Egypt",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "El Salvador",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Eritrea",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Estonia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Ethiopia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Fiji",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Finland",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "France",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "French Polynesia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Gabon",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Georgia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Germany",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Ghana",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Gibraltar",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Greece",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Grenada",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Guatemala",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Guinea",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Guyana",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Haiti",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Honduras",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Hong Kong",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Hungary",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Iceland",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "India",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Indonesia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Iran",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Iraq",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Ireland",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Israel",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Italy",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Jamaica",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Japan",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Jordan",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Kenya",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Korea (Rep)",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Kuwait",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Lao People's Dem Rep",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Latvia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Lesotho",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Luxembourg",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Macao",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Macedonia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Madagascar",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Malawi",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Malaysia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Maldives",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Mali",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Malta",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Mauritania",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Mauritius",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Mexico",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Moldova",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Mongolia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Morocco",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Myanmar",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Namibia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Nauru",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Nepal",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Netherlands",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "New Caledonia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "New Zealand",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Niger",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Nigeria",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Norway",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Oman",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Pakistan",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Panama",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Papua New Guinea",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Paraguay",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Peru",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Philippines",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Poland",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Portugal",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Qatar",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Romania",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Russian Federation",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Rwanda",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Saint Christopher (St. Kitts) and Nevis",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Saint Lucia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Saint Vincent and the Grenadines",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Sao Tome and Principe",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Saudi Arabia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Senegal",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Seychelles",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Sierra Leone",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Singapore",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Slovakia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Slovenia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Solomon Islands",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Somalia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "South Africa",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Spain",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Sri Lanka",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Sudan",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Suriname",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Swaziland",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Sweden",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Switzerland",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Syrian Arab Rep",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Tanzania",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Thailand",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Togo",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Trinidad and Tobago",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Tunisia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Turkey",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Uganda",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Ukraine",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "United Arab Emirates",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "United Kingdom",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "United States of America",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Uruguay",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Venezuela",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Viet Nam",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Western Samoa",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Yemen",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Yugoslavia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Zambia",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Zimbabwe",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      }
                  ]
              }
          ]
      },
      {
          "dananow-page": "Employment Information",
          "dananow-content": [
              {
                  "dananow-title": "Employment Status",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Full-time",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Part-time",
                          "dananow-score": 4,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "Self-employed",
                          "dananow-score": 3,
                          "dananow-amount": 100
                      },
                      {
                          "dananow-keys": "Unemployed",
                          "dananow-score": 2,
                          "dananow-amount": 50
                      },
                      {
                          "dananow-keys": "Student",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Retired",
                          "dananow-score": 1,
                          "dananow-amount": 0
                      }
                  ]
              },
              {
                  "dananow-title": "Industry",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Administrative/Office Support",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Arts/Entertainment/Media",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Business/Finance",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Education/Training",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Engineering/Architecture",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Healthcare/Medical",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Hospitality/Tourism",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Information Technology",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Legal",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Manufacturing/Production",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Sales/Marketing",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Science/Research",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Skilled Trades",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Other",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      }
                  ]
              },
              {
                  "dananow-title": "Position",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Manager/Supervisor",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Assistant/Associate",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Specialist/Analyst",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Technician",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Engineer",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Nurse",
                          "dananow-score": 4,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "Doctor/Physician",
                          "dananow-score": 4,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "Teacher/Professor",
                          "dananow-score": 4,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "Sales Representative",
                          "dananow-score": 4,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "Consultant",
                          "dananow-score": 4,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "Accountant",
                          "dananow-score": 4,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "Artist/Designer",
                          "dananow-score": 4,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "Writer/Editor",
                          "dananow-score": 4,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "Driver",
                          "dananow-score": 4,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "Other",
                          "dananow-score": 4,
                          "dananow-amount": 150
                      }
                  ]
              },
              {
                  "dananow-title": "Years of Employment",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "< 1 Year",
                          "dananow-score": 1,
                          "dananow-amount": 50
                      },
                      {
                          "dananow-keys": "1 - 3 Years",
                          "dananow-score": 2,
                          "dananow-amount": 100
                      },
                      {
                          "dananow-keys": "3 - 5 Years",
                          "dananow-score": 3,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "5 - 10 Years",
                          "dananow-score": 4,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": ">10 Years",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      }
                  ]
              },
              {
                  "dananow-title": "Monthly Income ($)",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "< 500 USD",
                          "dananow-score": 1,
                          "dananow-amount": 5
                      },
                      {
                          "dananow-keys": "500 - 1000 USD",
                          "dananow-score": 2,
                          "dananow-amount": 100
                      },
                      {
                          "dananow-keys": "1000 - 2000 USD",
                          "dananow-score": 3,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "2000 - 5000 USD",
                          "dananow-score": 4,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": ">5000 USD",
                          "dananow-score": 5,
                          "dananow-amount": 250
                      }
                  ]
              }
          ]
      },
      {
          "dananow-page": "Residential Information",
          "dananow-content": [
              {
                  "dananow-title": "Housing Type",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Renting",
                          "dananow-score": 1,
                          "dananow-amount": 50
                      },
                      {
                          "dananow-keys": "Owning Property",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Living with Family",
                          "dananow-score": 3,
                          "dananow-amount": 150
                      }
                  ]
              },
              {
                  "dananow-title": "Length of Residence",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Less than 6 months",
                          "dananow-score": 1,
                          "dananow-amount": 50
                      },
                      {
                          "dananow-keys": "6 months to 1 year",
                          "dananow-score": 2,
                          "dananow-amount": 100
                      },
                      {
                          "dananow-keys": "1 year to 3 years",
                          "dananow-score": 3,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "3 years to 5 years",
                          "dananow-score": 4,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "More than 5 years",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      }
                  ]
              },
              {
                  "dananow-title": "Monthly Rent / Mortgage Payment Amount($)",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Less than $500",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "$500 - $1,000",
                          "dananow-score": 1,
                          "dananow-amount": 50
                      },
                      {
                          "dananow-keys": "$1,000 - $1,500",
                          "dananow-score": 2,
                          "dananow-amount": 100
                      },
                      {
                          "dananow-keys": "$1,500 - $2,000",
                          "dananow-score": 3,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "$2,000 - $2,500",
                          "dananow-score": 4,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "$2,500 or more",
                          "dananow-score": 5,
                          "dananow-amount": 250
                      }
                  ]
              },
              {
                  "dananow-title": "Property Appraisal Value (if applicable)",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Not applicable",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Less than $100,000",
                          "dananow-score": 1,
                          "dananow-amount": 50
                      },
                      {
                          "dananow-keys": "$100,000 - $200,000",
                          "dananow-score": 2,
                          "dananow-amount": 100
                      },
                      {
                          "dananow-keys": "$200,000 - $300,000",
                          "dananow-score": 3,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "$300,000 - $500,000",
                          "dananow-score": 4,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "$500,000 or more",
                          "dananow-score": 5,
                          "dananow-amount": 250
                      }
                  ]
              }
          ]
      },
      {
          "dananow-page": "Financial Status",
          "dananow-content": [
              {
                  "dananow-title": "Regular Expenses (Monthly)",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Living Expenses (Food, Household Items, etc.)",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Utilities (Water, Electricity, etc.)",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Transportation Expenses",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Communication Expenses (Phone, Internet, etc.)",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Debt Repayments (Credit Cards, Loans, etc.)",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Tuition Fees (if applicable)",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Other",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      }
                  ]
              },
              {
                  "dananow-title": "Debt Situation",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Total Credit Card Debt",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Loan Balances",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Other Liabilities",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      }
                  ]
              },
              {
                  "dananow-title": "Savings Amount($)",
                  "dananow-type": "number",
                  "format": "^.{1,7}$"
              },
              {
                  "dananow-title": "Amount of Investments($)",
                  "dananow-type": "number",
                  "format": "^.{1,7}$"
              }
          ]
      },
      {
          "dananow-page": "Credit Card Usage",
          "dananow-content": [
              {
                  "dananow-title": "Number of Credit Cards Owned",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "None",
                          "dananow-score": 1,
                          "dananow-amount": 50
                      },
                      {
                          "dananow-keys": "1",
                          "dananow-score": 3,
                          "dananow-amount": 100
                      },
                      {
                          "dananow-keys": "2",
                          "dananow-score": 4,
                          "dananow-amount": 150
                      },
                      {
                          "dananow-keys": "3",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "4",
                          "dananow-score": 3,
                          "dananow-amount": 100
                      },
                      {
                          "dananow-keys": "5 or more",
                          "dananow-score": 1,
                          "dananow-amount": 50
                      }
                  ]
              },
              {
                  "dananow-title": "Credit Limits on Each Card",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "None",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "Less than $1,000",
                          "dananow-score": 1,
                          "dananow-amount": 160
                      },
                      {
                          "dananow-keys": "$1,000 - $5,000",
                          "dananow-score": 2,
                          "dananow-amount": 300
                      },
                      {
                          "dananow-keys": "$5,000 - $10,000",
                          "dananow-score": 3,
                          "dananow-amount": 800
                      },
                      {
                          "dananow-keys": "$10,000 - $20,000",
                          "dananow-score": 4,
                          "dananow-amount": 1000
                      },
                      {
                          "dananow-keys": "$20,000 or more",
                          "dananow-score": 5,
                          "dananow-amount": 2000
                      }
                  ]
              },
              {
                  "dananow-title": "Recent History of Late Payments",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Yes",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "No",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      }
                  ]
              },
              {
                  "dananow-title": "Instances of Exceeding Credit Limits",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Yes",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "No",
                          "dananow-score": 3,
                          "dananow-amount": 100
                      }
                  ]
              }
          ]
      },
      {
          "dananow-page": "Loan Repayment Records",
          "dananow-content": [
              {
                  "dananow-title": "Recent Loan Repayment History",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Good",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Fair",
                          "dananow-score": 3,
                          "dananow-amount": 100
                      },
                      {
                          "dananow-keys": "Poor",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      }
                  ]
              },
              {
                  "dananow-title": "Instances of Late Loan Payment",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "No",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      },
                      {
                          "dananow-keys": "Yes",
                          "dananow-score": 3,
                          "dananow-amount": 100
                      }
                  ]
              }
          ]
      },
      {
          "dananow-page": "Other Credit-related Information",
          "dananow-content": [
              {
                  "dananow-title": "History of Bankruptcy Filings",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Yes",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "No",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      }
                  ]
              },
              {
                  "dananow-title": "Records of Judgments",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Yes",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "No",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      }
                  ]
              },
              {
                  "dananow-title": "Records of Default",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Yes",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "No",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      }
                  ]
              },
              {
                  "dananow-title": "Records of Fraud",
                  "dananow-type": "option",
                  "dananow-options": [
                      {
                          "dananow-keys": "Yes",
                          "dananow-score": 0,
                          "dananow-amount": 0
                      },
                      {
                          "dananow-keys": "No",
                          "dananow-score": 5,
                          "dananow-amount": 200
                      }
                  ]
              }
          ]
      }
  ]
  
    return new Response(JSON.stringify({ data, status: 'success', code: 0 }), {
      headers: { 'content-type': 'application/json' }
    })
  }