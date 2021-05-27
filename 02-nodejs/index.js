
    function obterUsuario(){
        return new Promise(function resolvePromise(resolve,reject){
            // return reject (new Error('Deu ruim de verdade!'))
        setTimeout( function(){

            return resolve({
                id:1,
                nome:'Aladin',
                dataNascimento: new Date()
            })
        },1000)
    })
}

    function obterTelefone(idUsuario){
        return new Promise(function resolverPromise(resolve,reject){
            setTimeout(function (){
                return resolve({
                    telefone: '67992364466',
                    ddd:67
                })
            },2000);
    
        })
      
    }

    function obterEndereco(idUsuario,callback){
        setTimeout(function (){
            return callback(null,{
                rua:'da Paz',
                numero:0
            })
        },2000);
        
    }

    const usuarioPromise = obterUsuario()

    usuarioPromise
    .then(function (resultado){
        console.log('resultado',resultado)

    })
    .catch(function (error){
        console.error('Deu ruim', error)
    })
   

    /*obterUsuario(function resolverUsuario(error,usuario){
        if(error){
            console.error('Deu ruim em Usuário', error)
            return;
        }

        obterTelefone(usuario.id,function resolverTelefone(error1,telefone){
            if(error1){
                console.error('Deu ruim em Telefone',error)
                return;
            }
            obterEndereco(usuario.id, function resolverEndereco(error2,endereco){
                if(error2){
                    console.error('Deu ruim em Telefone',error)
                    return;
                }
                console.log(`
                    Nome:${usuario.nome},
                    Endereco:${endereco.rua},${endereco.numero},
                    Telefone:(${telefone.ddd})${telefone.telefone}


                `)
            })
        })

        
    })
    */
   