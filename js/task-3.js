
function getElementWidth(content, padding, border) {

  const contentWidth = parseFloat(content.replace('px', ''));

  const paddingValue = parseFloat(padding.replace('px', ''));

  const borderValue = parseFloat(border.replace('px', ''));
  

  const totalWidth = contentWidth + 2 * (paddingValue + borderValue);

  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
  
  