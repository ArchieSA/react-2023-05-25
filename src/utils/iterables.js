export function normalized(target, key) {
  if(!Array.isArray(target) && !target.length) {
    return {}
  }

  const entities = target.reduce((acc, it) => {
    if(it.hasOwnProperty(key)) {
      const k = it[key];

      acc[k] = it;
    }

    return acc;
  }, {});

  const ids = target.map((it) => it.hasOwnProperty('id') && it.id);

  return {
    entities,
    ids,
  }
}