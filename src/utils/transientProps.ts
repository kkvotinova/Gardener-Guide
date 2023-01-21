// TODO: типизация

export const transientProps = {
  shouldForwardProp: (propName: any) => {
    if (propName === 'as') return false;
    if (propName.startsWith('$')) return false;

    return true;
  },
};

export default transientProps;
