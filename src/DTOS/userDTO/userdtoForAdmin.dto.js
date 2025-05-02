export class UserDTOForAdmin {
    constructor({ _id, firstName, lastName, email, profilePicture, phoneNo, altPhoneNo, role, status, createdAt, updatedAt }) {
        this.id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.profilePicture = profilePicture;
        this.phoneNo = phoneNo;
        this.altPhoneNo = altPhoneNo;
        this.role = role;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
