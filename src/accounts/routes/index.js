import express from 'express';
import AccountsController from '../controllers';
import ValidationController from '../controllers/ValidationController'; //add to import statements at top of file
import MoviesController from '../../movies/controllers';

const createRouter = (dependencies) => {
    const router = express.Router();
    // load controller with dependencies
    const accountsController = AccountsController(dependencies);
    const validationController = ValidationController(dependencies);
    const moviesController = MoviesController(dependencies);


    // router.route('/*')
    //     .all(accountsController.verifyToken); //ADD THIS: require token for all routes

    // router.route('/')
    //     .get(accountsController.verifyToken, moviesController.find); //ADD THIS: require token for all routes


    // router.route('/')
    //     .post(accountsController.createAccount);
    router.route('/')
        .post(validationController.validateAccount, accountsController.createAccount); //add validateAccount to route

    router.route('/')
        .get(accountsController.listAccounts);

    router.route('/:id')
        .get(accountsController.getAccount);

    router.route('/:id')
        .post(accountsController.getAccount);

    router.route('/security/token')
        .post(accountsController.authenticateAccount);

    router.route('/:id/favourites')
        .post(accountsController.addFavourite);

    router.route('/:id/favourites')
        .get(accountsController.getFavourites);

    return router;
};
export default createRouter;