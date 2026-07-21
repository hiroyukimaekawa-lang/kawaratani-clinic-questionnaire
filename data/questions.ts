export type QuestionType = 'choice' | 'nps' | 'textarea';

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  options?: string[];
  required: boolean;
}

export const surveyQuestions: Question[] = [
  {
    id: 'visitPurpose',
    type: 'choice',
    title: '①本日のご来院目的を教えてください。',
    options: ['検査のみ', '診察（外来）', '検査＋診察', 'その他'],
    required: true,
  },
  {
    id: 'waitingTime',
    type: 'nps',
    title: '②当クリニックをお勧めしますか？',
    required: true,
  },
  {
    id: 'staffResponse',
    type: 'nps',
    title: '③スタッフの対応は満足できましたか',
    required: true,
  },
  {
    id: 'reason',
    type: 'choice',
    title: '④当院を選ばれた理由は？',
    options: [
      'ホームページ',
      'Googleマップ',
      'クリニック紹介サイト',
      '看板',
      '知人紹介',
      '医療機関からの紹介',
    ],
    required: true,
  },
  {
    id: 'comments',
    type: 'textarea',
    title:
      '⑤その他、お気づきの点や改善点、ご意見ご要望などございましたらお聞かせください。',
    required: false,
  },
];

export interface SurveyFormState {
  visitPurpose: string;
  waitingTime: string;
  staffResponse: string;
  reason: string;
  comments: string;
}

export const initialFormState: SurveyFormState = {
  visitPurpose: '',
  waitingTime: '',
  staffResponse: '',
  reason: '',
  comments: '',
};

export type SurveyFormErrors = Partial<Record<keyof SurveyFormState, string>>;
