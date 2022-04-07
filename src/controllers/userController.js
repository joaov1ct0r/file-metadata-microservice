const handleFile = (req, res) => {
    if (!req.file) return res.json({ error: 'Arquivo não encontrado!' });
    else {
        res.json({
            name: req.file.originalname,
            type: req.file.mimetype,
            size: req.file.size
        });
    }
};

export default handleFile;
