const getCategories = () => {
  const categories = document.querySelector('#categories').children;
  const items = document.querySelectorAll('.item');
  console.log(`Number of categories : ${categories.length}`);

  items.forEach(item => {
    const elements = item.firstElementChild.textContent;
    const elementsAmount = item.querySelector('ul').children.length;
    console.log(`Category: ${elements}`);
    console.log(`Elements: ${elementsAmount}`);
  });
};

getCategories();
