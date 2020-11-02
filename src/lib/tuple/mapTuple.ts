/**
 * Maps an array while retaining information on its length and names of its
 * elements in the returned type.
 */
export const mapTuple = <Source extends readonly unknown[], To>(
  project: (value: Source[number]) => To,
) => (source: Source): Readonly<{ [Key in keyof Source]: To }> =>
  (source.map(project) as unknown) as { [Key in keyof Source]: To };
