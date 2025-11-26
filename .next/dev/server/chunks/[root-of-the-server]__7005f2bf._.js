module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/country-code-map.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mapping of country names to ISO 2 country codes for the Passport Visa API
__turbopack_context__.s([
    "COUNTRY_NAME_TO_CODE",
    ()=>COUNTRY_NAME_TO_CODE,
    "getCountryCode",
    ()=>getCountryCode
]);
const COUNTRY_NAME_TO_CODE = {
    Afghanistan: "AF",
    Albania: "AL",
    Algeria: "DZ",
    Andorra: "AD",
    Angola: "AO",
    "Antigua and Barbuda": "AG",
    Argentina: "AR",
    Armenia: "AM",
    Australia: "AU",
    Austria: "AT",
    Azerbaijan: "AZ",
    Bahamas: "BS",
    Bahrain: "BH",
    Bangladesh: "BD",
    Barbados: "BB",
    Belarus: "BY",
    Belgium: "BE",
    Belize: "BZ",
    Benin: "BJ",
    Bhutan: "BT",
    Bolivia: "BO",
    "Bosnia and Herzegovina": "BA",
    Botswana: "BW",
    Brazil: "BR",
    Brunei: "BN",
    Bulgaria: "BG",
    "Burkina Faso": "BF",
    Burundi: "BI",
    Cambodia: "KH",
    Cameroon: "CM",
    Canada: "CA",
    "Cape Verde": "CV",
    "Central African Republic": "CF",
    Chad: "TD",
    Chile: "CL",
    China: "CN",
    Colombia: "CO",
    Comoros: "KM",
    Congo: "CG",
    "Costa Rica": "CR",
    Croatia: "HR",
    Cuba: "CU",
    Cyprus: "CY",
    "Czech Republic": "CZ",
    Denmark: "DK",
    Djibouti: "DJ",
    Dominica: "DM",
    "Dominican Republic": "DO",
    "East Timor": "TL",
    Ecuador: "EC",
    Egypt: "EG",
    "El Salvador": "SV",
    "Equatorial Guinea": "GQ",
    Eritrea: "ER",
    Estonia: "EE",
    Ethiopia: "ET",
    Fiji: "FJ",
    Finland: "FI",
    France: "FR",
    Gabon: "GA",
    Gambia: "GM",
    Georgia: "GE",
    Germany: "DE",
    Ghana: "GH",
    Greece: "GR",
    Grenada: "GD",
    Guatemala: "GT",
    Guinea: "GN",
    "Guinea-Bissau": "GW",
    Guyana: "GY",
    Haiti: "HT",
    Honduras: "HN",
    "Hong Kong": "HK",
    Hungary: "HU",
    Iceland: "IS",
    India: "IN",
    Indonesia: "ID",
    Iran: "IR",
    Iraq: "IQ",
    Ireland: "IE",
    Israel: "IL",
    Italy: "IT",
    "Ivory Coast": "CI",
    Jamaica: "JM",
    Japan: "JP",
    Jordan: "JO",
    Kazakhstan: "KZ",
    Kenya: "KE",
    Kiribati: "KI",
    Kosovo: "XK",
    Kuwait: "KW",
    Kyrgyzstan: "KG",
    Laos: "LA",
    Latvia: "LV",
    Lebanon: "LB",
    Lesotho: "LS",
    Liberia: "LR",
    Libya: "LY",
    Liechtenstein: "LI",
    Lithuania: "LT",
    Luxembourg: "LU",
    Macao: "MO",
    Madagascar: "MG",
    Malawi: "MW",
    Malaysia: "MY",
    Maldives: "MV",
    Mali: "ML",
    Malta: "MT",
    "Marshall Islands": "MH",
    Mauritania: "MR",
    Mauritius: "MU",
    Mexico: "MX",
    Micronesia: "FM",
    Moldova: "MD",
    Monaco: "MC",
    Mongolia: "MN",
    Montenegro: "ME",
    Morocco: "MA",
    Mozambique: "MZ",
    Myanmar: "MM",
    Namibia: "NA",
    Nauru: "NR",
    Nepal: "NP",
    Netherlands: "NL",
    "New Zealand": "NZ",
    Nicaragua: "NI",
    Niger: "NE",
    Nigeria: "NG",
    "North Korea": "KP",
    "North Macedonia": "MK",
    Norway: "NO",
    Oman: "OM",
    Pakistan: "PK",
    Palau: "PW",
    Palestine: "PS",
    Panama: "PA",
    "Papua New Guinea": "PG",
    Paraguay: "PY",
    Peru: "PE",
    Philippines: "PH",
    Poland: "PL",
    Portugal: "PT",
    Qatar: "QA",
    Romania: "RO",
    Russia: "RU",
    Rwanda: "RW",
    "Saint Kitts and Nevis": "KN",
    "Saint Lucia": "LC",
    "Saint Vincent and the Grenadines": "VC",
    Samoa: "WS",
    "San Marino": "SM",
    "Sao Tome and Principe": "ST",
    "Saudi Arabia": "SA",
    Senegal: "SN",
    Serbia: "RS",
    Seychelles: "SC",
    "Sierra Leone": "SL",
    Singapore: "SG",
    Slovakia: "SK",
    Slovenia: "SI",
    "Solomon Islands": "SB",
    Somalia: "SO",
    "South Africa": "ZA",
    "South Korea": "KR",
    "South Sudan": "SS",
    Spain: "ES",
    "Sri Lanka": "LK",
    Sudan: "SD",
    Suriname: "SR",
    Sweden: "SE",
    Switzerland: "CH",
    Syria: "SY",
    Taiwan: "TW",
    Tajikistan: "TJ",
    Tanzania: "TZ",
    Thailand: "TH",
    Togo: "TG",
    Tonga: "TO",
    "Trinidad and Tobago": "TT",
    Tunisia: "TN",
    Turkey: "TR",
    Turkmenistan: "TM",
    Tuvalu: "TV",
    Uganda: "UG",
    Ukraine: "UA",
    "United Arab Emirates": "AE",
    "United Kingdom": "GB",
    "United States": "US",
    Uruguay: "UY",
    Uzbekistan: "UZ",
    Vanuatu: "VU",
    "Vatican City": "VA",
    Venezuela: "VE",
    Vietnam: "VN",
    Yemen: "YE",
    Zambia: "ZM",
    Zimbabwe: "ZW"
};
function getCountryCode(countryName) {
    return COUNTRY_NAME_TO_CODE[countryName] || null;
}
}),
"[project]/app/api/visa-requirements/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$country$2d$code$2d$map$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/country-code-map.ts [app-route] (ecmascript)");
;
;
async function getVisaDataFromAPI(nationality) {
    const countryCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$country$2d$code$2d$map$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCountryCode"])(nationality);
    if (!countryCode) {
        console.error(`[v0] Country code not found for ${nationality}`);
        return {
            visaFree: [],
            visaOnArrival: [],
            visaRequired: [],
            electronicVisa: [],
            notApplicable: []
        };
    }
    try {
        console.log(`[v0] Fetching visa data for ${nationality} (${countryCode}) from external API`);
        const controller = new AbortController();
        const timeout = setTimeout(()=>controller.abort(), 10000) // 10 second timeout
        ;
        const response = await fetch(`https://rough-sun-2523.fly.dev/country/${countryCode}`, {
            signal: controller.signal
        });
        clearTimeout(timeout);
        if (!response.ok) {
            console.warn(`[v0] API responded with status ${response.status} for ${countryCode}`);
            throw new Error(`API responded with status ${response.status}`);
        }
        const stats = await response.json();
        console.log(`[v0] API response for ${countryCode}:`, {
            VF: stats.VF?.length,
            VOA: stats.VOA?.length,
            VR: stats.VR?.length,
            EV: stats.EV?.length,
            NA: stats.NA?.length
        });
        const visaFree = stats.VF?.map((c)=>c.name) || [];
        const visaOnArrival = stats.VOA?.map((c)=>c.name) || [];
        const visaRequired = stats.VR?.map((c)=>c.name) || [];
        const electronicVisa = stats.EV?.map((c)=>c.name) || [];
        const notApplicable = stats.NA?.map((c)=>c.name) || [];
        const result = {
            visaFree: visaFree.sort(),
            visaOnArrival: visaOnArrival.sort(),
            visaRequired: visaRequired.sort(),
            electronicVisa: electronicVisa.sort(),
            notApplicable: notApplicable.sort()
        };
        console.log(`[v0] Processed visa data for ${countryCode}: ${visaFree.length + visaOnArrival.length + visaRequired.length + electronicVisa.length + notApplicable.length} total countries`);
        return result;
    } catch (error) {
        console.error(`[v0] Error fetching visa data for ${nationality}:`, error instanceof Error ? error.message : String(error));
        // If API fails, use fallback data
        return getFallbackVisaData(nationality);
    }
}
function getFallbackVisaData(nationality) {
    const fallbackData = {
        Malaysia: {
            visaFree: [
                "Brunei",
                "Cambodia",
                "Hong Kong",
                "Indonesia",
                "Japan",
                "Laos",
                "Macau",
                "Philippines",
                "Singapore",
                "South Korea",
                "Taiwan",
                "Thailand",
                "Vietnam"
            ],
            visaOnArrival: [
                "Egypt",
                "Georgia",
                "Jordan",
                "Morocco",
                "Turkey"
            ],
            visaRequired: [
                "Australia",
                "Canada",
                "China",
                "France",
                "Germany",
                "India",
                "New Zealand",
                "Russia",
                "United Kingdom",
                "United States"
            ],
            electronicVisa: [
                "India",
                "Sri Lanka",
                "Turkey"
            ],
            notApplicable: []
        },
        India: {
            visaFree: [
                "Afghanistan",
                "Bangladesh",
                "Bhutan",
                "Mauritius",
                "Nepal",
                "Seychelles",
                "Sri Lanka"
            ],
            visaOnArrival: [
                "Cambodia",
                "Egypt",
                "Hong Kong",
                "Indonesia",
                "Japan",
                "Laos",
                "Malaysia",
                "Myanmar",
                "Philippines",
                "Singapore",
                "South Korea",
                "Taiwan",
                "Thailand",
                "Vietnam"
            ],
            visaRequired: [
                "Australia",
                "Canada",
                "China",
                "France",
                "Germany",
                "New Zealand",
                "Russia",
                "Turkey",
                "United Kingdom",
                "United States"
            ],
            electronicVisa: [
                "Estonia",
                "Ukraine"
            ],
            notApplicable: []
        },
        "United States": {
            visaFree: [
                "Australia",
                "Austria",
                "Belgium",
                "Canada",
                "Chile",
                "Colombia",
                "Costa Rica",
                "Czech Republic",
                "Denmark",
                "Estonia",
                "Finland",
                "France",
                "Germany",
                "Greece",
                "Hungary",
                "Iceland",
                "Ireland",
                "Italy",
                "Japan",
                "South Korea",
                "Latvia",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Malta",
                "Mexico",
                "Netherlands",
                "New Zealand",
                "Norway",
                "Poland",
                "Portugal",
                "Singapore",
                "Slovakia",
                "Slovenia",
                "Spain",
                "Sweden",
                "Switzerland",
                "Taiwan",
                "United Kingdom"
            ],
            visaOnArrival: [
                "Egypt",
                "Georgia",
                "Indonesia",
                "Jordan",
                "Morocco",
                "Philippines",
                "Thailand",
                "Turkey"
            ],
            visaRequired: [
                "China",
                "Iran",
                "Libya",
                "North Korea",
                "Russia",
                "Syria",
                "Venezuela",
                "Yemen"
            ],
            electronicVisa: [
                "India",
                "Sri Lanka",
                "Turkey"
            ],
            notApplicable: []
        },
        "United Kingdom": {
            visaFree: [
                "Antigua and Barbuda",
                "Australia",
                "Austria",
                "Bahamas",
                "Barbados",
                "Belgium",
                "Belize",
                "Canada",
                "Croatia",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Dominica",
                "Estonia",
                "Fiji",
                "Finland",
                "France",
                "Germany",
                "Greece",
                "Grenada",
                "Hungary",
                "Iceland",
                "Ireland",
                "Italy",
                "Jamaica",
                "Japan",
                "Latvia",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Malta",
                "Mexico",
                "Monaco",
                "Netherlands",
                "New Zealand",
                "Norway",
                "Poland",
                "Portugal",
                "San Marino",
                "Singapore",
                "Slovakia",
                "Slovenia",
                "South Korea",
                "Spain",
                "Sweden",
                "Switzerland",
                "Taiwan",
                "Trinidad and Tobago",
                "United States"
            ],
            visaOnArrival: [
                "Egypt",
                "Georgia",
                "Indonesia",
                "Jordan",
                "Morocco",
                "Philippines",
                "Thailand",
                "Turkey"
            ],
            visaRequired: [
                "China",
                "Iran",
                "Libya",
                "North Korea",
                "Russia",
                "Syria",
                "Venezuela",
                "Yemen"
            ],
            electronicVisa: [
                "India",
                "Sri Lanka",
                "Turkey"
            ],
            notApplicable: []
        }
    };
    return fallbackData[nationality] || {
        visaFree: [],
        visaOnArrival: [],
        visaRequired: [],
        electronicVisa: [],
        notApplicable: []
    };
}
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const nationality = searchParams.get("nationality");
        if (!nationality) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Nationality parameter is required"
            }, {
                status: 400
            });
        }
        // Fetch visa data (no caching - direct API call)
        const data = await getVisaDataFromAPI(nationality);
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
        return response;
    } catch (error) {
        console.error("[v0] Visa requirements route error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch visa requirements"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7005f2bf._.js.map