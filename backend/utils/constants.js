const CREATED_CODE = 201;

// Регулярное выражение
const urlRegexPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

// Секретный ключ для режима разработки
const SECRET_KEY_DEV = 'dev-secret';

module.exports = {
  CREATED_CODE,
  urlRegexPattern,
  SECRET_KEY_DEV,
};
