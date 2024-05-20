export type ModsType = Record<string, boolean | string | undefined>;

function classNames(
  cls: string,
  mods: ModsType = {},
  additional: Array<string | undefined> = []
) {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([key, value]) => value)
      .map(([key, value]) => key)
  ].join(' ');
}

export default classNames;
