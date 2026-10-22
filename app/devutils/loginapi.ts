import { createCookieSessionStorage } from "react-router";

type SessionData = {
  userId: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: "lax",
      secrets: ["s3cret1"],
      secure: true,
    },
  });

export function logUserIn(credentials: { username: string; password: string }) {
  if (credentials.username === "admin" && credentials.password === "admin") {
    return {
      userId: "1",
      username: "admin",
      sessionId: "somer4nd0midfortheuser",
    };
  }
  return {
    userId: null,
    username: null,
    sessionId: null,
  };
}

export function verifySession(userSessionObj: {
  userId: string;
  username: string;
  sessionId: string;
}) {
  if (userSessionObj.sessionId != null) {
    return true;
  }
  return false;
}

export function guestLogin() {
  return {
    userId: "2",
    username: "Guest",
    sessionId: "somerandomidfortheguest",
  };
}
