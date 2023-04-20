/* eslint-disable no-console */
import { COMMENTS_LIST, NAMES } from './data.js';
// function getRandomPositiveInteger(a, b) {
//     const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
//     const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
//     const result = Math.random() * (upper - lower + 1) + lower;
//     return Math.floor(result);
//   }

// function checkInputLength(stringNumber, maxStringLength) {
//     if (length.stringNumber <= maxStringLength) {
//       return true;
//     }
//     return false;
//   }

//   function checkStringLength(string, length) {
//     return string.length <= length;
//   }
let globalId = -1;
let commentId = -1;

function randomNumber(a, b) {
  if (a > b || a === b) {
    return console.error('Wrong randomNumber parameters');
  }
  return (Math.floor(Math.random() * b) + a + 1);
}

function commentsGenerator() {
  commentId += 1;
  return {
    id: commentId,
    avatar: `img/avatar${randomNumber(1, 6)}.svg`,
    name: NAMES[randomNumber(0, NAMES.length - 1)],
    message: COMMENTS_LIST[randomNumber(0, COMMENTS_LIST.length)],
  };
}

const photoDescription = () => {
  globalId += 1;
  return {
    id: globalId,
    url: `photos/${globalId}.jpg`,
    description: 'Лучшая фотография в своем роде',
    likes: randomNumber(15, 201),
    comments: commentsGenerator(),
  };
};
const generatePosts = Array.from({ length: 25 }, photoDescription);

console.log(generatePosts);