const Item = require("../models/item");

exports.getItems = async (req, res, next) => {
    try {
        const filter = {};
        if (req.query.type) {
            filter.type = req.query.type;
        }
        let query = Item.find(filter);
        if (req.query.sort === "reward") {
            query = query.sort({ reward: 1 });
        }
        const items = await query;
        res.status(200).json(items);
    } catch (err) {
        next(err);
    }
};

exports.getPendingItems = async (req, res, next) => {
    try {
        const items = await Item.find({ returned: false });

        res.status(200).json(items);
    } catch (err) {
        next(err);
    }
};

exports.getItem = async (req, res, next) => {
    try {
        const id = req.params.id;
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({
                message: "Item not found"
            });
        }
        res.status(200).json(item);
    } catch (err) {
        next(err);
    }
};


exports.createItem = async (req, res, next) => {
    try {
        const { item, reward } = req.body;
        if (!item) {
            return res.status(400).json({
                message: "item is required"
            });
        }
        if (reward === undefined) {
            return res.status(400).json({
                message: "reward is required"
            });
        }
        const itemData = await Item.create(req.body);
        return res.status(201).json(itemData);
    } catch (err) {
        next(err);
    }
};


exports.updateItem = async (req, res, next) => {
    try {
        const id = req.params.id;
        const item = await Item.findByIdAndUpdate(id,req.body,
            {
                returnDocument: "after",
                runValidators: true
            }
        );
        if (!item) {
            return res.status(404).json({
                message: "Item not found"
            });
        }
        res.status(200).json(item);
    } catch (err) {
        next(err);
    }
};

exports.deleteItem = async (req, res, next) => {
    try {
        const id = req.params.id;
        const item = await Item.findByIdAndDelete(id);
        if (!item) {
            return res.status(404).json({
                message: "Item not found"
            });
        }
        res.status(200).json({
            message: "Item deleted successfully"
        });
    } catch (err) {
        next(err);
    }
};

