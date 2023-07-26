import { Dispatch, SetStateAction } from 'react';

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
  onDragHandler?: (event: React.DragEvent<HTMLDivElement>, idx: number) => void;
};

export type OptionType = {
  idx: number;
  type: string;
  options: string[];
  isEtc: boolean;
  isRequired: boolean;
  selected: string[];
  onDragHandler?: (event: React.DragEvent<HTMLDivElement>, idx: number) => void;
};

export type PreviewType = {
  preview: boolean;
};

export type ModalType = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};
