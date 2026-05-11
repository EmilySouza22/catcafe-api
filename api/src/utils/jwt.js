import jwt from 'jsonwebtoken'
import { env } from '../env'

export function signTokenAcesso(payload) {
    return jwt.sign(payload, env.chaveAcesso, {
        expiresIn: '1h'
    })
}

export function signTokenRefresh(payload) {
    return jwt.sign(payload, env.chaveRefresh, {
        expiresIn: '30Days'
    })
}

export function verificarTokenAcesso(token) {
    return jwt.verify(token, env.chaveAcesso)
}
export function verificarTokenRefresh(token) {
    return jwt.verify(token, env.chaveRefresh)
}

export function getToken(token){
    return jwt.decode(token)
}