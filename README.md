# Vite + React + TypeScript + SWC Template

このテンプレートは、Vite、React、TypeScript、SWC を使用した効率的なフロントエンド開発環境を提供するために整理したものです。

## 📁 ディレクトリ構成と役割

### ルートディレクトリ

- `package.json` - プロジェクトの依存関係とスクリプト定義
- `vite.config.ts` - Vite の設定ファイル（SWC プラグイン使用）
- `eslint.config.js` - ESLint の設定（TypeScript + React 対応）
- `tsconfig.json` - TypeScript のプロジェクト参照設定
- `tsconfig.app.json` - アプリケーション用 TypeScript 設定
- `tsconfig.node.json` - Node.js 環境用 TypeScript 設定
- `index.html` - アプリケーションのエントリーポイント

### `src/` - メインソースコード

- `main.tsx` - React アプリケーションのエントリーポイント
- `App.tsx` - ルートコンポーネント（React Router 設定）
- `vite-env.d.ts` - Vite 環境の型定義

#### `src/components/` - 再利用可能な UI コンポーネント

- `index.ts` - コンポーネントのエクスポート集約
- `Button/` - ボタンコンポーネント（CSS Modules 使用）
- `Form/` - フォームコンポーネント（CSS Modules 使用）

#### `src/pages/` - ページコンポーネント

- `index.ts` - ページコンポーネントのエクスポート集約
- `Home.tsx` - ホームページ
- `About.tsx` - アバウトページ
- `Contact.tsx` - お問い合わせページ
- `NotFound.tsx` - 404 エラーページ

#### `src/router/` - ルーティング設定

- `index.ts` - React Router の設定とルート定義

#### `src/styles/` - スタイル関連

- `globals.css` - グローバルスタイル
- `variables.css` - CSS 変数定義
- `pages/` - 各ページ専用の CSS Modules

#### `src/hooks/` - カスタム React フック

- `useSampleHook.ts` - サンプルカスタムフック

#### `src/services/` - 外部 API 連携

- `api.ts` - API 通信関連の処理

#### `src/store/` - 状態管理

- `index.ts` - アプリケーション状態管理の設定

#### `src/types/` - TypeScript 型定義

- `types.d.ts` - アプリケーション全体の型定義

#### `src/utils/` - ユーティリティ関数

- `other.ts` - 汎用的なヘルパー関数

#### `src/assets/` - 静的アセット

- `logo.png` - アプリケーションロゴなどの画像ファイル

### `public/` - 静的ファイル

- `favicon.ico` - ファビコン

## 🛠️ 使用技術

- **Vite** - 高速なビルドツール
- **React 19** - UI ライブラリ
- **TypeScript** - 型安全な開発環境
- **SWC** - 高速な JavaScript/TypeScript コンパイラ
- **React Router DOM** - クライアントサイドルーティング
- **ESLint** - コード品質チェック
- **CSS Modules** - スコープ化された CSS

## 🚀 開発開始方法

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# リント実行
npm run lint
```

## ESLint 設定の拡張について

- 以降の記載はデフォルトのままです。

### 本番アプリケーションを開発している場合は、設定を更新して型を意識した lint ルールを有効にすることをお勧めします：

```js
export default tseslint.config([
globalIgnores(["dist"])、
{
files：["**/*.{ts,tsx}"]、
extends：[
// その他の設定...

      // tseslint.configs.recommendedを削除し、次のように置き換えます。
      ...tseslint.configs.recommendedTypeChecked、
      // あるいは、より厳格なルールの場合はこれを使用します。
      ...tseslint.configs.strictTypeChecked、
      // オプションとして、スタイルルールのためにこれを追加します。
      ...tseslint.configs.stylisticTypeChecked、

      // その他の設定...
    ],
    languageOptions：{
      parserOptions：{
        プロジェクト：["./tsconfig.node.json", "./tsconfig.app.json"]、
        tsconfigRootDir: import.meta.dirname、
      },
      // その他のオプション...
    },

},
]);

```

React 固有の lint ルールのために[eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)と[eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)をインストールすることもできます：

```js

// eslint.config.js
import reactX from "eslint-plugin-react-x"；
import reactDom from "eslint-plugin-react-dom"；

エクスポートデフォルト tseslint.config([
globalIgnores(["dist"])、
{
files：["**/*.{ts,tsx}"]、
extends：[
// その他の設定...
// React の lint ルールを有効にする
reactX.configs["recommended-typescript"]、
// React DOM の lint ルールを有効にする
reactDom.configs.recommended、
],
languageOptions：{
parserOptions：{
プロジェクト：["./tsconfig.node.json", "./tsconfig.app.json"]、
tsconfigRootDir: import.meta.dirname、
},
// その他のオプション...
},
},
]);

```
