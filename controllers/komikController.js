const db = require('../models');
const komikService = require('../services/komikService'); // Perbaiki di sini

async function createKomik(req, res) {
    try {
        const komikData = req.body;

        if (req.file) {
            komikData.imageType = req.file.mimetype;
            komikData.imageName = req.file.originalname;
            komikData.imageData = req.file.buffer;
        }

        const result = await komikService.createKomik(db, komikData); // Perbaiki di sini
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

async function getAllKomiks(req, res) {
    try {
        const result = await komikService.getAllKomiks(db); // Perbaiki di sini
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function getKomikById(req, res) {
    try {
        const id = req.params.id;
        const result = await komikService.getKomikById(db, id); // Perbaiki di sini
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

async function updateKomik(req, res) {
    try {
        const komikData = req.body;

        if (req.file) {
            komikData.imageType = req.file.mimetype;
            komikData.imageName = req.file.originalname;
            komikData.imageData = req.file.buffer;
        }
        const result = await komikService.updateKomik(db, req.params.id, komikData); // Perbaiki di sini
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

async function deleteKomik(req, res) {
    try {
        const result = await komikService.deleteKomik(db, req.params.id); // Perbaiki di sini
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    createKomik,
    getAllKomiks,
    getKomikById,
    updateKomik,
    deleteKomik
};