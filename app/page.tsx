'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Header } from '@/components/Header';
import { HeroBanner } from '@/components/HeroBanner';
import { ChoiceGroup } from '@/components/ChoiceGroup';
import { NPSSelector } from '@/components/NPSSelector';
import { TextArea } from '@/components/TextArea';
import { SubmitButton } from '@/components/SubmitButton';
import { FormError } from '@/components/FormError';

import {
  surveyQuestions,
  initialFormState,
  SurveyFormState,
  SurveyFormErrors,
} from '@/data/questions';
import { clinicConfig } from '@/data/config';

function RequiredBadge() {
  return <span className="ml-1 text-sm font-bold text-error">※必須</span>;
}

export default function SurveyPage() {
  const router = useRouter();
  const [form, setForm] = useState<SurveyFormState>(initialFormState);
  const [errors, setErrors] = useState<SurveyFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = (field: keyof SurveyFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: SurveyFormErrors = {};
    let isValid = true;

    surveyQuestions.forEach((question) => {
      if (question.required) {
        const val = form[question.id as keyof SurveyFormState];
        if (!val || val.trim() === '') {
          nextErrors[question.id as keyof SurveyFormState] = '必須項目です';
          isValid = false;
        }
      }
    });

    setErrors(nextErrors);
    return isValid;
  };

  const onSubmit = async () => {
    if (!validate()) {
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    const payload = {
      ...form,
      submittedAt: new Date().toISOString(),
    };

    if (clinicConfig.gasUrl) {
      try {
        // Google Apps Script のWebアプリへ送信します。
        // no-corsモードのためレスポンス内容は読み取れませんが、
        // fetch自体が例外を投げない限り送信は成功しているとみなします。
        await fetch(clinicConfig.gasUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
          mode: 'no-cors',
        });
      } catch (error) {
        setSubmitting(false);
        setSubmitError(
          '送信に失敗しました。通信環境をご確認の上、再度お試しください。'
        );
        return;
      }
    }

    const npsFields: (keyof SurveyFormState)[] = ['waitingTime', 'staffResponse'];
    const allHighScore = npsFields.every((field) => Number(form[field]) >= 9);

    setSubmitting(false);
    router.push(`/thanks?showReview=${allHighScore ? '1' : '0'}`);
  };

  const renderQuestion = (question: (typeof surveyQuestions)[number]) => {
    const error = errors[question.id as keyof SurveyFormState];
    const value = form[question.id as keyof SurveyFormState];

    return (
      <div key={question.id} className="mb-10 w-full">
        <div className="mb-4 flex flex-wrap items-center">
          <p className="text-base font-bold text-gray-800">{question.title}</p>
          {question.required && <RequiredBadge />}
        </div>

        {question.type === 'choice' && question.options && (
          <ChoiceGroup
            options={question.options}
            value={value}
            onChange={(val) => updateField(question.id as keyof SurveyFormState, val)}
            hasError={!!error}
          />
        )}

        {question.type === 'nps' && (
          <NPSSelector
            value={value ? Number(value) : null}
            onChange={(val) =>
              updateField(question.id as keyof SurveyFormState, String(val))
            }
          />
        )}

        {question.type === 'textarea' && (
          <TextArea
            value={value}
            onChange={(val) => updateField(question.id as keyof SurveyFormState, val)}
            placeholder="ご自由にご記入ください"
            hasError={!!error}
          />
        )}

        <FormError error={error} />
      </div>
    );
  };

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />

      <div className="flex flex-1 flex-col items-center pb-24">
        <HeroBanner />

        <div className="w-full max-w-[760px] px-6">
          <div className="mb-8 border-b border-gray-100 pb-4">
            <p className="text-sm leading-relaxed text-gray-500">
              ※ 本アンケートは匿名でご回答いただけます。個人が特定されることはありません。
            </p>
          </div>

          <div className="w-full">{surveyQuestions.map(renderQuestion)}</div>

          <div className="mt-10 flex flex-col items-center justify-center">
            {submitError && (
              <p className="mb-4 text-sm font-medium text-error">{submitError}</p>
            )}
            <SubmitButton
              title="アンケートを送信する"
              onPress={onSubmit}
              disabled={submitting}
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
