export class User {
	constructor(
		public id: number,
		public name: string,
		public dateOfBirth: Date,
    public email: string,
		public address: string,
    public multiselect: string,
		public zipcode: string,



    public newsletter?: boolean,
		public gender?: string,

	) {}
}
