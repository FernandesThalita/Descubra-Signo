
var sDatas = [
    ["01-01","01-19","Capricórnio", "capri..png"],
    ["01-21","02-18","Aquário", "aquario.png"],
    ["02-19","03-20","Peixes", "peixes.png"],
    ["03-21","04-19","Aries", "aries.png"],
    ["04-21","05-20","Touro", "touro.png"],
    ["05-21","06-20","Gêmeos", "gemeos.png"],
    ["06-21","07-22","Câncer", "cancer.png"],
    ["07-23","08-22","Leão", "leo.png"],
    ["08-23","09-22","Virgem", "virgem.png"],
    ["09-23","10-22","Libra", "libra.png"],
    ["10-23","11-21","Escorpião", "escorpiao.png"],
    ["11-22","12-21","Sagitário", "sagitario.png"],
    ["12-22","12-31","Capricórnio", "capri..png"],
]
var limpar = false
function exibir(){
    
    if(limpar =!limpar){

        //data digitada
        var dataDig = document.getElementById('data').value

        //conversão para data
        var data = new Date(dataDig)

        //separação do dia, mes e ano
        var dia = data.getDate()+1
        var mes = data.getMonth()+1
        var ano = data.getYear()
        var dataVetor;

        //Criação da data para comparação
        var novaData = new Date(mes+"-"+dia+"-"+ano)


        //percorre o vetor, comparando as datas
        for( var i =0; i < sDatas.length;i++){
            //Junçao do ano com a data do vetor para compracao completa
            dataVetor = sDatas[i][0]+"-"+ano
            dataSig1 = new Date(dataVetor)
            dataVetor = sDatas[i][1]+"-"+ano
            dataSig2 = new Date(dataVetor)

            //comparacao
            if(novaData >= dataSig1 && novaData <= dataSig2){
                
                //signo
                document.getElementById('resposta').innerHTML = sDatas[i][2]
                console.log(sDatas[i][2])

                //img do signo
                document.getElementById('img_signos').src = `img/${sDatas[i][3]}`
                document.getElementById('botao').innerHTML = "Limpar"
                document.getElementById('data').disabled = true
            }
        }
    }else{
            document.getElementById('resposta').innerHTML =""
            document.getElementById('img_signos').src ="img/5545298.jpg"
            document.getElementById('botao').innerHTML ="Exibir"
            document.getElementById('data').value =""
            document.getElementById('data').focus
            document.getElementById('data').disabled = false
        }
    }
