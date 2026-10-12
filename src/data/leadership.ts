/**
 * ============================================================================
 *  PLACEHOLDER DATA — REPLACE THIS ENTIRE FILE.
 * ============================================================================
 *
 *  There are NO names in this file, deliberately.
 *
 *  MedicSupport is an 18-year operator with real directors, a real clinical
 *  leadership team and a real founding story. None of that was available, and
 *  inventing names for a hospital group's leadership is exactly the kind of
 *  fabrication that gets a company into trouble. So this file describes the
 *  ROLES a group of this shape necessarily has, and the remit of each, and
 *  leaves `name` null.
 *
 *  A page showing roles and remits is honest and reads well. A page showing
 *  invented people is neither.
 *
 *  TO COMPLETE: fill the `name` (and `credentials`) fields. Nothing else on
 *  the page needs to change — /about reads only through this file.
 * ============================================================================
 */

export type Leader = {
	slug: string;
	name: string | null;
	role: string;
	remit: string;
	/** Free text under the name. Leave null until supplied. */
	credentials?: string | null;
};

export const LEADERSHIP: Leader[] = [
	{
		slug: "group-ceo",
		name: null,
		role: "Group Chief Executive",
		remit:
			"Accountable for the group as a whole: strategy, capital allocation across territories, and the relationship with every licensing authority we operate under.",
	},
	{
		slug: "group-clinical-director",
		name: null,
		role: "Group Clinical Director",
		remit:
			"Owns the clinical standard applied across every facility. Chairs the group clinical governance forum, which sets policy once and applies it in Accra and in Manchester alike.",
	},
	{
		slug: "group-nursing-director",
		name: null,
		role: "Group Director of Nursing",
		remit:
			"Nursing workforce across the group: recruitment into our own hospitals, retention, practice development, and the standard of care on every ward.",
	},
	{
		slug: "group-operations-director",
		name: null,
		role: "Group Operations Director",
		remit:
			"Runs the facilities. Estates, equipment, supply chain, information systems, and the operational reporting each hospital returns to the centre.",
	},
	{
		slug: "group-quality-director",
		name: null,
		role: "Group Director of Quality and Patient Safety",
		remit:
			"Credential verification, incident reporting, audit and accreditation. Runs the checks behind every MedicSupport-issued credential record.",
	},
	{
		slug: "secondment-lead",
		name: null,
		role: "Head of International Secondment",
		remit:
			"Responsible for placements into Europe and America: matching clinicians to receiving hospitals, destination regulator requirements, and the support that keeps a placement working.",
	},
];