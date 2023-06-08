export interface InitialState {
   id: number;
   name: string;
   surname: string;
   email: string;
   phone_number: number | null;
   verified: boolean;
   avatar: string;
   brith_date: Date;
   gender: boolean;
   authority: "USER" | "ADMIN" | "MODERATOR";
   created_at: string;
   updated_at: string;
}
