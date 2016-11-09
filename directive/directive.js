app.directive('dropDown', function() {
    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'directive/directive.html',
        link: function(scope, elem, attrs) {
            scope.dropDownData = JSON.parse(attrs.data);
            if (attrs.selected) {
            	console.log("..attrs.slected is",attrs.selected);
                scope.selectedData = JSON.parse(attrs.selected);
            }
            $('button.dropdown-toggle').on('click', function(event) {
                $(this).parent().toggleClass('open');
            });
        }
    };
});
app.controller('dropdownCtrl', function($scope) {
	$scope.setData = function(data){
		$scope.selectedData = data;
		if(data)
			$("div.dropdown").toggleClass('open');
	}

	$scope.showSelected = function(){
		if(!$scope.selectedData || ((!$scope.selectedData.Driver || !$scope.selectedData.Driver.Name) && (!$scope.selectedData.Vehicle || !$scope.selectedData.Vehicle.Number))){
			return false;
		} else if($scope.selectedData && ($scope.selectedData.Driver.Name || $scope.selectedData.Vehicle.Number)){
			return true;
		}
	}

})
