const emilyRoute = (req, res) => {
    res.send('Emily Birch');
};

const hannaRoute = (req, res) => {
    res.send('Hanna Birch');
};

module.exports = {
    emilyRoute, hannaRoute
};