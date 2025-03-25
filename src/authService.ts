import { auth } from "./firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail, 
  signOut,
  sendEmailVerification,
  User
} from "firebase/auth";

// Sign up a user and send a verification email
export const signUp = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(userCredential.user);
  return userCredential.user;
};

// Sign in a user
export const signIn = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Send password reset email
export const resetPassword = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};

// Sign out a user
export const logOut = async () => {
  await signOut(auth);
};

// Check if user is verified
export const isEmailVerified = (user: User) => {
  return user.emailVerified;
};
