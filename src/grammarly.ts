/**
 * Display items with pretty formatting e.g todo, todos , not found
 */
export const grammarlyItem = (count: number, names: [string, string, string | undefined]) => {
	switch (count) {
		case 0:
			return names[2] ? names[2] : "Empty";
		case 1:
			return count + " " + names[0];
		default:
			return count + " " + names[1];
	}
};
