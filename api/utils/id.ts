function generateId(prefix = "") {
  return prefix + Math.random().toFixed(10).slice(2);
}
