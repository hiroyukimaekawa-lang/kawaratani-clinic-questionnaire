export const clinicConfig = {
  name: '瓦谷クリニック',
  homepageUrl: 'https://www.kawaratani-clinic.jp/',
  // Googleクチコミの投稿先（口コミの遷移先）
  googleReviewUrl:
    'https://www.google.com/search?q=%E7%93%A6%E8%B0%B7%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF&oq=%E7%93%A6%E8%B0%B7%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg9MgYIBhBFGD0yBggHEEUYPdIBBzUwN2owajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x6000dbe1ce0c9eab:0x662e2b0cdb3ce8b2,3,,,,',
  // 回答データを保存するGoogleスプレッドシート:
  // https://docs.google.com/spreadsheets/d/1xa_h8Wby2msnOUqXNcm_cK8Sl3heaFck_pskfGr3zpQ/edit
  //
  // このスプレッドシートに紐づくGoogle Apps ScriptをWebアプリとして公開し、
  // 発行されたURLを下記に設定してください（手順はREADME.mdを参照）。
  // Vercelにデプロイする場合は、環境変数 NEXT_PUBLIC_GAS_URL で設定することもできます。
  gasUrl: process.env.NEXT_PUBLIC_GAS_URL || 'https://script.google.com/macros/s/AKfycbxMreUcCft6_8y5eJL4ELzgs4eH4lI0w968PVBq8SPFpukzHWDdce3zv2ztFuO6lIYt/exec',
};
