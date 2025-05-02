export class UserDTOForAdmin {
    constructor({ user_id, firstName, lastName, email, profilePicture, phoneNo, altPhoneNo, role, status, createdAt, updatedAt }, roleDetails) {
        this.id = user_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.roles = roleDetails;
        this.profilePicture = profilePicture;
        this.phoneNo = phoneNo;
        this.altPhoneNo = altPhoneNo;
        this.role = role;
        this.roleDetails = roleDetails;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
