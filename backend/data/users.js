import bcrypt from 'bcrypt'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },

    {
        name: 'Ian Lombu',
        email: 'ian@example.com',
        password: bcrypt.hashSync('123456', 10)
    },

    {
        name: 'Saduk',
        email: 'saduk@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users