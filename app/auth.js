import { setCookie } from "@std/http/cookie";
import { createSession } from './models/sessions.js'; 

export function login(headers, username) {
    const sessionId = createSession(username);
    setCookie(headers, {
        name: 'sessionId',
        value: sessionId,
        path: '/'
    });
}