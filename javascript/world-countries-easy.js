/*Map*/
var map = AmCharts.makeChart( "playdiv", {

				type: "map",
				theme: "light",
				
				dataProvider: {
					map: "worldHigh",
					areas: [ {
						title: "Albania",
						id: "AL",
						color: "#1c1c1c",
						customData: "Tirana"
					  }, {
						title: "Andorra",
						id: "AD",
						color: "#1c1c1c",
						customData: "Andorra la Vella"
					  }, {
						title: "Austria",
						id: "AT",
						color: "#1c1c1c",
						customData: "Vienna"
					  }, {
						title: "Belarus",
						id: "BY",
						color: "#1c1c1c",
						customData: "Minsk"
					  }, {
						title: "Belgium",
						id: "BE",
						color: "#1c1c1c",
						customData: "Brussels"
					  }, {
						title: "Bosnia and Herzegovina",
						id: "BA",
						color: "#1c1c1c",
						customData: "Sarajevo"
					  }, {
						title: "Bulgaria",
						id: "BG",
						color: "#1c1c1c",
						customData: "Sofia"
					  }, {
						title: "Croatia",
						id: "HR",
						color: "#1c1c1c",
						customData: "Zagreb"
					  }, {
						title: "Cyprus",
						id: "CY",
						color: "#1c1c1c",
						customData: "Nicosia"
					  }, {
						title: "Czech Republic",
						id: "CZ",
						color: "#1c1c1c",
						customData: "Prague"
					  }, {
						title: "Denmark",
						id: "DK",
						color: "#1c1c1c",
						customData: "Copenhagen"
					  }, {
						title: "Estonia",
						id: "EE",
						color: "#1c1c1c",
						customData: "Tallinn"
					  }, {
						title: "Finland",
						id: "FI",
						color: "#1c1c1c",
						customData: "Helsinki"
					  }, {
						title: "France",
						id: "FR",
						color: "#1c1c1c",
						customData: "Paris"
					  }, {
						title: "Georgia",
						id: "GE",
						color: "#1c1c1c",
						customData: "Tbilisi"
					  }, {
						title: "Germany",
						id: "DE",
						color: "#1c1c1c",
						customData: "Berlin"
					  }, {
						title: "Greece",
						id: "GR",
						color: "#1c1c1c",
						customData: "Athens"
					  }, {
						title: "Hungary",
						id: "HU",
						color: "#1c1c1c",
						customData: "Budapest"
					  }, {
						title: "Iceland",
						id: "IS",
						color: "#1c1c1c",
						customData: "Reykjavik"
					  }, {
						title: "Ireland",
						id: "IE",
						color: "#1c1c1c",
						customData: "Dublin"
					  }, {
						title: "Italy",
						id: "IT",
						color: "#1c1c1c",
						customData: "Rome"
					  }, {
						title: "Latvia",
						id: "LV",
						color: "#1c1c1c",
						customData: "Riga"
					  }, {
						title: "Liechtenstein",
						id: "LI",
						color: "#1c1c1c",
						customData: "Vaduz"
					  }, {
						title: "Lithuania",
						id: "LT",
						color: "#1c1c1c",
						customData: "Vilnius"
					  }, {
						title: "Luxembourg",
						id: "LU",
						color: "#1c1c1c",
						customData: "Luxembourg City"
					  }, {
						title: "Macedonia",
						id: "MK",
						color: "#1c1c1c",
						customData: "Skopje"
					  }, {
						title: "Malta",
						id: "MT",
						color: "#1c1c1c",
						customData: "Valletta"
					  }, {
						title: "Moldova",
						id: "MD",
						color: "#1c1c1c",
						customData: "Chisinau"
					  }, {
						title: "Monaco",
						id: "MC",
						color: "#1c1c1c",
						customData: "Monaco"
					  }, {
						title: "Montenegro",
						id: "ME",
						color: "#1c1c1c",
						customData: "Podgorica"
					  }, {
						title: "The Netherlands",
						id: "NL",
						color: "#1c1c1c",
						customData: "Amsterdam"
					  }, {
						title: "Norway",
						id: "NO",
						color: "#1c1c1c",
						customData: "Oslo"
					  }, {
						title: "Poland",
						id: "PL",
						color: "#1c1c1c",
						customData: "Krakow"
					  }, {
						title: "Portugal",
						id: "PT",
						color: "#1c1c1c",
						customData: "Lisbon"
					  }, {
						title: "Romania",
						id: "RO",
						color: "#1c1c1c",
						customData: "Bucharest"
					  }, {
						title: "San Marino",
						id: "SM",
						color: "#1c1c1c",
						customData: "San Marino"
					  }, {
						title: "Serbia",
						id: "RS",
						color: "#1c1c1c",
						customData: "Belgrade"
					  }, {
						title: "Slovakia",
						id: "SK",
						color: "#1c1c1c",
						customData: "Bratislava"
					  }, {
						title: "Slovenia",
						id: "SI",
						color: "#1c1c1c",
						customData: "Ljubljana"
					  }, {
						title: "Spain",
						id: "ES",
						color: "#1c1c1c",
						customData: "Madrid"
					  }, 
					  {
						title: "Sweden",
						id: "SE",
						color: "#1c1c1c",
						customData: "Stockholm"
					  }, 
					  {
						title: "Switzerland",
						id: "CH",
						color: "#1c1c1c",
						customData: "Bern"
					  }, 
					  {
						title: "Ukraine",
						id: "UA",
						color: "#1c1c1c",
						customData: "Kiev"
					  }, 
					  {
						title: "United Kingdom",
						id: "GB",
						color: "#1c1c1c",
						customData: "London"
					  }, 
					  {
						title: "Vatican City",
						id: "VA",
						color: "#1c1c1c",
						customData: "Vatican City"
					  }, {
						title: "Kosovo",
						id: "XK",
						color: "#1c1c1c",
						customData: "Pristina"
					  }, {
						title: "Russia",
						id: "RU",
						color: "#1c1c1c",
						customData: "Moscow"
					  }, {
						title: "Turkey",
						id: "TR",
						color: "#1c1c1c",
						customData: "Ankara"
					  }, {
						title: "Azerbaijan",
						id: "AZ",
						color: "#1c1c1c",
						customData: "Baku"
					  }, {
						title: "Armenia",
						id: "AM",
						color: "#1c1c1c",
						customData: "Yerevan"
					  }, {
						title: "Algeria",
						id: "DZ",
						color: "#1c1c1c",
						customData: "Algiers"
					  }, {
						title: "Angola",
						id: "AO",
						color: "#1c1c1c",
						customData: "Luanda"
					  }, {
						title: "Benin",
						id: "BJ",
						color: "#1c1c1c",
						customData: "Porto-Novo"
					  }, {
						title: "Botswana",
						id: "BW",
						color: "#1c1c1c",
						customData: "Gaborone"
					  }, {
						title: "Burkina Faso",
						id: "BF",
						color: "#1c1c1c",
						customData: "Ouagadougou"
					  }, {
						title: "Burundi",
						id: "BI",
						color: "#1c1c1c",
						customData: "Bujumbura"
					  }, {
						title: "Cape Verde",
						id: "CV",
						color: "#1c1c1c",
						customData: "Praia",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Cameroon",
						id: "CM",
						color: "#1c1c1c",
						customData: "Yaounde"
					  }, {
						title: "Central African Republic",
						id: "CF",
						color: "#1c1c1c",
						customData: "Bangui"
					  }, {
						title: "Democratic Republic of the Congo",
						id: "CD",
						color: "#1c1c1c",
						customData: "Kinshasa"
					  }, {
						title: "Chad",
						id: "TD",
						color: "#1c1c1c",
						customData: "N'Djamena"
					  }, {
						title: "Comoros",
						id: "KM",
						color: "#1c1c1c",
						customData: "Moroni",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Republic of the Congo",
						id: "CG",
						color: "#1c1c1c",
						customData: "Brazzaville"
					  }, {
						title: "Ivory Coast",
						id: "CI",
						color: "#1c1c1c",
						customData: "Yamoussoukro"
					  }, {
						title: "Djibouti",
						id: "DJ",
						color: "#1c1c1c",
						customData: "Djibouti"
					  }, {
						title: "Egypt",
						id: "EG",
						color: "#1c1c1c",
						customData: "Cairo"
					  }, {
						title: "Equatorial Guinea",
						id: "GQ",
						color: "#1c1c1c",
						customData: "Malabo"
					  }, {
						title: "Eritrea",
						id: "ER",
						color: "#1c1c1c",
						customData: "Asmara"
					  }, {
						title: "Ethiopia",
						id: "ET",
						color: "#1c1c1c",
						customData: "Addis Ababa"
					  }, {
						title: "Gabon",
						id: "GA",
						color: "#1c1c1c",
						customData: "Libreville"
					  }, {
						title: "Gambia",
						id: "GM",
						color: "#1c1c1c",
						customData: "Banjul"
					  }, {
						title: "Ghana",
						id: "GH",
						color: "#1c1c1c",
						customData: "Accra"
					  }, {
						title: "Guinea",
						id: "GN",
						color: "#1c1c1c",
						customData: "Conakry"
					  }, {
						title: "Guinea-Bissau",
						id: "GW",
						color: "#1c1c1c",
						customData: "Bissau"
					  }, {
						title: "Kenya",
						id: "KE",
						color: "#1c1c1c",
						customData: "Nairobi"
					  }, {
						title: "Lesotho",
						id: "LS",
						color: "#1c1c1c",
						customData: "Maseru"
					  }, {
						title: "Liberia",
						id: "LR",
						color: "#1c1c1c",
						customData: "Monrovia"
					  }, {
						title: "Libya",
						id: "LY",
						color: "#1c1c1c",
						customData: "Tripoli"
					  }, {
						title: "Madagascar",
						id: "MG",
						color: "#1c1c1c",
						customData: "Antananarivo"
					  }, {
						title: "Malawi",
						id: "MW",
						color: "#1c1c1c",
						customData: "Lilongwe"
					  }, {
						title: "Mali",
						id: "ML",
						color: "#1c1c1c",
						customData: "Bamako"
					  }, {
						title: "Mauritania",
						id: "MR",
						color: "#1c1c1c",
						customData: "Nouakchott"
					  }, {
						title: "Mauritius",
						id: "MU",
						color: "#1c1c1c",
						customData: "Port Louis",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Morocco",
						id: "MA",
						color: "#1c1c1c",
						customData: "Rabat"
					  }, {
						title: "Mozambique",
						id: "MZ",
						color: "#1c1c1c",
						customData: "Maputo"
					  }, {
						title: "Namibia",
						id: "NA",
						color: "#1c1c1c",
						customData: "Windhoek"
					  }, {
						title: "Niger",
						id: "NE",
						color: "#1c1c1c",
						customData: "Niamey"
					  }, {
						title: "Nigeria",
						id: "NG",
						color: "#1c1c1c",
						customData: "Abuja"
					  }, {
						title: "Rwanda",
						id: "RW",
						color: "#1c1c1c",
						customData: "Kigali"
					  }, {
						title: "Sao Tome and Principe",
						id: "ST",
						color: "#1c1c1c",
						customData: "Sao Tome",
						outlineColor: "#1c1c1c"
					  }, 
					  {
						title: "Senegal",
						id: "SN",
						color: "#1c1c1c",
						customData: "Dakar"
					  }, 
					  {
						title: "Seychelles",
						id: "SC",
						color: "#1c1c1c",
						customData: "Victoria",
						outlineColor: "#1c1c1c"
					  }, 
					  {
						title: "Sierra Leone",
						id: "SL",
						color: "#1c1c1c",
						customData: "Freetown"
					  }, 
					  {
						title: "Somalia",
						id: "SO",
						color: "#1c1c1c",
						customData: "Mogadishu"
					  }, 
					  {
						title: "South Africa",
						id: "ZA",
						color: "#1c1c1c",
						customData: "Cape Town"
					  }, {
						title: "South Sudan",
						id: "SS",
						color: "#1c1c1c",
						customData: "Juba"
					  }, {
						title: "Sudan",
						id: "SD",
						color: "#1c1c1c",
						customData: "Khartoum"
					  }, {
						title: "Swaziland",
						id: "SZ",
						color: "#1c1c1c",
						customData: "Mbabane"
					  }, {
						title: "Tanzania",
						id: "TZ",
						color: "#1c1c1c",
						customData: "Dodoma"
					  }, {
						title: "Togo",
						id: "TG",
						color: "#1c1c1c",
						customData: "Lome"
					  }, {
						title: "Tunisia",
						id: "TN",
						color: "#1c1c1c",
						customData: "Tunis"
					  }, {
						title: "Uganda",
						id: "UG",
						color: "#1c1c1c",
						customData: "Kampala"
					  }, {
						title: "Zambia",
						id: "ZM",
						color: "#1c1c1c",
						customData: "Lusaka"
					  }, {
						title: "Zimbabwe",
						id: "ZW",
						color: "#1c1c1c",
						customData: "Harare"
					  }, {
						title: "Afghanistan",
						id: "AF",
						color: "#1c1c1c",
						customData: "Kabul"
					  }, {
						title: "Bahrain",
						id: "BH",
						color: "#1c1c1c",
						customData: "Manama",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Bangladesh",
						id: "BD",
						color: "#1c1c1c",
						customData: "Dhaka"
					  }, {
						title: "Bhutan",
						id: "BT",
						color: "#1c1c1c",
						customData: "Thimphu"
					  }, {
						title: "Brunei",
						id: "BN",
						color: "#1c1c1c",
						customData: "Bandar Seri Begawan",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Cambodia",
						id: "KH",
						color: "#1c1c1c",
						customData: "Phnom Penh"
					  }, {
						title: "China",
						id: "CN",
						color: "#1c1c1c",
						customData: "Beijing"
					  }, {
						title: "India",
						id: "IN",
						color: "#1c1c1c",
						customData: "New Delhi"
					  }, {
						title: "Indonesia",
						id: "ID",
						color: "#1c1c1c",
						customData: "Jakarta"
					  }, {
						title: "Iran",
						id: "IR",
						color: "#1c1c1c",
						customData: "Tehran"
					  }, {
						title: "Iraq",
						id: "IQ",
						color: "#1c1c1c",
						customData: "Baghdad"
					  }, {
						title: "Israel",
						id: "IL",
						color: "#1c1c1c",
						customData: "Jerusalem"
					  }, {
						title: "Japan",
						id: "JP",
						color: "#1c1c1c",
						customData: "Tokyo"
					  }, {
						title: "Jordan",
						id: "JO",
						color: "#1c1c1c",
						customData: "Amman"
					  }, {
						title: "Kazakhstan",
						id: "KZ",
						color: "#1c1c1c",
						customData: "Astana"
					  }, {
						title: "Kuwait",
						id: "KW",
						color: "#1c1c1c",
						customData: "Kuwait City"
					  }, {
						title: "Kyrgyzstan",
						id: "KG",
						color: "#1c1c1c",
						customData: "Bishkek"
					  }, {
						title: "Laos",
						id: "LA",
						color: "#1c1c1c",
						customData: "Vientiane"
					  }, {
						title: "Lebanon",
						id: "LB",
						color: "#1c1c1c",
						customData: "Beirut"
					  }, {
						title: "Malaysia",
						id: "MY",
						color: "#1c1c1c",
						customData: "Kuala Lumpur"
					  }, {
						title: "Maldives",
						id: "MV",
						color: "#1c1c1c",
						customData: "Male",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Mongolia",
						id: "MN",
						color: "#1c1c1c",
						customData: "Ulan Bator"
					  }, {
						title: "Myanmar",
						id: "MM",
						color: "#1c1c1c",
						customData: "Naypyidaw"
					  }, {
						title: "Nepal",
						id: "NP",
						color: "#1c1c1c",
						customData: "Kathmandu"
					  }, {
						title: "North Korea",
						id: "KP",
						color: "#1c1c1c",
						customData: "Pyongyang"
					  }, {
						title: "Oman",
						id: "OM",
						color: "#1c1c1c",
						customData: "Muscat"
					  }, {
						title: "Pakistan",
						id: "PK",
						color: "#1c1c1c",
						customData: "Islamabad"
					  }, {
						title: "Palestine",
						id: "PS",
						color: "#1c1c1c",
						customData: "Ramallah"
					  }, {
						title: "The Philippines",
						id: "PH",
						color: "#1c1c1c",
						customData: "Manila"
					  }, {
						title: "Qatar",
						id: "QA",
						color: "#1c1c1c",
						customData: "Doha",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Saudi Arabia",
						id: "SA",
						color: "#1c1c1c",
						customData: "Riyadh"
					  }, {
						title: "Singapore",
						id: "SG",
						color: "#1c1c1c",
						customData: "Singapore",
						outlineColor: "#1c1c1c"
					  }, {
						title: "South Korea",
						id: "KR",
						color: "#1c1c1c",
						customData: "Seoul"
					  }, {
						title: "Sri Lanka",
						id: "LK",
						color: "#1c1c1c",
						customData: "Colombo"
					  }, {
						title: "Syria",
						id: "SY",
						color: "#1c1c1c",
						customData: "Damascus"
					  }, {
						title: "Taiwan",
						id: "TW",
						color: "#1c1c1c",
						customData: "Taipei"
					  }, {
						title: "Tajikistan",
						id: "TJ",
						color: "#1c1c1c",
						customData: "Dushanbe"
					  }, {
						title: "Thailand",
						id: "TH",
						color: "#1c1c1c",
						customData: "Bangkok"
					  }, {
						title: "Timor-Leste",
						id: "TL",
						color: "#1c1c1c",
						customData: "Dili"
					  }, 
					  {
						title: "Turkmenistan",
						id: "TM",
						color: "#1c1c1c",
						customData: "Ashgabat"
					  }, 
					  {
						title: "United Arab Emirates",
						id: "AE",
						color: "#1c1c1c",
						customData: "Abu Dhabi"
					  }, 
					  {
						title: "Uzbekistan",
						id: "UZ",
						color: "#1c1c1c",
						customData: "Tashkent"
					  }, {
						title: "Vietnam",
						id: "VN",
						color: "#1c1c1c",
						customData: "Hanoi"
					  }, {
						title: "Yemen",
						id: "YE",
						color: "#1c1c1c",
						customData: "Sana'a"
					  }, {
						title: "United States of America",
						id: "US",
						color: "#1c1c1c",
						customData: "Washington D.C."
					  }, {
						title: "Canada",
						id: "CA",
						color: "#1c1c1c",
						customData: "Ottawa"
					  }, {
						title: "Mexico",
						id: "MX",
						color: "#1c1c1c",
						customData: "Mexico City"
					  }, {
						title: "Antigua and Barbuda",
						id: "AG",
						color: "#1c1c1c",
						customData: "St. John's",
						outlineColor: "#1c1c1c"
					  }, {
						title: "The Bahamas",
						id: "BS",
						color: "#1c1c1c",
						customData: "Nassau",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Barbados",
						id: "BB",
						color: "#1c1c1c",
						customData: "Bridgetown",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Belize",
						id: "BZ",
						color: "#1c1c1c",
						customData: "Belmopan"
					  }, {
						title: "Costa Rica",
						id: "CR",
						color: "#1c1c1c",
						customData: "San Jose"
					  }, {
						title: "Cuba",
						id: "CU",
						color: "#1c1c1c",
						customData: "Havana"
					  }, {
						title: "Dominica",
						id: "DM",
						color: "#1c1c1c",
						customData: "Roseau",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Dominican Republic",
						id: "DO",
						color: "#1c1c1c",
						customData: "Santo Domingo"
					  }, {
						title: "El Salvador",
						id: "SV",
						color: "#1c1c1c",
						customData: "San Salvador"
					  }, {
						title: "Grenada",
						id: "GD",
						color: "#1c1c1c",
						customData: "St. George's",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Guatemala",
						id: "GT",
						color: "#1c1c1c",
						customData: "Guatemala City"
					  }, {
						title: "Haiti",
						id: "HT",
						color: "#1c1c1c",
						customData: "Port-au-Prince"
					  }, {
						title: "Honduras",
						id: "HN",
						color: "#1c1c1c",
						customData: "Tegucigalpa"
					  }, {
						title: "Jamaica",
						id: "JM",
						color: "#1c1c1c",
						customData: "Kingston",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Nicaragua",
						id: "NI",
						color: "#1c1c1c",
						customData: "Managua"
					  }, {
						title: "Panama",
						id: "PA",
						color: "#1c1c1c",
						customData: "Panama City"
					  }, {
						title: "Saint Kitts and Nevis",
						id: "KN",
						color: "#1c1c1c",
						customData: "Basseterre",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Saint Lucia",
						id: "LC",
						color: "#1c1c1c",
						customData: "Castries",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Saint Vincent and the Grenadines",
						id: "VC",
						color: "#1c1c1c",
						customData: "Kingstown",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Trinidad and Tobago",
						id: "TT",
						color: "#1c1c1c",
						customData: "Port of Spain",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Australia",
						id: "AU",
						color: "#1c1c1c",
						customData: "Canberra"
					  }, {
						title: "Fiji",
						id: "FJ",
						color: "#1c1c1c",
						customData: "Suva",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Kiribati",
						id: "KI",
						color: "#1c1c1c",
						customData: "South Tarawa",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Marshall Islands",
						id: "MH",
						color: "#1c1c1c",
						customData: "Majuro",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Micronesia",
						id: "FM",
						color: "#1c1c1c",
						customData: "Palikir",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Nauru",
						id: "NR",
						color: "#1c1c1c",
						customData: "Yaren",
						outlineColor: "#1c1c1c"
					  }, {
						title: "New Zealand",
						id: "NZ",
						color: "#1c1c1c",
						customData: "Wellington"
					  }, {
						title: "Palau",
						id: "PW",
						color: "#1c1c1c",
						customData: "Ngerulmud",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Papua New Guinea",
						id: "PG",
						color: "#1c1c1c",
						customData: "Port Moresby"
					  }, {
						title: "Samoa",
						id: "WS",
						color: "#1c1c1c",
						customData: "Apia",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Solomon Islands",
						id: "SB",
						color: "#1c1c1c",
						customData: "Honiara",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Tonga",
						id: "TO",
						color: "#1c1c1c",
						customData: "Nuku'alofa",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Tuvalu",
						id: "TV",
						color: "#1c1c1c",
						customData: "Funafuti",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Vanuatu",
						id: "VU",
						color: "#1c1c1c",
						customData: "Port Vila",
						outlineColor: "#1c1c1c"
					  }, {
						title: "Argentina",
						id: "AR",
						color: "#1c1c1c",
						customData: "Buenos Aires"
					  }, {
						title: "Bolivia",
						id: "BO",
						color: "#1c1c1c",
						customData: "Sucre"
					  }, {
						title: "Brazil",
						id: "BR",
						color: "#1c1c1c",
						customData: "Brasilia"
					  }, {
						title: "Chile",
						id: "CL",
						color: "#1c1c1c",
						customData: "Santiago"
					  }, {
						title: "Colombia",
						id: "CO",
						color: "#1c1c1c",
						customData: "Bogota"
					  }, {
						title: "Ecuador",
						id: "EC",
						color: "#1c1c1c",
						customData: "Quito"
					  }, {
						title: "Guyana",
						id: "GY",
						color: "#1c1c1c",
						customData: "Georgetown"
					  }, {
						title: "Paraguay",
						id: "PY",
						color: "#1c1c1c",
						customData: "Asuncion"
					  }, {
						title: "Peru",
						id: "PE",
						color: "#1c1c1c",
						customData: "Lima"
					  }, {
						title: "Suriname",
						id: "SR",
						color: "#1c1c1c",
						customData: "Paramaribo"
					  }, {
						title: "Uruguay",
						id: "UY",
						color: "#1c1c1c",
						customData: "Montevideo"
					  }, {
						title: "Venezuela",
						id: "VE",
						color: "#1c1c1c",
						customData: "Caracas"
					  }, 
					]
				  },

				  areasSettings: {
					outlineColor: "#1c1c1c",
					rollOverOutlineColor: "#1c1c1c",
					alpha: 0.8,
					unlistedAreasAlpha: 0.5,
					unlistedAreasColor: "#1c1c1c",
					balloonText: ""
				  }
				} );
				map.preventDragOut= true;
				map.mouseWheelZoomEnabled = true;
				
/*Variables*/
var countries = ["al|Albania|EU","ad|Andorra|EU","am|Armenia|EU","at|Austria|EU","az|Azerbaijan|EU","by|Belarus|EU","be|Belgium|EU","ba|Bosnia and Herzegovina|EU","bg|Bulgaria|EU","hr|Croatia|EU","cy|Cyprus|EU","cz|Czech Republic|EU","dk|Denmark|EU","ee|Estonia|EU","fi|Finland|EU","fr|France|EU","ge|Georgia|EU","de|Germany|EU","gr|Greece|EU","hu|Hungary|EU","is|Iceland|EU","ie|Ireland|EU","it|Italy|EU","lv|Latvia|EU","li|Liechtenstein|EU","lt|Lithuania|EU","lu|Luxembourg|EU","mk|Macedonia|EU","mt|Malta|EU","md|Moldova|EU","mc|Monaco|EU","me|Montenegro|EU","nl|Netherlands|EU","no|Norway|EU","pl|Poland|EU","pt|Portugal|EU","ro|Romania|EU","sm|San Marino|EU","rs|Serbia|EU","sk|Slovakia|EU","si|Slovenia|EU","es|Spain|EU","se|Sweden|EU","ch|Switzerland|EU","ua|Ukraine|EU","gb|United Kingdom|EU","va|Vatican City|EU","tr|Turkey|EU","xk|Kosovo|EU","ag|Antigua and Barbuda|NA","bs|Bahamas|NA","bb|Barbados|NA","bz|Belize|NA","ca|Canada|NA","cr|Costa Rica|NA","cu|Cuba|NA","dm|Dominica|NA","do|Dominican Republic|NA","sv|El Salvador|NA","gd|Grenada|NA","gt|Guatemala|NA","ht|Haiti|NA","hn|Honduras|NA","jm|Jamaica|NA","mx|Mexico|NA","ni|Nicaragua|NA","pa|Panama|NA","kn|Saint Kitts and Nevis|NA","lc|Saint Lucia|NA","vc|Saint Vincent and the Grenadines|NA","tt|Trinidad and Tobago|NA","us|United States|NA","ar|Argentina|SA","bo|Bolivia|SA","br|Brazil|SA","cl|Chile|SA","co|Colombia|SA","ec|Ecuador|SA","gy|Guyana|SA","py|Paraguay|SA","pe|Peru|SA","sr|Suriname|SA","uy|Uruguay|SA","ve|Venezuela|SA","dz|Algeria|AF","ao|Angola|AF","bj|Benin|AF","bw|Botswana|AF","bf|Burkina Faso|AF","bi|Burundi|AF","cm|Cameroon|AF","cv|Cape Verde|AF","cf|Central African Republic|AF","td|Chad|AF","km|Comoros|AF","ci|Cote d'Ivoire|AF","cd|Democratic Republic of the Congo|AF","dj|Djibouti|AF","eg|Egypt|AF","gq|Equatorial Guinea|AF","er|Eritrea|AF","et|Ethiopia|AF","ga|Gabon|AF","gm|Gambia|AF","gh|Ghana|AF","gn|Guinea|AF","gw|Guinea-Bissau|AF","ke|Kenya|AF","ls|Lesotho|AF","lr|Liberia|AF","ly|Libya|AF","mg|Madagascar|AF","mw|Malawi|AF","ml|Mali|AF","mr|Mauritania|AF","mu|Mauritius|AF","ma|Morocco|AF","mz|Mozambique|AF","na|Namibia|AF","ne|Niger|AF","ng|Nigeria|AF","cg|Republic of the Congo|AF","rw|Rwanda|AF","st|Sao Tome and Principe|AF","sn|Senegal|AF","sc|Seychelles|AF","sl|Sierra Leone|AF","so|Somalia|AF","za|South Africa|AF","ss|South Sudan|AF","sd|Sudan|AF","sz|Swaziland|AF","tz|Tanzania|AF","tg|Togo|AF","tn|Tunisia|AF","ug|Uganda|AF","zm|Zambia|AF","zw|Zimbabwe|AF","au|Australia|OC","fj|Fiji|OC","ki|Kiribati|OC","mh|Marshall Islands|OC","fm|Micronesia|OC","nr|Nauru|OC","nz|New Zealand|OC","pw|Palau|OC","pg|Papua New Guinea|OC","ws|Samoa|OC","sb|Solomon Islands|OC","to|Tonga|OC","tv|Tuvalu|OC","vu|Vanuatu|OC","af|Afghanistan|AS","bh|Bahrain|AS","bd|Bangladesh|AS","bt|Bhutan|AS","bn|Brunei|AS","kh|Cambodia|AS","tl|Timor-Leste|AS","in|India|AS","id|Indonesia|AS","ir|Iran|AS","iq|Iraq|AS","il|Israel|AS","jp|Japan|AS","jo|Jordan|AS","kz|Kazakhstan|AS","kw|Kuwait|AS","kg|Kyrgyzstan|AS","la|Laos|AS","lb|Lebanon|AS","my|Malaysia|AS","mv|Maldives|AS","mn|Mongolia|AS","mm|Myanmar|AS","np|Nepal|AS","kp|North Korea|AS","om|Oman|AS","pk|Pakistan|AS","ps|Palestine|AS","cn|China|AS","ph|Philippines|AS","qa|Qatar|AS","tw|Taiwan|AS","ru|Russia|AS","sa|Saudi Arabia|AS","sg|Singapore|AS","kr|South Korea|AS","lk|Sri Lanka|AS","sy|Syria|AS","tj|Tajikistan|AS","th|Thailand|AS","tm|Turkmenistan|AS","ae|United Arab Emirates|AS","uz|Uzbekistan|AS","vn|Vietnam|AS","ye|Yemen|AS"];
var userAnswers = [], /*What the user chooses*/
	answerKey = [], /*Built as the randomly chosen flag is picked*/
	options = []; /*The four options show on the buttons*/
var counter = 0,
	totalRight = 0,
	totalNA = 0, //Max is 23
	totalSA = 0, //Max is 12
	totalEU = 0, //Max is 47
	totalAF = 0, //Max is 54
	totalAS = 0, //Max is 44
	totalOC = 0, //Max is 14
	code = "";
var corrAns, currContinent;
var ctry;

/*Check to see if user is correct*/
function checkAnswers() { 
	var resultArr = [],  
		flag = false; 
	for (i=0; i<answers.length; i++) { 
		if (answers[i] == userAnswers[i]) { 
			flag = true; 
		} 
		else { 
			flag = false; 
		} 
		resultArr.push(flag); 
	} 
	return resultArr; 
}

/*Used to shuffle the country list*/
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

	// Pick a remaining element...
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	// And swap it with the current element.
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
  }

return array;
}

function getBtnCountries(answer,x){
	var arr = [];
	for(i=0;i<countries.length;i++){
		arr.push(i);
	}
	shuffle(arr);
	for(i=0;i<arr.length;i++){
		if(arr[i]==x)
			arr.splice(i,1);
	}
	
	var a1 = countries[arr[0]];
	var b1 = a1.split('|');
	var c1 = b1[1];
	var a2 = countries[arr[1]];
	var b2 = a2.split('|');
	var c2 = b2[1];
	var a3 = countries[arr[2]];
	var b3 = a3.split('|');
	var c3 = b3[1];
	
	options[0] = answer;
	options[1] = c1;
	options[2] = c2;
	options[3] = c3;
}

function getCorrectAnswer(ans, opt){
	var correct = -1;
	for(i=0; i<opt.length;i++){
		if(opt[i] == ans)
			correct = i;
	}
	
	if(correct == -1)
		alert('something went wrong');
	else if(correct == 0 )
		return 'a';
	else if(correct == 1)
		return 'b';
	else if(correct == 2)
		return 'c';
	else if(correct == 3)
		return 'd';
}

function updateContCounter(cont){
		if(cont=='NA')
			totalNA++;
		else if(cont=='SA')
			totalSA++;
		else if(cont=='EU')
			totalEU++;
		else if(cont=='AF')
			totalAF++;
		else if(cont=='AS')
			totalAS++;
		else if(cont=='OC')
			totalOC++;
}

function getResults(){
	//Overall stats
	document.getElementById("overall-stats").value = totalRight/counter;
	$('#numCorrect').html(totalRight + '/' + countries.length);
	
	//NA stats
	document.getElementById("NAstats").value = totalNA/23;
	$('#numCorrectNA').html(totalNA + '/23');
	
	//SA stats
	document.getElementById("SAstats").value = totalSA/12;
	$('#numCorrectSA').html(totalSA + '/12');
	
	//EU stats
	document.getElementById("EUstats").value = totalEU/49;
	$('#numCorrectEU').html(totalEU + '/47');
	
	//AF stats
	document.getElementById("AFstats").value = totalAF/54;
	$('#numCorrectAF').html(totalAF + '/54');
	
	//AS stats
	document.getElementById("ASstats").value = totalAS/44;
	$('#numCorrectAS').html(totalAS + '/44');
	
	//OC stats
	document.getElementById("OCstats").value = totalOC/14;
	$('#numCorrectOC').html(totalOC + '/14');
}

function displayCountry(num){
	if(num==countries.length){
		$('.game_div_2').fadeOut(500, function(){
				$(this).next().fadeIn(500);
				getResults();
			});
	}
	else{
		var str = countries[num];
		var currentCountry = str.split('|');
		code = currentCountry[0].toUpperCase();
		var name = currentCountry[1];
		currContinent = currentCountry[2];
		
		$('#progress').html(counter+1 +'/' + countries.length);
		ctry = map.getObjectById(code);
		ctry.color = "#D8CD1E";
		ctry.outlineColor = "#D8CD1E";
		if(code=='AD')
			ctry.outlineThickness = 2;
		else if(code=='LI')
			ctry.outlineThickness = 2;
		else if(code=='MT')
			ctry.outlineThickness = 2;
		else if(code=='MC')
			ctry.outlineThickness = 2;
		else if(code=='SM')
			ctry.outlineThickness = 2;
		else if(code=='VA')
			ctry.outlineThickness = 2;
		else if(code=='CV')
			ctry.outlineThickness = 2;
		else if(code=='KM')
			ctry.outlineThickness = 2;
		else if(code=='GM')
			ctry.outlineThickness = 2;
		else if(code=='ST')
			ctry.outlineThickness = 2;
		else if(code=='SC')
			ctry.outlineThickness = 2;
		else if(code=='BH')
			ctry.outlineThickness = 2;
		else if(code=='BN')
			ctry.outlineThickness = 2;
		else if(code=='QA')
			ctry.outlineThickness = 2;
		else if(code=='SG')
			ctry.outlineThickness = 2;
		else if(code=='MV')
			ctry.outlineThickness = 2;
		else if(code=='PS')
			ctry.outlineThickness = 2;
		else if(code=='AG')
			ctry.outlineThickness = 2;
		else if(code=='BS')
			ctry.outlineThickness = 2;
		else if(code=='BB')
			ctry.outlineThickness = 2;
		else if(code=='DM')
			ctry.outlineThickness = 2;
		else if(code=='GD')
			ctry.outlineThickness = 2;
		else if(code=='KN')
			ctry.outlineThickness = 2;
		else if(code=='LC')
			ctry.outlineThickness = 2;
		else if(code=='VC')
			ctry.outlineThickness = 2;
		else if(code=='TT')
			ctry.outlineThickness = 2;
		else if(code=='FJ')
			ctry.outlineThickness = 2;
		else if(code=='KI')
			ctry.outlineThickness = 2;
		else if(code=='MH')
			ctry.outlineThickness = 2;
		else if(code=='FM')
			ctry.outlineThickness = 2;
		else if(code=='NR')
			ctry.outlineThickness = 2;
		else if(code=='PW')
			ctry.outlineThickness = 2;
		else if(code=='WS')
			ctry.outlineThickness = 2;
		else if(code=='SB')
			ctry.outlineThickness = 2;
		else if(code=='TO')
			ctry.outlineThickness = 2;
		else if(code=='TV')
			ctry.outlineThickness = 2;
		else if(code=='VU')
			ctry.outlineThickness = 2;
		map.validateData();
			
		getBtnCountries(name,num);
		shuffle(options);
		corrAns = getCorrectAnswer(name,options);
		answerKey.push(corrAns);
		$('#a').html(options[0]);
		$('#b').html(options[1]);
		$('#c').html(options[2]);
		$('#d').html(options[3]);
	}
}

function aClick(){
	userAnswers.push('a');
	if(corrAns == 'a'){
		$('#a').css('background-color', '#118C4E');
		ctry.color = "#118C4E";
		ctry.outlineColor = "#118C4E";
		totalRight++;
		updateContCounter(currContinent);
	}
	else{
		$('#a').css('background-color', '#8C1E11');
		ctry.color = "#8C1E11";
		ctry.outlineColor = "#8C1E11";
	}
	counter++;
	setTimeout(function(){
		$('#a').css('background-color', '#253B59');
		ctry.balloonText= "[[title]] - [[customData]]";
		ctry.outlineThickness = .5;
		map.validateData();
		displayCountry(counter);
	}, 750)
}
function bClick(){
	userAnswers.push('b');
	if(corrAns == 'b'){
		$('#b').css('background-color', '#118C4E');
		ctry.color = "#118C4E";
		ctry.outlineColor = "#118C4E";
		totalRight++;
		updateContCounter(currContinent);
	}
	else{
		$('#b').css('background-color', '#8C1E11');
		ctry.color = "#8C1E11";
		ctry.outlineColor = "#8C1E11";
	}
	counter++;
	setTimeout(function(){
		$('#b').css('background-color', '#253B59');
		ctry.balloonText= "[[title]] - [[customData]]";
		ctry.outlineThickness = .5;
		map.validateData();
		displayCountry(counter);
	}, 750)
}
function cClick(){
	userAnswers.push('c');
	if(corrAns == 'c'){
		$('#c').css('background-color', '#118C4E');
		ctry.color = "#118C4E";
		ctry.outlineColor = "#118C4E";
		totalRight++;
		updateContCounter(currContinent);
	}
	else{
		$('#c').css('background-color', '#8C1E11');
		ctry.color = "#8C1E11";
		ctry.outlineColor = "#8C1E11";
	}
	counter++;
	setTimeout(function(){
		$('#c').css('background-color', '#253B59');
		ctry.balloonText= "[[title]] - [[customData]]";
		ctry.outlineThickness = .5;
		map.validateData();
		displayCountry(counter);
	}, 750)
}
function dClick(){
	userAnswers.push('d');
	if(corrAns == 'd'){
		$('#d').css('background-color', '#118C4E');
		ctry.color = "#118C4E";
		ctry.outlineColor = "#118C4E";
		totalRight++;
		updateContCounter(currContinent);
	}
	else{
		$('#d').css('background-color', '#8C1E11');
		ctry.color = "#8C1E11";
		ctry.outlineColor = "#8C1E11";
	}
	counter++;
	setTimeout(function(){
		$('#d').css('background-color', '#253B59');
		ctry.balloonText= "[[title]] - [[customData]]";
		ctry.outlineThickness = .5;
		map.validateData();
		displayCountry(counter);
	}, 750)
}

/*From opening page an on*/
/*Initial fade if start button is chosen*/
shuffle(countries);
$(function(){
	$('.start').click(function(){ 
		$(this).parents('.game_div').fadeOut(500, function(){ 
			$(this).next().fadeIn(500); 
		}); 
		displayCountry(counter);
	});
})