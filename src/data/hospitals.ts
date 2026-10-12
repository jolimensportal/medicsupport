/**
 * ============================================================================
 *  PLACEHOLDER DATA — REPLACE THIS ENTIRE FILE.
 * ============================================================================
 *
 *  Every hospital below is INVENTED. None of these institutions exist, none
 *  are affiliated with MedicSupport, and no figure in this file is real.
 *
 *  This exists so the presentation has something to show. The user is
 *  replacing it with the real file from the product developer.
 *
 *  TO SWAP: delete this file and replace it. It is imported in exactly two
 *  places — `src/pages/hospitals/index.astro` and
 *  `src/pages/hospitals/[slug].astro` — and both only read from the exported
 *  shape below, so the new file just has to export the same shape.
 *
 *  The exported `Hospital` type is the contract. Keep it and you can change
 *  anything about the content without touching a template.
 *
 *  NAMING: hospital names are built the way real ones are actually named in
 *  each market — anchored to a real district or suburb, with the word that
 *  market actually uses (Community Hospital in Ghana/Kenya, Medical Centre in
 *  Nigeria/Kenya/Philippines, Private Hospital in South Africa, Clinique in
 *  Morocco). They are NOT prefixed with the group name; real hospital groups
 *  do not put their brand on every door.
 *
 *  ⚠ BECAUSE THESE NAMES ARE LOCATION-ANCHORED TO REAL DISTRICTS, SOME MAY
 *  COINCIDE WITH A REAL INSTITUTION. They must be checked against real
 *  hospital registers per country before this site is used publicly.
 * ============================================================================
 */

export type Hospital = {
	slug: string;
	name: string;
	city: string;
	country: string;
	/** ISO-3166 alpha-2, used for the region chip. */
	countryCode: string;
	beds: number;
	opened: number;
	/** Tertiary = major referral centre, Secondary = regional, Community = local. */
	level: "Tertiary" | "Secondary" | "Community";
	staffedBeds: number;
	specialisms: string[];
	services: string[];
	blurb: string;
	/** Operating = trading, Expanded = beds added, New = opened recently. */
	status: "Operating" | "Expanded" | "New";
	accreditation: string[];
};

export const HOSPITALS: Hospital[] = [
	// ─────────────────────── NIGERIA — 5 (our largest market) ───────────────────────
	{
		slug: "ikoyi-private-hospital",
		name: "Ikoyi Private Hospital",
		city: "Lagos",
		country: "Nigeria",
		countryCode: "NG",
		beds: 340,
		staffedBeds: 286,
		opened: 2009,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["Cardiology", "General surgery", "Neurology", "Obstetrics & gynaecology"],
		services: ["24-hour emergency", "Intensive care", "Cardiac catheterisation", "Dialysis"],
		blurb:
			"Our flagship Nigerian site and the group's largest referral centre, taking complex cardiac and obstetric work from across Lagos and the western corridor.",
		accreditation: ["Federal Ministry of Health licence", "Lagos State Hospitals licence"],
	},
	{
		slug: "victoria-island-medical-centre",
		name: "Victoria Island Medical Centre",
		city: "Lagos",
		country: "Nigeria",
		countryCode: "NG",
		beds: 220,
		staffedBeds: 184,
		opened: 2013,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["General surgery", "Oncology", "Orthopaedics", "General medicine"],
		services: ["24-hour emergency", "Linear accelerator", "Intensive care", "Diagnostic imaging"],
		blurb:
			"Opened to serve the island corporate and expatriate population, and since extended into private referral work for mainland facilities.",
		accreditation: ["Federal Ministry of Health licence"],
	},
	{
		slug: "lekki-community-hospital",
		name: "Lekki Community Hospital",
		city: "Lagos",
		country: "Nigeria",
		countryCode: "NG",
		beds: 130,
		staffedBeds: 98,
		opened: 2018,
		level: "Secondary",
		status: "Expanded",
		specialisms: ["General medicine", "General surgery", "Paediatrics"],
		services: ["24-hour emergency", "Maternity", "Outpatient clinics", "Physiotherapy"],
		blurb:
			"Situated on the Lekki peninsula expansion corridor, built to absorb the population growth the corridor has taken since opening.",
		accreditation: ["Lagos State Hospitals licence"],
	},
	{
		slug: "maitama-medical-centre",
		name: "Maitama Medical Centre",
		city: "Abuja",
		country: "Nigeria",
		countryCode: "NG",
		beds: 260,
		staffedBeds: 214,
		opened: 2016,
		level: "Tertiary",
		status: "Expanded",
		specialisms: ["General surgery", "Cardiology", "Urology", "Orthopaedics"],
		services: ["24-hour emergency", "Theatre services", "Dialysis", "Intensive care"],
		blurb:
			"Opened ahead of the capital's tertiary expansion programme, now a private referral partner to several federal public hospitals in Abuja.",
		accreditation: ["Federal Ministry of Health licence", "FCT Hospitals licence"],
	},
	{
		slug: "rumuola-medical-centre",
		name: "Rumuola Medical Centre",
		city: "Port Harcourt",
		country: "Nigeria",
		countryCode: "NG",
		beds: 150,
		staffedBeds: 111,
		opened: 2019,
		level: "Secondary",
		status: "Operating",
		specialisms: ["General medicine", "General surgery", "Paediatrics"],
		services: ["24-hour emergency", "Occupational health", "Maternity", "Outpatient clinics"],
		blurb:
			"Established to carry caseload from the oil and gas belt, with occupational health provision for offshore and onshore contractors.",
		accreditation: ["Rivers State Hospitals licence"],
	},

	// ─────────────────────── KENYA — 4 (our East African hub) ───────────────────────
	{
		slug: "westlands-medical-centre",
		name: "Westlands Medical Centre",
		city: "Nairobi",
		country: "Kenya",
		countryCode: "KE",
		beds: 280,
		staffedBeds: 237,
		opened: 2013,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["Cardiology", "General surgery", "Orthopaedics", "Gynaecology"],
		services: ["24-hour emergency", "Intensive care", "Cardiac catheterisation", "Dialysis"],
		blurb:
			"Our Kenyan flagship and the regional referral destination for complex cases, accepting work from across East Africa.",
		accreditation: ["Kenya Medical Practitioners and Dentists Council", "Nursing Council of Kenya"],
	},
	{
		slug: "kilimani-hospital",
		name: "Kilimani Hospital",
		city: "Nairobi",
		country: "Kenya",
		countryCode: "KE",
		beds: 170,
		staffedBeds: 138,
		opened: 2016,
		level: "Secondary",
		status: "Operating",
		specialisms: ["General medicine", "General surgery", "Orthopaedics", "Paediatrics"],
		services: ["24-hour emergency", "Maternity", "Diagnostic imaging", "Physiotherapy"],
		blurb:
			"A second Nairobi site covering the residential catchment to the north and west of the flagship.",
		accreditation: ["Nursing Council of Kenya"],
	},
	{
		slug: "nyali-community-hospital",
		name: "Nyali Community Hospital",
		city: "Mombasa",
		country: "Kenya",
		countryCode: "KE",
		beds: 140,
		staffedBeds: 108,
		opened: 2018,
		level: "Secondary",
		status: "Operating",
		specialisms: ["General medicine", "General surgery", "Orthopaedics"],
		services: ["24-hour emergency", "Maternity", "Outpatient clinics", "Diagnostic imaging"],
		blurb:
			"Serving the coastal belt and the port economy, with substantial elective orthopaedic caseload from tourism and hospitality employers.",
		accreditation: ["Nursing Council of Kenya"],
	},
	{
		slug: "naivasha-medical-centre",
		name: "Naivasha Medical Centre",
		city: "Naivasha",
		country: "Kenya",
		countryCode: "KE",
		beds: 110,
		staffedBeds: 79,
		opened: 2021,
		level: "Secondary",
		status: "New",
		specialisms: ["General medicine", "Paediatrics", "Maternity"],
		services: ["24-hour emergency", "Maternity", "Outpatient clinics", "Community outreach"],
		blurb:
			"Our most recent Kenyan opening, addressing a documented shortfall in secondary inpatient provision across the Rift Valley.",
		accreditation: ["Nursing Council of Kenya"],
	},

	// ─────────────────────── GHANA — 3 (where we began) ───────────────────────
	{
		slug: "adenta-medical-centre",
		name: "Adenta Medical Centre",
		city: "Accra",
		country: "Ghana",
		countryCode: "GH",
		beds: 320,
		staffedBeds: 271,
		opened: 2007,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["Cardiology", "General surgery", "Obstetrics & gynaecology", "Nephrology"],
		services: ["24-hour emergency", "Cardiac catheterisation", "Dialysis", "Neonatal intensive care"],
		blurb:
			"The group's first hospital, opened in Adenta in 2007, and still our principal tertiary referral centre on the West African corridor.",
		accreditation: ["Ghana Health Service facility licence", "Health Professions Council registration"],
	},
	{
		slug: "asokore-mampong-community-hospital",
		name: "Asokore Mampong Community Hospital",
		city: "Kumasi",
		country: "Ghana",
		countryCode: "GH",
		beds: 180,
		staffedBeds: 148,
		opened: 2014,
		level: "Secondary",
		status: "Expanded",
		specialisms: ["General medicine", "Orthopaedics", "Paediatrics", "General surgery"],
		services: ["24-hour emergency", "Physiotherapy", "Diagnostic imaging", "Outpatient clinics"],
		blurb:
			"Kumasi is the Asante capital and a long-standing route into the northern catchments. Extended in 2023 with a 40-bed orthopaedic block.",
		accreditation: ["Ghana Health Service facility licence"],
	},
	{
		slug: "sekondi-takoradi-community-hospital",
		name: "Sekondi-Takoradi Community Hospital",
		city: "Sekondi-Takoradi",
		country: "Ghana",
		countryCode: "GH",
		beds: 120,
		staffedBeds: 93,
		opened: 2018,
		level: "Secondary",
		status: "Operating",
		specialisms: ["General medicine", "General surgery", "Maternity"],
		services: ["24-hour emergency", "Maternity", "Occupational health", "Outpatient clinics"],
		blurb:
			"Built to serve the industrial and offshore workforce of the Western Region, with occupational health provision for energy and marine operators.",
		accreditation: ["Ghana Health Service facility licence"],
	},

	// ─────────────────────── SOUTH AFRICA — 3 ───────────────────────
	{
		slug: "sandton-private-hospital",
		name: "Sandton Private Hospital",
		city: "Johannesburg",
		country: "South Africa",
		countryCode: "ZA",
		beds: 360,
		staffedBeds: 311,
		opened: 2010,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["Cardiothoracic surgery", "Neurology", "Transplant medicine", "General surgery"],
		services: ["24-hour emergency", "Intensive care", "Advanced imaging", "Cardiac catheterisation"],
		blurb:
			"Our most technically equipped site and the training base for the group's specialist fellows, with an accredited cardiothoracic programme.",
		accreditation: ["Council for Health Professions accreditation", "Health Professions Council of South Africa"],
	},
	{
		slug: "century-city-medical-centre",
		name: "Century City Medical Centre",
		city: "Cape Town",
		country: "South Africa",
		countryCode: "ZA",
		beds: 200,
		staffedBeds: 171,
		opened: 2015,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["Oncology", "Emergency medicine", "General surgery", "Cardiology"],
		services: ["24-hour emergency", "Intensive care", "Linear accelerator", "Emergency retrieval"],
		blurb:
			"Operates the group's emergency retrieval service, running a dedicated advanced life support unit with hospital-based response across the Western Cape.",
		accreditation: ["Health Professions Council of South Africa"],
	},
	{
		slug: "umhlanga-hospital",
		name: "Umhlanga Hospital",
		city: "Durban",
		country: "South Africa",
		countryCode: "ZA",
		beds: 190,
		staffedBeds: 152,
		opened: 2017,
		level: "Secondary",
		status: "Expanded",
		specialisms: ["Orthopaedics", "Emergency medicine", "General medicine", "General surgery"],
		services: ["24-hour emergency", "Theatre services", "Physiotherapy", "Diagnostic imaging"],
		blurb:
			"Expanded in 2024 with a dedicated trauma theatre, reflecting the volume of major trauma presentations from the N2 corridor.",
		accreditation: ["Health Professions Council of South Africa"],
	},

	// ─────────────────────── PHILIPPINES — 2 ───────────────────────
	{
		slug: "sampaloc-medical-centre",
		name: "Sampaloc Medical Centre",
		city: "Manila",
		country: "Philippines",
		countryCode: "PH",
		beds: 340,
		staffedBeds: 287,
		opened: 2012,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["General surgery", "Cardiology", "Neurology", "Obstetrics & gynaecology"],
		services: ["24-hour emergency", "Intensive care", "Cardiac catheterisation", "Dialysis"],
		blurb:
			"Our principal Philippine facility and the largest single employer of nurses in the group, running a structured secondment programme to hospitals abroad.",
		accreditation: ["Department of Health licence", "Philippine Nurses Association registration"],
	},
	{
		slug: "mandaue-community-hospital",
		name: "Mandaue Community Hospital",
		city: "Cebu City",
		country: "Philippines",
		countryCode: "PH",
		beds: 200,
		staffedBeds: 163,
		opened: 2016,
		level: "Tertiary",
		status: "Expanded",
		specialisms: ["General medicine", "General surgery", "Paediatrics", "Orthopaedics"],
		services: ["24-hour emergency", "Maternity", "Intensive care", "Diagnostic imaging"],
		blurb:
			"The Central Visayas referral centre, expanded in 2022 with a 30-bed paediatric intensive care unit.",
		accreditation: ["Department of Health licence"],
	},

	// ─────────────────────── MOROCCO — 1 (our Francophone flagship) ───────────────────────
	{
		slug: "clinique-ibn-rochd",
		name: "Clinique Ibn Rochd",
		city: "Casablanca",
		country: "Morocco",
		countryCode: "MA",
		beds: 240,
		staffedBeds: 199,
		opened: 2015,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["Cardiology", "General surgery", "Neurology", "Urology"],
		services: ["24-hour emergency", "Intensive care", "Cardiac catheterisation", "Advanced imaging"],
		blurb:
			"Our Moroccan flagship and the group's main Francophone site, operating to French clinical accreditation standards and serving referrals from across the Maghreb.",
		accreditation: ["Ministère de la Santé licence", "French-language clinical accreditation"],
	},
];

export const COUNTRIES = [...new Set(HOSPITALS.map((h) => h.country))];

/** Facility counts per country, for the index summary. */
export const byCountrySize = COUNTRIES.map((c) => ({
	country: c,
	count: HOSPITALS.filter((h) => h.country === c).length,
})).sort((a, b) => b.count - a.count);

export const totalBeds = HOSPITALS.reduce((n, h) => n + h.beds, 0);
export const totalStaffed = HOSPITALS.reduce((n, h) => n + h.staffedBeds, 0);
export const totalStaff = HOSPITALS.reduce((n, h) => n + Math.round(h.staffedBeds * 2.4), 0);