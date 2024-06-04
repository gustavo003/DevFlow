import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];
export const questionsExample = [
  { id: 1, name: "Question 1" },
  { id: 1, name: "Question 2" },
  { id: 1, name: "Question 3" },
  { id: 1, name: "Question 4" },
  { id: 1, name: "Question 5" },
];
export const questions = [
  {
    _id: "1",
    title: "Qual o preço do medo abundante de todas as verdades?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "", // Add a default or specific picture URL here
    },
    upvotes: 10,
    views: 100,
    answers: [], // Initialize as an empty array or add specific objects as needed
    createdAt: new Date("2021-09-11"),
  },
  {
    _id: "2",
    title: "O que é a vida?",
    tags: [
      { _id: "1", name: "css" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "2",
      name: "John Doe",
      picture: "", // Add a default or specific picture URL here
    },
    upvotes: 10,
    views: 100,
    answers: [], // Initialize as an empty array or add specific objects as needed
    createdAt: new Date("2021-09-11"),
  },
];

export const tagsExample = [
  { id: 1, name: "Tag 1", totalQuestions: 0 },
  { id: 1, name: "Tag 2", totalQuestions: 2 },
  { id: 1, name: "Tag 3", totalQuestions: 5 },
  { id: 1, name: "Tag 4", totalQuestions: 10 },
  { id: 1, name: "Tag 5", totalQuestions: 12 },
];
export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];
export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
