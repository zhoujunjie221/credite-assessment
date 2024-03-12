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
  const heartily = [
    {
        "page": "Personal Information",
        "option": [
            {
                "title": "Full Name",
                "type": "string",
                "format": "^.{0,256}$"
            },
            {
                "title": "Age",
                "type": "number",
                "format": "^(?:[1-9]|[1-9][0-9]|100)$"
            },
            {
                "title": "Gender",
                "type": "option",
                "options": [
                    {
                        "keys": "Male",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Female",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Other",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Unwilling to provide",
                        "score": 0,
                        "amount": 0
                    }
                ]
            },
            {
                "title": "Country / Region",
                "type": "option",
                "options": [
                    {
                        "keys": "Albania",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Algeria",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Angola",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Anguilla",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Argentina",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Armenia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Aruba",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Australia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Austria",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Azerbaijan",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Bahamas",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Bahrain",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Bangladesh",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Barbados",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Belarus",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Belgium",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Belize",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Benin",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Bermuda",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Bhutan",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Bolivia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Bosnia and Herzegovina",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Botswana",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Brazil",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Brunei Darussalam",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Bulgaria",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Burkina Faso",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Burundi",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Cambodia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Cameroon",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Canada",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Cape Verde",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Cayman Islands",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Central African Rep",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Chad",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Chile",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "China (People's Rep)",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Colombia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Congo(Rep)",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Cook Islands",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Costa Rica",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Cote d'Ivoire (Rep)",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Croatia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Cyprus",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Czech (Rep)",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Dem Rep of Congo",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Denmark",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Dominica (Commonwealth of)",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Dominican Rep.",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Ecuador",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Egypt",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "El Salvador",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Eritrea",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Estonia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Ethiopia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Fiji",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Finland",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "France",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "French Polynesia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Gabon",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Georgia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Germany",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Ghana",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Gibraltar",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Greece",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Grenada",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Guatemala",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Guinea",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Guyana",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Haiti",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Honduras",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Hong Kong",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Hungary",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Iceland",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "India",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Indonesia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Iran",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Iraq",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Ireland",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Israel",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Italy",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Jamaica",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Japan",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Jordan",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Kenya",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Korea (Rep)",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Kuwait",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Lao People's Dem Rep",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Latvia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Lesotho",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Luxembourg",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Macao",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Macedonia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Madagascar",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Malawi",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Malaysia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Maldives",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Mali",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Malta",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Mauritania",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Mauritius",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Mexico",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Moldova",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Mongolia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Morocco",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Myanmar",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Namibia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Nauru",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Nepal",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Netherlands",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "New Caledonia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "New Zealand",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Niger",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Nigeria",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Norway",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Oman",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Pakistan",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Panama",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Papua New Guinea",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Paraguay",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Peru",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Philippines",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Poland",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Portugal",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Qatar",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Romania",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Russian Federation",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Rwanda",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Saint Christopher (St. Kitts) and Nevis",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Saint Lucia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Saint Vincent and the Grenadines",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Sao Tome and Principe",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Saudi Arabia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Senegal",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Seychelles",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Sierra Leone",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Singapore",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Slovakia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Slovenia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Solomon Islands",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Somalia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "South Africa",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Spain",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Sri Lanka",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Sudan",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Suriname",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Swaziland",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Sweden",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Switzerland",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Syrian Arab Rep",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Tanzania",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Thailand",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Togo",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Trinidad and Tobago",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Tunisia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Turkey",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Uganda",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Ukraine",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "United Arab Emirates",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "United Kingdom",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "United States of America",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Uruguay",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Venezuela",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Viet Nam",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Western Samoa",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Yemen",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Yugoslavia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Zambia",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Zimbabwe",
                        "score": 0,
                        "amount": 0
                    }
                ]
            }
        ]
    },
    {
        "page": "Employment Information",
        "option": [
            {
                "title": "Employment Status",
                "type": "option",
                "options": [
                    {
                        "keys": "Full-time",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Part-time",
                        "score": 4,
                        "amount": 150
                    },
                    {
                        "keys": "Self-employed",
                        "score": 3,
                        "amount": 100
                    },
                    {
                        "keys": "Unemployed",
                        "score": 2,
                        "amount": 50
                    },
                    {
                        "keys": "Student",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Retired",
                        "score": 1,
                        "amount": 0
                    }
                ]
            },
            {
                "title": "Employer",
                "type": "option",
                "options": [
                    {
                        "keys": "Administrative/Office Support",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Arts/Entertainment/Media",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Business/Finance",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Education/Training",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Engineering/Architecture",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Healthcare/Medical",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Hospitality/Tourism",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Information Technology",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Legal",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Manufacturing/Production",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Sales/Marketing",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Science/Research",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Skilled Trades",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Other",
                        "score": 5,
                        "amount": 200
                    }
                ]
            },
            {
                "title": "Position",
                "type": "option",
                "options": [
                    {
                        "keys": "Manager/Supervisor",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Assistant/Associate",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Specialist/Analyst",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Technician",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Engineer",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Nurse",
                        "score": 4,
                        "amount": 150
                    },
                    {
                        "keys": "Doctor/Physician",
                        "score": 4,
                        "amount": 150
                    },
                    {
                        "keys": "Teacher/Professor",
                        "score": 4,
                        "amount": 150
                    },
                    {
                        "keys": "Sales Representative",
                        "score": 4,
                        "amount": 150
                    },
                    {
                        "keys": "Consultant",
                        "score": 4,
                        "amount": 150
                    },
                    {
                        "keys": "Accountant",
                        "score": 4,
                        "amount": 150
                    },
                    {
                        "keys": "Artist/Designer",
                        "score": 4,
                        "amount": 150
                    },
                    {
                        "keys": "Writer/Editor",
                        "score": 4,
                        "amount": 150
                    },
                    {
                        "keys": "Driver",
                        "score": 4,
                        "amount": 150
                    },
                    {
                        "keys": "Other",
                        "score": 4,
                        "amount": 150
                    }
                ]
            },
            {
                "title": "Years of Employment",
                "type": "option",
                "options": [
                    {
                        "keys": "< 1 Year",
                        "score": 1,
                        "amount": 50
                    },
                    {
                        "keys": "1 - 3 Years",
                        "score": 2,
                        "amount": 100
                    },
                    {
                        "keys": "3 - 5 Years",
                        "score": 3,
                        "amount": 150
                    },
                    {
                        "keys": "5 - 10 Years",
                        "score": 4,
                        "amount": 200
                    },
                    {
                        "keys": ">10 Years",
                        "score": 5,
                        "amount": 200
                    }
                ]
            },
            {
                "title": "Average Monthly Income($)",
                "type": "option",
                "options": [
                    {
                        "keys": "< 500 USD",
                        "score": 1,
                        "amount": 5
                    },
                    {
                        "keys": "500 - 1000 USD",
                        "score": 2,
                        "amount": 100
                    },
                    {
                        "keys": "1000 - 2000 USD",
                        "score": 3,
                        "amount": 150
                    },
                    {
                        "keys": "2000 - 5000 USD",
                        "score": 4,
                        "amount": 200
                    },
                    {
                        "keys": ">5000 USD",
                        "score": 5,
                        "amount": 250
                    }
                ]
            }
        ]
    },
    {
        "page": "Residential Information",
        "option": [
            {
                "title": "Housing Type",
                "type": "option",
                "options": [
                    {
                        "keys": "Renting",
                        "score": 1,
                        "amount": 50
                    },
                    {
                        "keys": "Owning Property",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Living with Family",
                        "score": 3,
                        "amount": 150
                    }
                ]
            },
            {
                "title": "Length of Residence",
                "type": "option",
                "options": [
                    {
                        "keys": "Less than 6 months",
                        "score": 1,
                        "amount": 50
                    },
                    {
                        "keys": "6 months to 1 year",
                        "score": 2,
                        "amount": 100
                    },
                    {
                        "keys": "1 year to 3 years",
                        "score": 3,
                        "amount": 150
                    },
                    {
                        "keys": "3 years to 5 years",
                        "score": 4,
                        "amount": 200
                    },
                    {
                        "keys": "More than 5 years",
                        "score": 5,
                        "amount": 200
                    }
                ]
            },
            {
                "title": "Monthly Rent / Mortgage Payment Amount($)",
                "type": "option",
                "options": [
                    {
                        "keys": "Less than $500",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "$500 - $1,000",
                        "score": 1,
                        "amount": 50
                    },
                    {
                        "keys": "$1,000 - $1,500",
                        "score": 2,
                        "amount": 100
                    },
                    {
                        "keys": "$1,500 - $2,000",
                        "score": 3,
                        "amount": 150
                    },
                    {
                        "keys": "$2,000 - $2,500",
                        "score": 4,
                        "amount": 200
                    },
                    {
                        "keys": "$2,500 or more",
                        "score": 5,
                        "amount": 250
                    }
                ]
            },
            {
                "title": "Property Appraisal Value (if applicable)",
                "type": "option",
                "options": [
                    {
                        "keys": "Not applicable",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Less than $100,000",
                        "score": 1,
                        "amount": 50
                    },
                    {
                        "keys": "$100,000 - $200,000",
                        "score": 2,
                        "amount": 100
                    },
                    {
                        "keys": "$200,000 - $300,000",
                        "score": 3,
                        "amount": 150
                    },
                    {
                        "keys": "$300,000 - $500,000",
                        "score": 4,
                        "amount": 200
                    },
                    {
                        "keys": "$500,000 or more",
                        "score": 5,
                        "amount": 250
                    }
                ]
            }
        ]
    },
    {
        "page": "Financial Status",
        "option": [
            {
                "title": "Regular Expenses (Monthly)",
                "type": "option",
                "options": [
                    {
                        "keys": "Living Expenses (Food, Household Items, etc.)",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Utilities (Water, Electricity, etc.)",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Transportation Expenses",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Communication Expenses (Phone, Internet, etc.)",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Debt Repayments (Credit Cards, Loans, etc.)",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Tuition Fees (if applicable)",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Other",
                        "score": 0,
                        "amount": 0
                    }
                ]
            },
            {
                "title": "Debt Situation",
                "type": "option",
                "options": [
                    {
                        "keys": "Total Credit Card Debt",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Loan Balances",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Other Liabilities",
                        "score": 5,
                        "amount": 200
                    }
                ]
            },
            {
                "title": "Savings Amount($)",
                "type": "number",
                "format": "^.{1,7}$"
            },
            {
                "title": "Amount of Investments($)",
                "type": "number",
                "format": "^.{1,7}$"
            }
        ]
    },
    {
        "page": "Credit Card Usage",
        "option": [
            {
                "title": "Number of Credit Cards Owned",
                "type": "option",
                "options": [
                    {
                        "keys": "None",
                        "score": 1,
                        "amount": 50
                    },
                    {
                        "keys": "1",
                        "score": 3,
                        "amount": 100
                    },
                    {
                        "keys": "2",
                        "score": 4,
                        "amount": 150
                    },
                    {
                        "keys": "3",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "4",
                        "score": 3,
                        "amount": 100
                    },
                    {
                        "keys": "5 or more",
                        "score": 1,
                        "amount": 50
                    }
                ]
            },
            {
                "title": "Credit Limits on Each Card",
                "type": "option",
                "options": [
                    {
                        "keys": "None",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "Less than $1,000",
                        "score": 1,
                        "amount": 160
                    },
                    {
                        "keys": "$1,000 - $5,000",
                        "score": 2,
                        "amount": 300
                    },
                    {
                        "keys": "$5,000 - $10,000",
                        "score": 3,
                        "amount": 800
                    },
                    {
                        "keys": "$10,000 - $20,000",
                        "score": 4,
                        "amount": 1000
                    },
                    {
                        "keys": "$20,000 or more",
                        "score": 5,
                        "amount": 2000
                    }
                ]
            },
            {
                "title": "Recent History of Late Payments",
                "type": "option",
                "options": [
                    {
                        "keys": "Yes",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "No",
                        "score": 5,
                        "amount": 200
                    }
                ]
            },
            {
                "title": "Instances of Exceeding Credit Limits",
                "type": "option",
                "options": [
                    {
                        "keys": "Yes",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "No",
                        "score": 3,
                        "amount": 100
                    }
                ]
            }
        ]
    },
    {
        "page": "Loan Repayment Records",
        "option": [
            {
                "title": "Recent Loan Repayment History",
                "type": "option",
                "options": [
                    {
                        "keys": "Good",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Fair",
                        "score": 3,
                        "amount": 100
                    },
                    {
                        "keys": "Poor",
                        "score": 0,
                        "amount": 0
                    }
                ]
            },
            {
                "title": "Instances of Late Loan Payment",
                "type": "option",
                "options": [
                    {
                        "keys": "No",
                        "score": 5,
                        "amount": 200
                    },
                    {
                        "keys": "Yes",
                        "score": 3,
                        "amount": 100
                    }
                ]
            }
        ]
    },
    {
        "page": "Other Credit-related Information",
        "option": [
            {
                "title": "History of Bankruptcy Filings",
                "type": "option",
                "options": [
                    {
                        "keys": "Yes",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "No",
                        "score": 5,
                        "amount": 200
                    }
                ]
            },
            {
                "title": "Records of Judgments",
                "type": "option",
                "options": [
                    {
                        "keys": "Yes",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "No",
                        "score": 5,
                        "amount": 200
                    }
                ]
            },
            {
                "title": "Records of Default",
                "type": "option",
                "options": [
                    {
                        "keys": "Yes",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "No",
                        "score": 5,
                        "amount": 200
                    }
                ]
            },
            {
                "title": "Records of Fraud",
                "type": "option",
                "options": [
                    {
                        "keys": "Yes",
                        "score": 0,
                        "amount": 0
                    },
                    {
                        "keys": "No",
                        "score": 5,
                        "amount": 200
                    }
                ]
            }
        ]
    }
]

  return new Response(JSON.stringify({ heartily, conquests: 'success', smitten: 0 }), {
    headers: { 'content-type': 'application/json' }
  })
}