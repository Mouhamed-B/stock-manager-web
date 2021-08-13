export default {
    methods : {
        route(id, componentName){
            return {
              name:componentName,
              params:{
                id:parseInt(id)
              }
            }
        }
    }
}