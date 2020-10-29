/**
 * Maps an array while retaining information on its length and names of its
 * elements in the returned type.
 */
export const mapTuple = <Source extends unknown[], To>(
  project: (value: Source[number]) => To,
) => (source: Source): { [Key in keyof Source]: To } =>
  source.map(project) as { [Key in keyof Source]: To };
