const loginPost=async(req, res) => {
    try {
        const { email, password } = req.body
        if(!email || !password)
            return res.status(400).json({ message: 'Invalid login data. Email and password are required.' });
        res.status(200).json({ email, password })
    } catch (error) {
        console.error('Error while logging in, ',error)
        res.status(500).send('error while logging in')
    }
}


module.exports={loginPost}