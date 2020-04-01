let data = [
    {
        id: 1,
        username : 'ario',
        password : '123',
        role : 'user'
    },
    {   
        id: 2,
        username : 'admin',
        password : 'admin',
        role : 'admin'
    }
]

module.exports = {
    getAllUsers : (req,res) => {
        res.status(200).send(data)
    },
    getUserById : (req,res) => {
        let byId = data.find(val => val.id === parseInt(req.params.id))
        // console.log(byId) => jika id yang diinput bukan 1 dan 2, maka byId undefined
        if (byId) {
            res.status(200).send(byId)
        } else {
            res.status(404).send('Not Found')
        }
    },
    searchByUsername : (req,res) => {
        let username = req.query.username
        console.log(username)
        let search = data.filter(val => val.username.includes(username))

        if (search.length > 0) {
            res.status(200).send(search)
        } else {
            res.status(404).send('Not Found')
        }
    },
    Login : (req,res)=>{
        let username= req.params.username
        let password = req.params.password
        console.log(username)
        console.log(password)
        let login = data.find((val)=>val.username===username&&val.password===password)
        console.log(login)
        if(login){
            res.status(200).send(login)
        }else{
            res.statu(404).send('NotFound')
        }
    },
    searchByRole : (req,res)=>{
        let roles = req.query.role
        console.log(roles)
        let listrole = data.filter((val)=> val.role.includes(roles))
        console.log(listrole)
        if(listrole){
            res.status(200).send(listrole)
        }else{
            res.status(404).send('notFound')
        }
    }
}