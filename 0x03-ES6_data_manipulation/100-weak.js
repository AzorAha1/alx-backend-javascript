export const weakMap = new WeakMap();

export default function queryAPI(http, name) {
  return {
    protocol: http,
    name,
  };
}
