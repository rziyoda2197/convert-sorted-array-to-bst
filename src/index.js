class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sortedArrayToBST(arr, start = 0, end = null) {
  if (end === null) end = arr.length - 1;
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  const node = new Node(arr[mid]);
  node.left = sortedArrayToBST(arr, start, mid - 1);
  node.right = sortedArrayToBST(arr, mid + 1, end);

  return node;
}
```

Kodni ishlatish uchun misol:

```javascript
const arr = [-10, -3, 0, 5, 9];
const root = sortedArrayToBST(arr);
console.log(root.val); // 0
console.log(root.left.val); // -3
console.log(root.right.val); // 9
console.log(root.left.left.val); // -10
console.log(root.right.right.val); // 5
