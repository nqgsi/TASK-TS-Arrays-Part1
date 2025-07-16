// 🌶️🌶️🌶️ **Challenge**

// Step 1:
// Write a deleteThirdItem function that deletes the third item from the groceries argument
// and returns the modified groceries list
function deleteThirdItem(groceries: string[]): string[] {
  const eremove = 2;

  groceries.splice(eremove, 1);

  return groceries;
}

// Step 2:
// Write a insertItemAtBeginning function that inserts a new grocery item at the beginning of the groceries argument
// and returns the modified groceries array
function insertItemAtBeginning(groceries: string[], item: string): string[] {
  const addItem: string[] = [item];
  addItem.push(...groceries);

  return addItem;
}

// Step 3:
// Write a replaceFirstTwoItems function that replace the first two elements with 'ketchup' and 'chili'
// and return the modified groceries array
function replaceFirstTwoItems(groceries: string[]): string[] {
  const repItem: string[] = ["ketchup", "chili"];
  repItem.push(...groceries);

  return repItem;
}

export { deleteThirdItem, insertItemAtBeginning, replaceFirstTwoItems };
