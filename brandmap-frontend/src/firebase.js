// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCm01nM5aU/RfRa\n7gcFFfzK2Dym0I1ZNlFHEfPs5/5fyWQzeI7zq5DOgr5g1ZPrm4L+/RA1KhkzBfdz\nahiRzxs+tqLXLl8lDKGH163gKyhd+vaz55w9CsjhNK3CXyf45uz3dBUOh6pKypMB\ntRFhCDmgNj+ZxC9JTkEAIG1YC40LLmA2BFV+zlH9+U2tMJnrK4+UuAacEzQzYoKY\n8HFJUhn+Hu7YTJo3vNJf8gB4UbSqJOu/I6HOFTsytn8VYj81T63JuLbDhq4pllBX\nnnWGcoUtqquRf8GbxebS7lXwIXSteA+ZL02aEgcX4z7AKgnCgMzwdfd3smQellxK\nHAJADzdBAgMBAAECggEAJAu5tQiPrn6+gCE7OhGYp/mWDVM1n2eZozoRUwiDkY3R\nzT9I4ASbist8OC8dwYQ+BzuF037vp/Mrlu//NA4kbGYJBGacH0S96DylcLDSjY/q\n2095lkTsx6BaxQtLdz/qRsN5w0Rz+qoPnohRo34j+WaPUnmt3/B9Ifpftez1Akuf\nEFNY5GX7Ifj+q14XpQvd6o6Sfx5LZ9jJTtOBzo1HLk1W8KCEgSLROfcrwA9HC/xi\nl+B4XPaoOAhOyq/HaMAcvqOqwDjM/Zr9WtyIX/ZA8OX6eaKhh+bY6Jvz7k0taYoW\nkd6VA3IwLjzsy5vSNMXF2TMzKt4F2T6RkwhWSLDM6wKBgQDYDiyV0XT0xoij2SLc\nioKYkV/VcG7GnnnZj8O6x2x31X55CoIT3dcqY5uMyOZOSBMc0fSof0VJXaDmzTb/\nOlOCN4/On35cwgdi1HXuVpi4qjaCwU5Ub7k6gOjUIPSGUjSAEfejMFj9ucGtZe/s\naEWRsOorM0RQ+C9Ek1kKSvJTkwKBgQDFqyXxc6Uab4IUVL2NcvbY+iI8Zx17IQEe\nHnKC7bKDK7fEmXRqLFDDtoLyt+goTlHwsTvzKZH+2r4P6Dv9JNF1vgddPKeH9423\nnTYeac7YV9T2exPpDdoFTah3Lv+YcZmO0usRwgqdBAtUp0Z5gXZGA7JMY1vZCoAG\nrqMN7Bu2WwKBgHgbwRt0erFM4U88+c1izuEkCAOu4lZWaWTSMDxYeutPa2S8u71x\nmRj+kM2+LZIdLUrbSUiWoBz+COHl+Yn/kccVPkPelK/aSaLee8UIrRQTxAQClJoK\nFg349fZfb7BwaLE9y84TpZU/u/S6c5uYB/zLPhLQCE1++0ADLf+z1G0zAoGAVG8I\n5Bw72BDthXW1CiijXIdr/FUneKLecVkcHOUfrXwNIUNTQM7xKMhbIwZ/ekgKJD/w\nlauaGzyglvbiOP1zI1Iqnx77iM6rkFTs+wzDOBI8e5STKqeqCz3iyhYfQ6SyrRlX\nI9y4390MYfqZ1ekA9mM50/tVDl631SLfr2C9baUCgYBgQc1rG3lwIQ7X88m70Ae9\nvDQOrlpmn2M4MOJrty/V/ZwDEwkuCJ2GHclatAdGqHjWhkiYyhpxtTKNc/eO7JKp\nrMsuTS1qYVzOnS/Aaew+8OxxZJQHM2ZER+gh2TKseFZIGavBfgf2aHkvykCBu8V9\nk3AaGeNez6XYRcAcKb4Ueg==",
  authDomain: "https://accounts.google.com/o/oauth2/auth",
  projectId: "32b54c7d8d8c89033495c4f751a3b6cf5c8ca4c1",
  storageBucket: "https://oauth2.googleapis.com/token",
  messagingSenderId: "112043746362022078215",
  appId: "brandmap-961c9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
