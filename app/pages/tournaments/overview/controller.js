module.exports = (app) => {
    app.controller('TournamentCtrl', function (TournamentSrvc, ErrorHandlerSrvc) {
        const vm = this;
        vm.all = null;
        vm.tourMdlVisible = false;
        vm.tourMdlOpts = {
            ctrl: 'tour',
            title: 'Create new tournament',
            submit: 'Create',
        };
        vm.tourMdlInput = {};

        vm.tourMdlSubmit = addTournament;
        vm.cancelTourMdl = cancelTourMdl;

        loadAll();

        function loadAll () {
            TournamentSrvc.getAll().then((res) => {
                vm.all = res.data;
            }).catch(ErrorHandlerSrvc.error);
        }

        function addTournament (tournament) {
            TournamentSrvc.addTournament(tournament).then(() => {
                loadAll();
                vm.tourMdlVisible = false;
            }).catch(ErrorHandlerSrvc.error);
        }

        function cancelTourMdl () {
            vm.tourMdlInput = {};
            vm.tourMdlVisible = false;
        }
    });
};
