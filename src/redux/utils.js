export const entityToSlice = (entitiesArray, idSelector = (entity) => entity.id) => (
  {
    entities: entitiesArray.reduce((acc, entity) => {
      acc[idSelector(entity)] = entity;
  
      return acc;
    }, {}),

    ids: entitiesArray.map(idSelector),
  }
)
