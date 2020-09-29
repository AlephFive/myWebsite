export function reference_HasItemsFrom_this(masterList, list) {
  for (let i = 0; i < list.length; i++) {
    if (masterList.includes(list[i])) return true;
  }
  return false;
}
