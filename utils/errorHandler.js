export const ErroHandler = (status) => {
    switch (status) {
        case 404:
            return "not found!"
        case 500:
            return "Internal server Error!"    
        default:
            break;
    }
}