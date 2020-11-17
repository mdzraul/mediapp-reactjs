const helpers = {
    validateEmail: function(text){
        //console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
          //console.log("Email is Not Correct");
          //this.setState({ email: text })
          return false;
        }
        else {
          //this.setState({ email: text })
          //console.log("Email is Correct");
        }
        return true;
    },
    helper2: function(param1){

    },
    helper3: function(param1, param2){

    }
}

export default helpers;