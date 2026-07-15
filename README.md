# 瓦谷クリニック 患者さまアンケート

むさしの内視鏡・胃腸内科クリニックのアンケートアプリ（StorePad風）を参考に、
瓦谷クリニック（https://www.kawaratani-clinic.jp/）向けに作成したアンケートサイトです。

Next.js（App Router）+ TypeScript + Tailwind CSS で構築しています。

## 質問項目

1. 本日のご来院目的を教えてください（検査のみ／診察（外来）／検査＋診察／その他）
2. 待ち時間は適切でしたか（10〜1の10段階評価）
3. スタッフの対応は満足できましたか（10〜1の10段階評価）
4. 当院を選ばれた理由は？（ホームページ／Googleマップ／クリニック紹介サイト／看板／知人紹介／医療機関からの紹介）
5. その他、お気づきの点や改善点、ご意見ご要望（自由記述・任意）

質問内容は `data/questions.ts` で管理しています。文言や選択肢を変更したい場合はこのファイルを編集してください。

## ローカル起動

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## データ保存先（Googleスプレッドシート）

回答は下記のGoogleスプレッドシートに保存される想定です。
https://docs.google.com/spreadsheets/d/1xa_h8Wby2msnOUqXNcm_cK8Sl3heaFck_pskfGr3zpQ/edit

保存には Google Apps Script（GAS）をWebアプリとして公開し、そのURLをアプリ側に設定する必要があります。
コード側の送信処理（`app/page.tsx`）は実装済みですが、**GAS側のデプロイ作業はGoogleアカウントの操作が必要なため、お手元で以下の手順を行ってください。**

### 設定手順

1. 上記スプレッドシートを開き、「拡張機能」→「Apps Script」を選択
2. エディタの中身を全て削除し、`gas/Code.gs` の内容を貼り付けて保存
3. 右上の「デプロイ」→「新しいデプロイ」
   - 種類の選択: 「ウェブアプリ」
   - 実行するユーザー: 自分
   - アクセスできるユーザー: 全員
4. 「デプロイ」をクリックし、発行された「ウェブアプリのURL」をコピー
5. 以下のいずれかの方法でURLを設定
   - `data/config.ts` の `gasUrl` に直接貼り付ける
   - Vercelにデプロイする場合は、Vercelプロジェクトの環境変数 `NEXT_PUBLIC_GAS_URL` に設定する（コード変更不要）

設定前は `gasUrl` が空のため、送信処理はスキップされ完了画面に遷移するだけになります（フォーム自体は問題なく使えます）。

## Googleクチコミ誘導について

②③の評価が両方とも9点以上だった回答者には、完了画面でGoogleクチコミ投稿への誘導を表示する仕組みを用意しています。
`data/config.ts` の `googleReviewUrl` にクチコミ投稿用リンクを設定すると有効になります（未設定の間は非表示です）。

## Vercelへの公開

```bash
npm install -g vercel@latest
vercel login
npm run deploy:vercel
```

もしくは、GitHubリポジトリと連携させてVercel側でインポートする方法でも公開できます。

## 補足

- `npm audit` で Next.js 14系に関する既知の脆弱性情報が表示されますが、いずれも本アプリが
  使用していない機能（next/image の最適化、Middleware、i18nルーティング、WebSocketアップグレード等）
  に関するものです。気になる場合は Next.js 15/16 系へのアップグレードをご検討ください。
