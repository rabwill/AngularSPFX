
export default  class HelloController{

constructor(private $scope)
	{

		$scope.isLoaded=false;
    $scope.message="Hello there";
    $scope.isLoaded=true;

	}

}