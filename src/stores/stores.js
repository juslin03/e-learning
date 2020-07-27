import { writable } from "svelte/store";

export const userLogin = writable(null);

export const logout = () => userLogin.set(null);

export const 