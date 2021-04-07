const params = {
    param_login: function(email,password){
        let str = "e_mail="+ email +"&password="+ password +"&app_id=2&pushtoken=";
        return str;
    },
    param_recovery_pass: function(email){
        let str = "e_mail="+ email +"&app_id=2&pushtoken=";
        return str;
    },
    param_register: function(name,lastname,secondlastname, id_gender,email, date_of_birthday, password, list_alergies, list_coditional_medical, datafoto){
        let str = "name|"+name+"&apaterno|"+lastname+"&amaterno|"+secondlastname+"&id_genero|"+id_gender+"&e_mail|"+email+"&birthday|"+date_of_birthday+"&password|"+password+"&id_user_type|1&status|1&id|0&blood_type|&id_action|1&app_id|1&pushtoken|&alergias|{'alergias' : [1,2,3]}&padecimientos|{'padecimientos' : [1,2,3]}&foto_perfil|" + datafoto;
        return str;
    },
}

export default params;