export class UserDTOForAdmin {
    constructor({ user_id, firstName, lastName, email, type, status, createdAt, updatedAt }, roleDetails) {
        this.id = user_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.roles = roleDetails;
        this.type = type;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
