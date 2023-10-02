var paese_1 = [[],[],[]];
var i = 0;
var b = 0;
    for(let j=0;j<3;j++){
        console.log("Dimmi il nome del paese");
        paese_1[b][i] = prompt();
        b++;
        console.log("Dimmi il numero di abitanti nel 2022");
        paese_1[b][i] = prompt();
        b++;
        console.log("Dimmi il numero di abitanti nel 2023");
        paese_1[b][i] = prompt();
        b=0;
        i++;
    }
    //PAESE CON ABITANTI MAGGIORI
var maggiore = Math.max(paese_1[2][0],paese_1[2][1],paese_1[2][2]);
    //MAGGIORE INCREMENTO
var maggiore_2 = Math.max((paese_1[2][0]-paese_1[1][0]),(paese_1[2][1]-paese_1[1][1]),(paese_1[2][2]-paese_1[1][2]));
console.log(maggiore);
for(let i = 0;i<paese_1.length;i++){
    for(j=0;j<paese_1.length;j++){
        if(maggiore == paese_1[j][i]){
        console.log("Il paese con più abitanti è ", paese_1[0][j] );
        console.log("L'incremento maggiore di persone è stato di  ", maggiore_2, " persone" );
    }
    
    }
}
console.log(paese_1);