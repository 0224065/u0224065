// Code goes here

    var table = function($scope)
    {
     $scope.products=[
         {Rollno: "筆電",Name: "王先生",Uni: "100"},
         {Rollno: "手機",Name: "Mary",Uni: "20"},
         {Rollno: "平板",Name: "王先生",Uni: "80"},
         {Rollno: "PC",Name: "Tom",Uni: "120"},
         {Rollno: "PC",Name: "陳先生",Uni: "300"},
         {Rollno: "筆電",Name: "Sandy",Uni: "90"},
         {Rollno: "筆電",Name: "陳先生",Uni: "250"},
         {Rollno: "平板",Name: "Mr.X",Uni: "40"},
         {Rollno: "手機",Name: "王先生",Uni: "400"},
         {Rollno: "平板",Name: "Mary",Uni: "35"}
     ];
     $scope.save=function(){
     $scope.products.push({
     Rollno: $scope.new_rollno,
     Name: $scope.new_name,
     Uni: $scope.new_uni
     });
         $scope.new_rollno="";
         $scope.new_name="";
         $scope.new_uni=""
     };
     $scope.checked=[];
      $scope.remove=function(index){
          alert($scope.checked);
          $scope.products.splice(function(record){
              return $scope.checked[$index];
          },1);
      };
       $scope.remove2=function(index){
          alert($scope.checked);
          $scope.products.splice(function(record){
              return $scope.checked[$index];
          },10000);
      };
    };
