type ModsType = Record<string, boolean | string>;

function classNames(
  cls: string,
  mods: ModsType = {},
  additional: string[] = []
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
