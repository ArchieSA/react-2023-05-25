const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body);
  }, timeout);

const getById = (entities) => (id) =>
  entities.find((entity) => entity.id === id);

const updateById = (entities) => (id, data) => {
  const index = entities.findIndex((entity) => entity.id === id);
  entities[index] = { ...entities[index], ...data };

  return entities[index];
};

module.exports = { reply, getById, updateById };
