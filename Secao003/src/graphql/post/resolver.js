const users = () => {
  return [
    {
      id: '1',
      userName: 'thais_alves',
    },
    {
      id: '2',
      userName: 'bia_burguesa',
    },
    {
      id: '3',
      userName: 'wanda_maximoff',
    },
  ];
};

const user = () => {
  return {
    id: '1',
    userName: 'Luiz',
  };
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
