export function loginUser( user:string ){
    if(typeof user == "string"){
        if(user == "usuarioRegistrado")
            return true;
        else
            return false;
    }
    else{
        return "usuario invalido";
    }
}