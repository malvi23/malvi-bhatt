export interface ContactFormReq {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormRes {
  code: boolean;
  status: string;
  message: string;
  data: string;
}
