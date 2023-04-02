export enum FormModalNoteValues {
  TITLE = 'title',
  DESCRIPTION = 'description',
}

export interface FormModalNoteData {
  [FormModalNoteValues.TITLE]: string;
  [FormModalNoteValues.DESCRIPTION]: string;
}
