export class ClienteNaoExiste extends Error {
    constructor() {
        super('Este cliente não existe.')
    }
}