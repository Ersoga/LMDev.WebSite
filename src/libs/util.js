
export const TOKEN_KEY = ''
export function setToken(token){
    localStorage.setItem(TOKEN_KEY, token);
}
export function getToken() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) return token
    else return ""
  }