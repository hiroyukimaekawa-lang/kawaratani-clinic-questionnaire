import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '患者さまアンケート | 瓦谷クリニック',
  description: '瓦谷クリニックをご利用いただいた皆さまへのアンケートです。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-noto bg-background text-text">{children}</body>
    </html>
  );
}
