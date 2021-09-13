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
  isBusker: boolean
}
export type UpdateMemberInfoType = {
  name: string
  email: string
  avatar: File
}
export type UpdatePassword = {
  oldPassword: string
  newPassword: string
}
export type ApplyBuskerType = {
  description: string
  type: number
}