$( document ).ready(function() {

    var url = "https://app-proyectofinal-devf.herokuapp.com/" + localStorage.getItem("__token__")
    axios.get(url)
      .then(function (result) {
        const user  = result.data.data;
        $("#txtname").val(user.name)
        $("#txtlastname").val(user.lastName)
        $("#txtemail").val(user.email)
        //window.location.href = 'index.html';
      })
      .catch(function (error) {
        if(error.response.status == 401 ){
            window.location.href="/login.html";  
        }
        if(error.response.status == 500 ){
            window.location.href="/login.html";  
        }  
    });
      

    $("#btncerrar").click(function(){
        localStorage.removeItem("__token__");
        window.location.href="/";
    });

});