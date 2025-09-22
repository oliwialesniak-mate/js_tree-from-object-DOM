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

/**
 * Recursively creates a nested list (ul/li) from a nested object
 * @param {HTMLElement} element - DOM element to append the tree to
 * @param {Object} data - nested object to transform into a tree
 */
function createTree(element, data) {
  if (!data || typeof data !== 'object') return;

  const keys = Object.keys(data);
  if (!keys.length) return; // Don't create <ul> for empty objects

  const ul = document.createElement('ul');

  keys.forEach(key => {
    const li = document.createElement('li');
    li.textContent = key;

    // Recursively create nested list if the value is an object
    if (data[key] && typeof data[key] === 'object' && Object.keys(data[key]).length) {
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  });

  element.appendChild(ul);
}

createTree(tree, food);
