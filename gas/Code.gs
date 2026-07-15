/**
 * 瓦谷クリニック 患者さまアンケート - 回答保存用 Google Apps Script
 *
 * 対象スプレッドシート:
 * https://docs.google.com/spreadsheets/d/1xa_h8Wby2msnOUqXNcm_cK8Sl3heaFck_pskfGr3zpQ/edit
 *
 * 【設定手順】
 * 1. 上記スプレッドシートを開き、「拡張機能」→「Apps Script」を選択
 * 2. 開いたエディタの中身を全て削除し、このファイルの内容を貼り付けて保存
 * 3. 右上の「デプロイ」→「新しいデプロイ」を選択
 *    - 種類の選択: 「ウェブアプリ」
 *    - 実行するユーザー: 自分
 *    - アクセスできるユーザー: 全員
 * 4. 「デプロイ」をクリックし、発行された「ウェブアプリのURL」をコピー
 * 5. Next.jsアプリの data/config.ts の gasUrl、
 *    もしくは Vercel の環境変数 NEXT_PUBLIC_GAS_URL に上記URLを設定
 */

var SHEET_HEADERS = [
  '送信日時',
  '来院目的',
  '待ち時間評価（10〜1）',
  'スタッフの対応評価（10〜1）',
  '来院理由',
  'ご意見・ご要望',
];

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(SHEET_HEADERS);
  }

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.submittedAt ? new Date(data.submittedAt) : new Date(),
    data.visitPurpose || '',
    data.waitingTime || '',
    data.staffResponse || '',
    data.reason || '',
    data.comments || '',
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ result: 'success' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: '瓦谷クリニック アンケート受信エンドポイント' })
  ).setMimeType(ContentService.MimeType.JSON);
}
