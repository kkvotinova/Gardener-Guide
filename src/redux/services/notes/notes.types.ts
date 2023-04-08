export interface ApiNote {
  _id: string;
  title: string;
  description: string;
}

// === READ ↴

export type ApiGetNotesGetQuery = {
  title?: string;
};
export type ApiGetNotesGetResponse = ApiNote[];

// === CREATE ↴

export type ApiNotePostBody = Omit<ApiNote, '_id'>;
export type ApiNotePostResponse = ApiNote;

// === UPDATE ↴

export type ApiNoteByIdPatchBody = ApiNotePostBody & { id: string };
export type ApiNoteByIdPatchResponse = ApiNote;
