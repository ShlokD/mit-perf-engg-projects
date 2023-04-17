const x = "10010110".split("").map((d) => parseInt(d));

11010010;
const reverse = (arr, start, end) => {
  while (start < end) {
    let t = arr[start];
    arr[start] = arr[end];
    arr[end] = t;
    start++;
    end--;
  }
};
reverse(x, 0, 2);
reverse(x, 3, x.length - 1);
reverse(x, 0, x.length - 1);

console.log(x.join(""));
