const createError = (status, message) => {
    const err = new Err();
    err.status = status;
    err.message = message;

    return err;
};

export default createError;
