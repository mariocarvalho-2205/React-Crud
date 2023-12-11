const connection = require('../db/db')

const getAllItens = async () => {
    const [query] = await connection.execute()
}
