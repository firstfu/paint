# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 開發指令

```bash
# 啟動開發伺服器 (http://localhost:3000)
npm run dev

# 建置生產版本
npm run build

# 啟動生產伺服器
npm run start

# 執行 ESLint 檢查
npm run lint
```

## 技術架構

- **框架**: Next.js 16 (App Router)
- **前端**: React 19
- **樣式**: Tailwind CSS 4 (透過 @tailwindcss/postcss 整合)
- **語言**: TypeScript (strict 模式)

## 專案結構

- `app/` - Next.js App Router 頁面與佈局
  - `layout.tsx` - 根佈局，設定 Geist 字體
  - `page.tsx` - 首頁
  - `globals.css` - 全域樣式，Tailwind 入口點
- `public/` - 靜態資源

## 路徑別名

使用 `@/*` 可引用專案根目錄下的檔案，例如 `@/app/page`。
