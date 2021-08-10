export class EnrollMemberType {
  account: string = '';
  password: string = '';
  male: boolean = true;
  email: string = '';
  name: string = '';
}
export type MemberType = {
  account: string
  male: boolean
  email: string
  name: string
  exp: number
  avatar: string
}