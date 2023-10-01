
exports.createPost = async (req, res) => { 
    res.status(200).json({status:"success", data: "Create Post API"})
};


exports.readPost = async (req, res) => { 
    res.status(200).json({status:"success", data: "Read Post API"})
};


exports.deletePost = async (req, res) => { 
    res.status(200).json({status:"success", data: "Delete Post API"})
};


exports.updatePost = async (req, res) => { 
    res.status(200).json({status:"success", data: "Update Post API"})
};