var count = 0;
function count() {
  count++;
  return count;
}

image.addEventListener('touchstart', e => {
  count();
});