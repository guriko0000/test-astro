// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

// .env ファイルを読み込む
dotenv.config();

export default defineConfig({
  vite: {
    define: {
      // 環境変数を Vite に渡す
      'process.env.MICROCMS_API_KEY': JSON.stringify(process.env.MICROCMS_API_KEY),
      'process.env.MICROCMS_ENDPOINT': JSON.stringify(process.env.MICROCMS_ENDPOINT),
    },
  },
});

