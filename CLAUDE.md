# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

TypeScript学習用リポジトリ。「プログラミングTypeScript」（Boris Cherny著）の各章に対応したディレクトリでコードを書きながら学習する。

## Commands

```bash
# 特定チャプターの型チェック
cd chapter-N && npx tsc --noEmit

# 特定チャプターのビルド（dist/ に出力）
cd chapter-N && npx tsc

# ビルド結果の実行
node chapter-N/dist/index.js

# リント
npx eslint . --ext .ts
```

## Architecture

- `tsconfig.base.json` — 共通コンパイラ設定（ES2022/Node16/strict）
- `chapter-N/` — 各章のコード。それぞれ `tsconfig.json` で base を extends
- `chapter-N/src/index.ts` — 各章のエントリポイント
- `chapter-N/dist/` — ビルド出力（gitignore対象外だが成果物）

各チャプターは独立しており、相互依存はない。新しい章を始めるときは既存チャプターのディレクトリ構造をコピーする。
