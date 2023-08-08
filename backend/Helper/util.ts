import { randomBytes } from "crypto"

export const RandomName=()=>{
    return randomBytes(32).toString("hex")
}