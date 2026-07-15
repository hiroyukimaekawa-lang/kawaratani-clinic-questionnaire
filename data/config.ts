export const clinicConfig = {
  name: '瓦谷クリニック',
  homepageUrl: 'https://www.kawaratani-clinic.jp/',
  // Googleビジネスプロフィールのクチコミ投稿リンクが決まったら設定してください。
  // 例: https://search.google.com/local/writereview?placeid=XXXXXXXXXXXX
  googleReviewUrl: '',
  // 回答データを保存するGoogleスプレッドシート:
  // https://docs.google.com/spreadsheets/d/1xa_h8Wby2msnOUqXNcm_cK8Sl3heaFck_pskfGr3zpQ/edit
  //
  // このスプレッドシートに紐づくGoogle Apps ScriptをWebアプリとして公開し、
  // 発行されたURLを下記に設定してください（手順はREADME.mdを参照）。
  // Vercelにデプロイする場合は、環境変数 NEXT_PUBLIC_GAS_URL で設定することもできます。
  gasUrl: process.env.NEXT_PUBLIC_GAS_URL || '',
};
