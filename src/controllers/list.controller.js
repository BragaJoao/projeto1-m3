const listsService = require('../services/list.service');

const findAllListsController = (req, res) => {
  const lists = listsService.findAllListsService();
  res.send(lists);
};

const findByIdListController = (req, res) => {
  const idParam = +req.params.id;
  const chosenList = listsService.findByIdListService(idParam);
  res.send(chosenList);
};

const createListController = (req, res) => {
  const list = req.body;
  const newList = listsService.createListService(list);
  res.send(newList);
};

const updateListController = (req, res) => {
  const idParam = +req.params.id;
  const listEdit = req.body;
  const updatedList = listsService.updateListService(idParam, listEdit);
  res.send(updatedList);
};

const deleteListController = (req, res) => {
  const idParam = req.params.id;
  listsService.deleteListService(idParam);
  res.send({ message: 'Item deletado com sucesso!' });
};

module.exports = {
  findAllListsController,
  findByIdListController,
  createListController,
  updateListController,
  deleteListController,
};
