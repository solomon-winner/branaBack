Object.keys(UpdatedData).forEach(key => {
    if (!UpdatedData[key]) {
        delete UpdatedData[key];
    }
});