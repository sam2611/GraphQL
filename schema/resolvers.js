const {UserList}= require("../FakeData");

const resolvers={
    Query: {
        
        users(){
            const userList = UserList;
            console.log(Array.isArray(userList)); // Should log true
            return userList;
        },
    },

};

module.exports={resolvers}