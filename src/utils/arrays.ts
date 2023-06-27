/**
 * Converts a given enum object to an array of key-value pairs.
 * @param {T} object - The enum object to be converted.
 * @returns {Array<{ key: string, value: string }>} An array of key-value pairs representing the enum object.
 */
export const enumToArray = <T extends Record<string, string>>(
  object: T
): Array<{ key: string; value: string }> =>
  Object.entries(object).map(([key, value]) => ({ key, value }));
