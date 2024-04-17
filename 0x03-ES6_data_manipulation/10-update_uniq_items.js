export default function updateUniqueItems(map) {
  const filteredmap = Array.from(map.entries()).filter(([, value]) => value === 1);
  filteredmap.forEach(([key]) => {
    map.set(key, 100);
  });
  return filteredmap;
}
