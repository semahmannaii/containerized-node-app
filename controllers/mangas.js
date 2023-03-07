const Manga = require("../models/manga")

function getMangas(req, res, next) {
  Manga.findAll()
    .then(mangas => {
      res.status(200).json(mangas)
    })
    .catch((err) => {
      console.log(err)
    })
}

function getManga(req, res, next) {
  const mangaId = req.params.mangaId
  Manga.findByPk(mangaId)
    .then((manga) => {
      if (!manga) {
        return res.status(404).json({ message: "Manga not found" })
      }
      res.status(200).json(manga)
    })
    .catch((err) => {
      console.log(err)
    })
}

function createManga(req, res, next) {
  Manga.create({
    title: req.body.title,
    chapters: req.body.chapters
  })
    .then((manga) => {
      res.status(201).json(manga)
    })
    .catch((err) => {
      console.log(err)
    })
}

function updateManga(req, res, next) {
  const mangaId = req.params.mangaId
  const updatedTitle = req.body.title
  const updatedChapters = req.body.chapters
  Manga.findByPk(mangaId)
    .then((manga) => {
      if (!manga) {
        return res.status(404).json({ message: "Manga not found" })
      }
      manga.title = updatedTitle
      manga.chapters = updatedChapters
      return manga.save()
    })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

function deleteManga(req, res, next) {
  const mangaId = req.params.mangaId

  Manga.findByPk(mangaId)
    .then((manga) => {
      if (!manga) {
        return res.status(404).json({ message: "Manga not found" })
      }
      return Manga.destroy({
        where: {
          id: mangaId
        }
      })
    })
    .then(() => {
      res.status(200).json({ message: "Manga has been deleted" })
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = { getMangas, getManga, createManga, updateManga, deleteManga }