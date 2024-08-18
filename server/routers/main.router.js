

const PirateController = require('../controllers/pirate.controller')


// const PirateController = require('../controllers/pirate.controller') ; 
// const GameController = require('../controllers/game.controller');
// const MainController = require('../controllers/main.controller');

module.exports = app => {
    //pirate
    app.post("/api/pirates",PirateController.pirateCreate);
    app.get("/api/pirates",PirateController.pirateFindAll);
    app.get("/api/pirates/:id",PirateController.pirateFindOne);
    app.patch("/api/pirates/:id",PirateController.pirateUpdate);
    app.delete("/api/pirates/:id",PirateController.pirateDelete);

    // //game
    //  app.post("/api/games",GameController.GameCreate);
    //  app.get("/api/games",GameController.gameFindAll);
    //  app.get("/api/games/:id",GameController.gameFindOne);
    //  app.patch("/api/games/:id",GameController.gameUpdate);
    //  app.delete("/api/games/:id",GameController.gameDelete);

    //  //pirategame
    //  app.get("/api/pirategame/:gameId",MainController.allPalyersStatusByGame);
    //  app.get("/api/pirategame/:pirateId/:gameId",MainController.pirateStatus);
    //  app.patch("/api/pirategame/:pirateId/:gameId",MainController.pirateStatusUpdate);

    //  //dropDB 
    //  app.delete("/api/DBMustafa",DB.dropDatabase)
    
}


