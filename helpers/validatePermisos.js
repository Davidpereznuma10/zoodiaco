const validatePermisos = (data,requiredPermission) => {
    const permisos = data.payload.id
    if (permisos == "E001"){
        return
    }else if (permisos != "E001" && (requiredPermission =="get")){
        return
    }else{
        throw {status:401, message:"No tienes permiso para acceder"}
        }
    };
module.exports = {validatePermisos};