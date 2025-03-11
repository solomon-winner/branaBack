export class UserDTOForUser {
    constructor({ _id, firstName, lastName, email, status, createdAt, updatedAt }, roleDetails) {
        this.id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.roles = roleDetails;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}