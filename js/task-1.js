const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(categoryItem => {
  const title = categoryItem.querySelector('h2').textContent;
  const count = categoryItem.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
});
