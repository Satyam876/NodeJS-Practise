const figlet = require('figlet')

figlet('SATYAM', function(err, data){
    if(err){
        console.log(err)
        return
    }
    console.log(data)
});