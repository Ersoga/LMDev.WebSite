import * as React from 'react'
export const TOKEN_KEY = ''
export function setToken(token){
    if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
        return false;
    }
    window.localStorage.setItem(TOKEN_KEY, token);
}
export function getToken() {
    if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
        return "";
    }
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) return token
    else return ""
  }