var vis = document.getElementById("vis").innerHTML
function aparecer(n){ 
     var num = document.getElementById("vis").innerHTML
     document.getElementById("vis").innerHTML = num + n
     if(n == "."){
          document.getElementById("vis").innerHTML
          document.getElementById("vis").innerHTML = num + ","
     } else if (n == "*"){
          document.getElementById("vis").innerHTML
          document.getElementById("vis").innerHTML = num + "x"
     } else if (n == "**"){
          document.getElementById("vis").innerHTML
          document.getElementById("vis").innerHTML = num + "^"
     }
     
}
function c(){
     var apagar = document.getElementById("vis").innerHTML
     document.getElementById("vis").innerHTML = ""
}
function del(){
     var del = document.getElementById("vis").innerHTML
     document.getElementById("vis").innerHTML = del.substring(0, del.length - 1)
}

function resultado(res){
     if(vis.length == 0) {
          alert("Erro!!!")
     } else {
          if(vis.indexOf(",")) {
               let ponto = document.getElementById("vis").innerHTML
               ponto = ponto.replace(",", ".")
               let resul = document.getElementById("vis").innerHTML
               document.getElementById("vis").innerHTML = eval(ponto)
               let virg = document.getElementById("vis").innerHTML
               virg = virg.replace(".", ",")
               document.getElementById("vis").innerHTML = virg
          } else if(vis.indexOf("x")) {
               let ast = document.getElementById("vis").innerHTML
               ast = ast.replace("x", "*")
               let resul = document.getElementById("vis").innerHTML
               document.getElementById("vis").innerHTML = eval(ast)
          } else if(vis.indexOf("^")){
               let sup = document.getElementById("vis").innerHTML
               sup = sup.replace("^", "**")
               let resul = document.getElementById("vis").innerHTML
               document.getElementById("vis").innerHTML = eval(sup)
          }
     }
     
}

