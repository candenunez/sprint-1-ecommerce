let userController = {

    register: (req, res) =>  {

        res.render ('register')
    },
    login: (req, res) =>  {

        res.render ('login')
    
    },
       profile: (req, res) =>  {
    
        res.render ('profile')
    
    }
}


module.exports = userController;
    