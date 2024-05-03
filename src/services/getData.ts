async function getData() {
    try {
        const response = await fetch('https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData')
        if (!response.ok) {
            throw new Error(`Houve um problema ao tentar conexão com a API: ${response.status} ${response.statusText}`)
        }
    } catch (error) {
        throw new Error('Houve um problema ao tentar conexão com a API')
    }
}

export { getData }