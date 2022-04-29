export default (dependencies) => {

    const { validators } = dependencies;

    const validateAccount = async (request, response, next) => {
        // Input
        try {
            const validated = await validators['account'].validateAsync(request.body);
            request.body = validated;
            next();
        } catch (err) {

            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    return {
        validateAccount
    };
};