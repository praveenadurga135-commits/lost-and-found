
const errorHandler = (err, req, res, next) => {
    console.log(err);

    if (err.name === "CastError") {
        return res.status(400).json({
            message: "Invalid id"
        });
    }

    res.status(500).json({
        message: "Server error"
    });
};

module.exports = errorHandler;