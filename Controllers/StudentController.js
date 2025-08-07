exports.index = (req, res) => {
    res.send("welcome to the students api \n");  
};
exports.show = (req, res) => {
    res.send(`showing data for ID: ${req.params.id} \n`);  
};
exports.store = (req, res) => {
    res.send(`Data received: ${req.body.name}, ${req.body.city},${req.body.state} \n`);  
};
exports.update = (req, res) => {
    res.send(`data updated for ID: ${req.params.id}, Name: ${req.body.name}, City: ${req.body.city} \n`);  
};

exports.delete = (req, res) => {
    res.send(`data deleted for ID: ${req.params.id}\n`);
};
