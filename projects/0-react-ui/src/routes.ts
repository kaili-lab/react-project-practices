import type { RouteLink } from ".";
import Profile from "./pages/0-vanilla-css/1-profile/profile";
import QuizHome from "./pages/1-quize/quiz-home";
import ColorPalette from "./pages/2-color-pallete/color-pallete";
import DragDropPage from "./pages/3-drag-drop/kanban-home";
import ExpenseTracker from "./pages/4-expense-tracker/expense-tracker";
import BookmarkSaver from "./pages/5-bookmark-saver/bookmark-saver";

export const simplePageRoutes: RouteLink[] = [
  {
    path: "/simple/1-profile",
    name: "Simple Profile",
    component: Profile,
    description: "A simple profile page",
  },
];

// Define your practice pages
export const practicePages: RouteLink[] = [
  {
    path: "/1-quize",
    name: "Simple Quiz Game",
    component: QuizHome,
    description: "A simple quiz game to test your knowledge",
  },
  {
    path: "/2-quize",
    name: "Color Pallete",
    component: ColorPalette,
    description: "Generate colors for you life",
  },
  {
    path: "/3-drag-drop",
    name: "Drag Drop",
    component: DragDropPage,
    description: "Simple Kanban board",
  },
  {
    path: "/4-expense-tracker",
    name: "Expense Tracker",
    component: ExpenseTracker,
    description: "Track your every expense",
  },
  {
    path: "/5-bookmark-saver",
    name: "Bookmark Saver",
    component: BookmarkSaver,
    description: "Save your bookmarks",
  },
];
