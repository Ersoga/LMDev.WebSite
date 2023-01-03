import * as React from 'react'
export const TOKEN_KEY = ''
export function setToken(token){
    window.localStorage.setItem(TOKEN_KEY, token);
}
export function getToken() {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) return token
    else return ""
  }