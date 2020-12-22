export let withdraw = async (amount)=> { 
                                          let response = await fetch('http://localhost:8080/withdraw/' + amount,{method:'POST'})
                                          return response  
                                       }