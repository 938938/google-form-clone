export type TitleType = {
  title: string;
  sub: string;
};

export type QuestionType = {
  idx: number;
  type: string;
  // 'short' | 'paragraph' | 'multiple' | 'checkboxes' | 'dropdown'
  title: string;
  // answer 타입 좀 더 고민하기. 일단 임시로 string.
  options: string[];
  isEtc: boolean;
  isRequired: boolean;
};

export type OptionType = {
  idx: number;
  type: string;
  options: string[];
  isEtc: boolean;
};

export type PreviewType = {
  preview: boolean;
};
