type ReturnValue<Obj, Key extends keyof Obj> = Omit<Obj, Key> extends Obj
  ? Obj[Key] | undefined
  : Obj[Key];

export const getInObject = <Obj, Key extends keyof Obj>(key: Key) => (
  obj: Obj,
): ReturnValue<Obj, Key> => obj[key] as ReturnValue<Obj, Key>;
