type Data = ReadonlyArray<{
  [key: string]: boolean | void | number | string;
}>;

type OmitKeys<D extends Data, K extends keyof D[0]> = Array<Omit<D[0], K>>;
type PickKeys<D extends Data, K extends keyof D[0]> = Array<Pick<D[0], K>>;

export const trainDataToXY = <
  D extends Data,
  L extends keyof Data[0],
  R1 extends OmitKeys<D, L>,
  R2 extends PickKeys<D, L>
>(
  data: D,
  labels: { [name: string]: true }
): [R1, R2] => {
  const x: R1 = [];
  const y: R2 = [];

  for (let i = 0; i < data.length; i++) {
    const sample = data[i];
    type Seed = { x: R1[0]; y: R2[0] };
    const seed: Seed = { x: {}, y: {} };

    const xy = Object.entries(sample).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [labels[key] ? 'y' : 'x']: {
          ...[acc[labels[key] ? 'y' : 'x']],
          [key]: value,
        },
      }),
      seed
    );

    x.push(xy.x);
    y.push(xy.y);
  }

  return [x, y];
};
