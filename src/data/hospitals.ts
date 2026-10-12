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
 * ============================================================================
 */

export type Hospital = {
	slug: string;
	name: string;
	city: string;
	country: string;
	/** ISO-3166 alpha-2, used for the flag/region chip. */
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
	// ─────────────────────────── GHANA ───────────────────────────
	{
		slug: "medicsupport-accra",
		name: "MedicSupport Accra Hospital",
		city: "Accra",
		country: "Ghana",
		countryCode: "GH",
		beds: 320,
		staffedBeds: 268,
		opened: 2009,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["Cardiology", "General surgery", "Obstetrics & gynaecology", "Nephrology"],
		services: ["24-hour emergency", "Cardiac catheterisation", "Dialysis", "Neonatal intensive care"],
		blurb:
			"Our flagship Ghanaian site and the group's largest referral centre on the West African corridor, taking complex cardiac and obstetric referrals from the surrounding region.",
		accreditation: ["National Health Service Licence", "Healthcare Professions Council registration"],
	},
	{
		slug: "medicsupport-kumasi",
		name: "MedicSupport Ashanti Medical Centre",
		city: "Kumasi",
		country: "Ghana",
		countryCode: "GH",
		beds: 180,
		staffedBeds: 151,
		opened: 2014,
		level: "Secondary",
		status: "Expanded",
		specialisms: ["General medicine", "Orthopaedics", "Paediatrics", "General surgery"],
		services: ["24-hour emergency", "Physiotherapy", "Diagnostic imaging", "Outpatient clinics"],
		blurb:
			"Situated in Kumasi, the Ashanti regional capital. Extended in 2023 with a 40-bed orthopaedic block commissioned to absorb fracture caseloads from the northern catchments.",
		accreditation: ["National Health Service Licence"],
	},
	{
		slug: "medicsupport-takoradi",
		name: "MedicSupport Western Regional Hospital",
		city: "Takoradi",
		country: "Ghana",
		countryCode: "GH",
		beds: 120,
		staffedBeds: 96,
		opened: 2018,
		level: "Secondary",
		status: "Operating",
		specialisms: ["General medicine", "General surgery", "Maternity"],
		services: ["24-hour emergency", "Maternity", "Outpatient clinics", "Occupational health"],
		blurb:
			"Built to serve the industrial and offshore workforce of the Western Region, with occupational health provision for energy and marine operators.",
		accreditation: ["National Health Service Licence"],
	},

	// ─────────────────────────── NIGERIA ───────────────────────────
	{
		slug: "medicsupport-lagos",
		name: "MedicSupport Lagos Central Hospital",
		city: "Lagos",
		country: "Nigeria",
		countryCode: "NG",
		beds: 410,
		staffedBeds: 344,
		opened: 2011,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["Cardiology", "Neurology", "General surgery", "Oncology"],
		services: ["24-hour emergency", "Intensive care", "Linear accelerator", "Cardiac catheterisation"],
		blurb:
			"The group's largest Nigerian facility and its principal oncology and neurology referral centre, operating a 24-bed intensive care unit opened in 2022.",
		accreditation: ["Federal Ministry of Health licence", "Corporate Affairs Commission registration"],
	},
	{
		slug: "medicsupport-abuja",
		name: "MedicSupport Abuja Meridian Medical Centre",
		city: "Abuja",
		country: "Nigeria",
		countryCode: "NG",
		beds: 250,
		staffedBeds: 205,
		opened: 2016,
		level: "Tertiary",
		status: "Expanded",
		specialisms: ["General surgery", "Cardiology", "Urology", "Orthopaedics"],
		services: ["24-hour emergency", "Dialysis", "Theatre services", "Diagnostic imaging"],
		blurb:
			"Opened ahead of the capital's tertiary expansion programme, now serving as a private referral partner to several federal public hospitals.",
		accreditation: ["Federal Ministry of Health licence"],
	},
	{
		slug: "medicsupport-port-harcourt",
		name: "MedicSupport Port Harcourt Clinical Hospital",
		city: "Port Harcourt",
		country: "Nigeria",
		countryCode: "NG",
		beds: 160,
		staffedBeds: 121,
		opened: 2019,
		level: "Secondary",
		status: "Operating",
		specialisms: ["General medicine", "Paediatrics", "General surgery"],
		services: ["24-hour emergency", "Maternity", "Outpatient clinics", "Physiotherapy"],
		blurb:
			"Established to carry caseload from the oil and gas belt, including occupational health provision for offshore and onshore contractors.",
		accreditation: ["Federal Ministry of Health licence"],
	},

	// ─────────────────────────── KENYA ───────────────────────────
	{
		slug: "medicsupport-nairobi",
		name: "MedicSupport Nairobi Hospital",
		city: "Nairobi",
		country: "Kenya",
		countryCode: "KE",
		beds: 280,
		staffedBeds: 239,
		opened: 2013,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["Cardiology", "General surgery", "Orthopaedics", "Gynaecology"],
		services: ["24-hour emergency", "Intensive care", "Cardiac catheterisation", "Dialysis"],
		blurb:
			"The group's East African hub and the referral destination for complex cases from across the region, including from neighbouring hospital groups.",
		accreditation: ["Kenya Medical Practitioners and Dentists Council", "Nursing Council of Kenya"],
	},
	{
		slug: "medicsupport-mombasa",
		name: "MedicSupport Coast General Hospital",
		city: "Mombasa",
		country: "Kenya",
		countryCode: "KE",
		beds: 140,
		staffedBeds: 112,
		opened: 2018,
		level: "Secondary",
		status: "Operating",
		specialisms: ["General medicine", "General surgery", "Orthopaedics"],
		services: ["24-hour emergency", "Maternity", "Diagnostic imaging", "Outpatient clinics"],
		blurb:
			"Serving the coastal belt and the port economy, with substantial elective orthopaedic caseload from the surrounding tourism and hospitality sector.",
		accreditation: ["Nursing Council of Kenya"],
	},
	{
		slug: "medicsupport-nakuru",
		name: "MedicSupport Rift Valley Medical Centre",
		city: "Nakuru",
		country: "Kenya",
		countryCode: "KE",
		beds: 110,
		staffedBeds: 84,
		opened: 2021,
		level: "Secondary",
		status: "New",
		specialisms: ["General medicine", "Paediatrics", "Maternity"],
		services: ["24-hour emergency", "Maternity", "Outpatient clinics", "Community outreach"],
		blurb:
			"Our most recent Kenyan opening, addressing a documented shortfall in secondary inpatient provision across the Rift Valley.",
		accreditation: ["Nursing Council of Kenya"],
	},

	// ─────────────────────────── SOUTH AFRICA ───────────────────────────
	{
		slug: "medicsupport-johannesburg",
		name: "MedicSupport Gauteng Hospital",
		city: "Johannesburg",
		country: "South Africa",
		countryCode: "ZA",
		beds: 360,
		staffedBeds: 312,
		opened: 2010,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["Cardiothoracic surgery", "Neurology", "Transplant medicine", "General surgery"],
		services: ["24-hour emergency", "Intensive care", "Advanced imaging", "Cardiac catheterisation"],
		blurb:
			"Our most technically equipped site and the training base for the group's specialist fellows, with an accredited cardiothoracic programme.",
		accreditation: ["Council for Health Professions accredited", "Health Professions Council of South Africa"],
	},
	{
		slug: "medicsupport-cape-town",
		name: "MedicSupport Cape Town Medical Institute",
		city: "Cape Town",
		country: "South Africa",
		countryCode: "ZA",
		beds: 220,
		staffedBeds: 188,
		opened: 2015,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["Oncology", "General surgery", "Cardiology", "Emergency medicine"],
		services: ["24-hour emergency", "Intensive care", "Linear accelerator", "Emergency retrieval"],
		blurb:
			"Operates the group's emergency retrieval service, running a dedicated advanced life support unit with hospital-based response across the Western Cape.",
		accreditation: ["Health Professions Council of South Africa"],
	},
	{
		slug: "medicsupport-durban",
		name: "MedicSupport Durban Coastal Hospital",
		city: "Durban",
		country: "South Africa",
		countryCode: "ZA",
		beds: 190,
		staffedBeds: 153,
		opened: 2017,
		level: "Secondary",
		status: "Expanded",
		specialisms: ["Orthopaedics", "General medicine", "General surgery", "Emergency medicine"],
		services: ["24-hour emergency", "Theatre services", "Physiotherapy", "Diagnostic imaging"],
		blurb:
			"Expanded in 2024 with a dedicated trauma theatre, reflecting the volume of major trauma presentations from the N2 corridor.",
		accreditation: ["Health Professions Council of South Africa"],
	},

	// ─────────────────────────── PHILIPPINES ───────────────────────────
	{
		slug: "medicsupport-manila",
		name: "MedicSupport Metro Manila Hospital",
		city: "Manila",
		country: "Philippines",
		countryCode: "PH",
		beds: 340,
		staffedBeds: 289,
		opened: 2012,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["General surgery", "Cardiology", "Neurology", "Obstetrics & gynaecology"],
		services: ["24-hour emergency", "Intensive care", "Cardiac catheterisation", "Dialysis"],
		blurb:
			"The group's principal Philippine facility and the largest single employer of nurses in the group, running a structured overseas deployment programme.",
		accreditation: ["Department of Health licence", "Philippine Nurses Association registration"],
	},
	{
		slug: "medicsupport-cebu",
		name: "MedicSupport Cebu Central Hospital",
		city: "Cebu City",
		country: "Philippines",
		countryCode: "PH",
		beds: 200,
		staffedBeds: 167,
		opened: 2016,
		level: "Tertiary",
		status: "Expanded",
		specialisms: ["General medicine", "General surgery", "Paediatrics", "Orthopaedics"],
		services: ["24-hour emergency", "Maternity", "Intensive care", "Diagnostic imaging"],
		blurb:
			"Central Visayas referral centre, expanded in 2022 with a 30-bed paediatric intensive care unit.",
		accreditation: ["Department of Health licence"],
	},
	{
		slug: "medicsupport-davao",
		name: "MedicSupport Davao Regional Hospital",
		city: "Davao City",
		country: "Philippines",
		countryCode: "PH",
		beds: 150,
		staffedBeds: 118,
		opened: 2020,
		level: "Secondary",
		status: "Operating",
		specialisms: ["General medicine", "General surgery", "Maternity"],
		services: ["24-hour emergency", "Maternity", "Outpatient clinics", "Tele-radiology"],
		blurb:
			"Serves the Mindanao mainland and the southern island belt, with tele-radiology links back to Metro Manila for second-opinion reporting.",
		accreditation: ["Department of Health licence"],
	},

	// ─────────────────────────── MOROCCO ───────────────────────────
	{
		slug: "medicsupport-casablanca",
		name: "MedicSupport Clinique Atlas Casablanca",
		city: "Casablanca",
		country: "Morocco",
		countryCode: "MA",
		beds: 240,
		staffedBeds: 201,
		opened: 2015,
		level: "Tertiary",
		status: "Operating",
		specialisms: ["Cardiology", "General surgery", "Neurology", "Urology"],
		services: ["24-hour emergency", "Intensive care", "Cardiac catheterisation", "Advanced imaging"],
		blurb:
			"Our Moroccan flagship and the group's main Francophone site, operating to French clinical accreditation standards.",
		accreditation: ["Ministère de la Santé licence", "French-language clinical accreditation"],
	},
	{
		slug: "medicsupport-rabat",
		name: "MedicSupport Clinique Amal Rabat",
		city: "Rabat",
		country: "Morocco",
		countryCode: "MA",
		beds: 130,
		staffedBeds: 102,
		opened: 2018,
		level: "Secondary",
		status: "Operating",
		specialisms: ["General medicine", "General surgery", "Paediatrics", "Maternity"],
		services: ["24-hour emergency", "Maternity", "Outpatient clinics", "Diagnostic imaging"],
		blurb:
			"Situated in the administrative capital, serving a predominantly public-sector referral population alongside private patients.",
		accreditation: ["Ministère de la Santé licence"],
	},
	{
		slug: "medicsupport-marrakech",
		name: "MedicSupport Clinique Palmeraie Marrakech",
		city: "Marrakech",
		country: "Morocco",
		countryCode: "MA",
		beds: 100,
		staffedBeds: 74,
		opened: 2022,
		level: "Secondary",
		status: "New",
		specialisms: ["General medicine", "Orthopaedics", "General surgery"],
		services: ["24-hour emergency", "Maternity", "Outpatient clinics", "Physiotherapy"],
		blurb:
			"Our newest Moroccan site, opened to meet seasonal and resident demand in the Marrakech region.",
		accreditation: ["Ministère de la Santé licence"],
	},
];

export const COUNTRIES = [
	...new Set(HOSPITALS.map((h) => h.country)),
];

export const totalBeds = HOSPITALS.reduce((n, h) => n + h.beds, 0);
export const totalStaffed = HOSPITALS.reduce((n, h) => n + h.staffedBeds, 0);
export const totalStaff = HOSPITALS.reduce(
	(n, h) => n + Math.round(h.staffedBeds * 2.4),
	0,
);