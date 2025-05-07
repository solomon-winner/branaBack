export class AuthorDTOForUser {
    constructor({ _id, name, img, bio, birthDate, deathDate }) {
        this.id = _id;
        this.name = name;
        this.img = img;
        this.bio = bio;
        this.birthDate = birthDate;
        this.deathDate = deathDate;
    }
}