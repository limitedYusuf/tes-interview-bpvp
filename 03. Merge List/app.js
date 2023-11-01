function merge_list(bob, alice) {
   const mergedList = [];
   let i = 0;
   let j = 0;

   while (i < bob.length && j < alice.length) {
      if (bob[i] < alice[j]) {
         mergedList.push(bob[i]);
         i++;
      } else {
         mergedList.push(alice[j]);
         j++;
      }
   }

   while (i < bob.length) {
      mergedList.push(bob[i]);
      i++;
   }

   while (j < alice.length) {
      mergedList.push(alice[j]);
      j++;
   }

   return mergedList;
}

const bob = [3, 4, 6, 10, 11, 15];
const alice = [1, 5, 8, 12, 14, 19];
const merged = merge_list(bob, alice);
console.log(merged);
