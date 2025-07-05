import type { ComponentType } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

// ルート設定の型定義
export interface RouteConfig {
  path: string;
  component: string;
  title?: string;
  requiresAuth?: boolean;
  element: ComponentType;
}

// アプリケーションのルート設定
export const routes: RouteConfig[] = [
  {
    path: "/",
    component: "Home",
    title: "ホーム",
    element: Home,
  },
  {
    path: "/about",
    component: "About",
    title: "アバウト",
    element: About,
  },
  {
    path: "/contact",
    component: "Contact",
    title: "お問い合わせ",
    element: Contact,
  },
  {
    path: "*",
    component: "NotFound",
    title: "ページが見つかりません",
    element: NotFound,
  },
];

// TODO: 下記は動的ナビゲーション、パンくずリスト生成、SEO・メタデータ管理・認証チェック時に実装が楽になるが、不要なら削除
// パスからルート情報を取得するヘルパー関数
export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routes.find((route) => route.path === path);
};

// 全ルートパスの一覧を取得
export const getAllPaths = (): string[] => {
  return routes.map((route) => route.path).filter((path) => path !== "*");
};
