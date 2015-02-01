define(['router', 'text!./router.html'],
    function(router, template) {

        var ViewModel = function (params, componentInfo) {
            var self = this;

            self.router = router;
        };

        return {
            viewModel: {
                createViewModel: function(params, componentInfo) {
                    return new ViewModel(params, componentInfo);
                }
            },
            template: template
        };
    });