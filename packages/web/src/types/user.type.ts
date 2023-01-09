export default interface IUser {
    id?: any | null,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    roles?: Array<string>
  }