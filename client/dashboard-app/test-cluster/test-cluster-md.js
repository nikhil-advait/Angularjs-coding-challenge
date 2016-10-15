angular.module('testClusterMD', [])
  .config(function(){
    console.log('In config of testClusterMD');
    //configuration for the module if any
  })
  .run(function(){
    console.log('In run of testClusterMD');
    //initialization for the module if any
  });
