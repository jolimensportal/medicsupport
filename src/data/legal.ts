/**
 * Legal entity details — the single place the site's legal pages read from.
 *
 * WHY THIS IS A SEPARATE FILE
 * --------------------------
 * Everything below is a real company fact that we do not yet have. Rather than
 * scatter `[TBC]` strings across four long documents — where they are easy to
 * miss and impossible to find later — every legal page imports ENTITY and
 * renders these values. When the real details arrive, this file is edited once
 * and all four documents follow.
 *
 * HOW TO FINISH IT
 * ----------------
 * Replace each bracketed placeholder with the real value and set the matching
 * `_complete` flag to true. While any flag is false the pages carry a visible
 * DRAFT banner, so a document can never quietly look final while it is still
 * missing a registered address or a regulator name.
 *
 * ⚠️ NONE OF THIS HAS BEEN REVIEWED BY A LAWYER. It is a working draft that
 * states the group's actual operating model accurately, not legal advice.
 * Have counsel review all four documents before commercial launch.
 */

export interface LegalEntity {
	/** Registered company name. */
	name: string;
	/** Trading name used across the site. */
	tradingName: string;
	/** Company registration number and jurisdiction of incorporation. */
	registration: string;
	/** Registered / head office address. */
	address: string;
	/** Data protection contact. */
	dpoEmail: string;
	/** General enquiries contact. */
	generalEmail: string;
	/** Professional regulators the group is registered with, by country. */
	regulators: string;
	/** Date the group was first established. */
	established: string;

	_complete: {
		name: boolean;
		registration: boolean;
		address: boolean;
		dpoEmail: boolean;
		regulators: boolean;
	};
}

export const ENTITY: LegalEntity = {
	name: "[REGISTERED COMPANY NAME — TO BE SUPPLIED]",
	tradingName: "MedicSupport Network",
	registration: "[COMPANY REGISTRATION NUMBER AND JURISDICTION — TO BE SUPPLIED]",
	address: "[REGISTERED OFFICE ADDRESS — TO BE SUPPLIED]",
	dpoEmail: "[DATA PROTECTION CONTACT — TO BE SUPPLIED]",
	generalEmail: "enquiries@medicsupport.network",
	regulators: "[PROFESSIONAL REGISTRATORS, BY COUNTRY — TO BE SUPPLIED]",
	established: "2007",

	_complete: {
		name: false,
		registration: false,
		address: false,
		dpoEmail: false,
		regulators: false,
	},
};

/** True while any required entity detail is still outstanding. */
export const LEGAL_DRAFT = Object.values(ENTITY._complete).some((v) => !v);

/**
 * Human-readable labels for the outstanding fields.
 *
 * These are shown to the public on the draft banner, so they must read as prose
 * ("registered office address"), never as the internal key ("address"). The
 * first draft printed the raw keys and the page said "missing: dpoEmail".
 */
const FIELD_LABELS: Record<keyof LegalEntity["_complete"], string> = {
	name: "registered company name",
	registration: "company registration number",
	address: "registered office address",
	dpoEmail: "data protection contact",
	regulators: "professional regulators",
};

/** Which placeholders are still missing, as readable prose for the banner. */
export const MISSING = Object.entries(ENTITY._complete)
	.filter(([, done]) => !done)
	.map(([field]) => FIELD_LABELS[field as keyof typeof FIELD_LABELS]);