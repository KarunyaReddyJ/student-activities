const signupPost=async(req, res) => {
    try {
        const { username,email, password } = req.body
        if(!username || !email || !password)
            return res.status(400).json({ message: 'Invalid signup data.Username, Email and password are required.' });
        res.status(200).json({ username,email, password })
    } catch (error) {
        console.error('Error while logging in, ',error)
        res.status(500).send('error while signing up')
    }
}

module.exports={signupPost}