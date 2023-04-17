const controllers = (app) => {
    app.get('/hello', (req, res) => {
        console.log("Hellooooo")
        res.send("Kooi")
    })
    
    app.get('/hello/:a/:b', (req, res) => {
        console.log("Hellooooo")
        const A = parseInt(req.params.a)
        const B = parseInt(req.params['b'])
        const C = A + B
        console.log(C)
        res.send('Done')
    })
    
    app.post('', () => {})
    app.delete('', () => {})
    app.put('', () => {})
}

export default controllers;

