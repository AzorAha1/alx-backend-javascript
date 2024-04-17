export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  const filteredmap = Array.from(map.entries()).filter(([, value]) => value === 1);
  filteredmap.forEach(([key]) => {
    map.set(key, 100);
  });
  return filteredmap;
}
