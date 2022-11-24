const assertNever: (...args: [never, ...never[]]) => never = () => {
  throw new Error(`assertNever must never be called.`);
};

export default assertNever;
