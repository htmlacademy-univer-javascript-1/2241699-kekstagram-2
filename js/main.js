let commentId = -1;
let globalId = -1;
const NAMES = ['Вася', 'Петя', 'Саша', 'Дима', 'Двойник Кекса'];
const COMMENTS_LIST = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// eslint-disable-next-line no-unused-vars
function getSum(a, b) {
  const sum = a + b;
  return sum;
}

function randomNumber(a, b) {
  if (a > b || a === b) {
    return console.error('Wrong randomNumber parameters');
  }
  return (Math.floor(Math.random() * b) + a);
}

function checkInputLength(stringNumber, maxStringLength) {
  if (length.stringNumber <= maxStringLength) {
    return true;
  }
  return false;
}

function checkStringLength(string, length) {
  return string.length <= length;
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
    url: `photos/${  globalId  }.jpg`,
    description: 'Лучшая фотография в своем роде',
    likes: randomNumber(15, 201),
    comments: commentsGenerator(),
  };
};
const generatePosts = Array.from({ length: 25 }, photoDescription);
// eslint-disable-next-line no-console
console.log(generatePosts);
