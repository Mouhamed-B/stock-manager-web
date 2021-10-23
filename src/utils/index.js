export default {
    methods : {
        route(id, componentName){
            return {
              name:componentName,
              params:{
                id:parseInt(id)
              }
            }
        },
        toggleEdit(e){
          e?.preventDefault()
          this.disabled = !this.disabled
          
          document.getElementsByTagName('input').forEach(element => {
              element.disabled = this.disabled ? 'true' : undefined
          });
          document.getElementById('description').disabled = this.disabled ? 'true' : undefined
        }
    }
}