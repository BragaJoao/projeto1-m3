const lists = [
  {
    id: 1,
    text: 'Este é um exemplo da sua lista',
  },
];

const findAllListsService = () => {
  return lists;
};

const findByIdListService = (idParam) => {
  return lists.find((list) => list.id == idParam);
};

const createListService = (newList) => {
  const newId = lists.length + 1;
  newList.id = newId;
  lists.push(newList);
  return newList;
};

const updateListService = (id, listEdited) => {
    listEdited['id'] = id;
  const listIndex = lists.findIndex((list) => list.id == id);
  lists[listIndex] = listEdited;
  return listEdited;
};

const deleteListService = (id) => {
    const listIndex = lists.findIndex((list) => list.id == id);
  return lists.splice(listIndex, 1);
};

module.exports = {
  findAllListsService,
  findByIdListService,
  createListService,
  updateListService,
  deleteListService,
};
