const { Router } = require("express")
const { getMangas, getManga, createManga, updateManga, deleteManga } = require("../controllers/mangas")

const router = Router()

router.get("/", getMangas)
router.get("/:mangaId", getManga)
router.post("/", createManga)
router.put("/:mangaId", updateManga)
router.delete("/:mangaId", deleteManga)

module.exports = router