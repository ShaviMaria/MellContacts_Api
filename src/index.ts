import app from './app'

const main = (): void => {
    app.listen(app.get('port'))
    console.log(`Server running on port ${4000}`)
}

main()