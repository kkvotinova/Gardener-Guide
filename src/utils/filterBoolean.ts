const filterBoolean = <T>(entity: T): entity is Exclude<T, boolean | undefined> => {
  return entity && typeof entity !== 'boolean';
};

export default filterBoolean;
