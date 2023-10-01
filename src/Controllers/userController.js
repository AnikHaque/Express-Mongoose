
exports.createUser = async (req, res) => { 
    res.status(200).json({status:"success", data: "Create User API"})
};


exports.readUser = async (req, res) => { 
    res.status(200).json({status:"success", data: "Read User API"})
};


exports.deleteUser = async (req, res) => { 
    res.status(200).json({status:"success", data: "Delete User API"})
};


exports.updateUser = async (req, res) => { 
    res.status(200).json({status:"success", data: "Update User API"})
};