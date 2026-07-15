'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Header } from '@/components/Header';
import { clinicConfig } from '@/data/config';

function ThanksContent() {
  const searchParams = useSearchParams();
  const showReview = searchParams.get('showReview') === '1';

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="#5E969E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="mb-3 text-center text-2xl font-bold text-gray-800">
          ご回答ありがとうございました
        </h1>
        <p className="mb-10 max-w-md text-center text-sm leading-relaxed text-gray-500">
          いただいたご意見は、今後の医院運営の参考にさせていただきます。
        </p>

        {showReview && clinicConfig.googleReviewUrl && (
          <div className="mb-10 w-full max-w-sm rounded-lg border border-primary/20 bg-primary-light p-5 text-center">
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              うれしいお言葉をありがとうございます。よろしければ、Googleクチコミへの投稿もお願いできますでしょうか。
            </p>
            <a
              href={clinicConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-bold text-white"
            >
              Googleクチコミを投稿する
            </a>
          </div>
        )}

        <Link
          href="/"
          className="rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-500"
        >
          トップに戻る
        </Link>
      </div>
    </main>
  );
}

export default function ThanksPage() {
  return (
    <Suspense fallback={null}>
      <ThanksContent />
    </Suspense>
  );
}
