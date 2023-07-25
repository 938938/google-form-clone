export type TitleType = {
  title: string;
  sub: string;
};

export type QuestionType = {
  idx: number;
  type: string;
  // 'short' | 'paragraph' | 'multiple' | 'checkboxes' | 'dropdown'
  title: string;
  options: string[];
  isEtc: boolean;
  isRequired: boolean;
  selected: string[];
};

export type OptionType = {
  idx: number;
  type: string;
  options: string[];
  isEtc: boolean;
  isRequired: boolean;
  selected: string[];
};

export type PreviewType = {
  preview: boolean;
};
