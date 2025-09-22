'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (!data || typeof data !== 'object') return;

  const ul = document.createElement('ul');

  Object.keys(data).forEach(key => {
    const li = document.createElement('li');
    li.textContent = key;

    // If the value is an object with keys, recursively create nested list
    if (data[key] && typeof data[key] === 'object' && Object.keys(data[key]).length) {
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  });

  element.appendChild(ul);
}

// Example usage
const tree = document.querySelector('#tree');
const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },
  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

createTree(tree, food);
