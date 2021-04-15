const errorMiddlewaresHandler = (err, req, res, next) =>{
    // set staus code

    const errorStatusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(errorStatusCode);
    res.json ({
        message: err.message,
    });
};

module.exports = {errorMiddlewaresHandler};