var move = 1;
var play = true;

$('td').click(function(){
    if( $(this).text() == "" && play ){
        if( move%2 == 1){
            $(this).append("X");
            $(this).css('color', '#a13b90');
        }
        else{
            $(this).append("O");
            $(this).css('color', '#3b84a1');
        }
        move++;
        if(kazananiBul() != -1 && kazananiBul() != ""){
            if(kazananiBul()=="X"){
                $('body').append('<div class="winner"><span>Kazanan</span>X</div>');
                $('body').append('<button onclick="location.reload()">Tekrar Oyna</button>');
                $('.winner').css('backgroundColor','#a13b90'); //istersen background-color istersen backgroundColor şeklinde yaz. !js büyük-küçük harf duyarlı css değil!
                $('button').css('color', '#a13b90');
            }
            else{
                $('body').append('<div class="winner"><span>Kazanan</span>O</div>');
                $('body').append('<button onclick="location.reload()">Tekrar Oyna</button>');
                $('.winner').css('background-color','#3b84a1');
                $('button').css('color', '#3b84a1');
            }
            play = false;
        }
    }
});

function kazananiBul(){
    sp1 = $('tr:nth-child(1) td:nth-child(1)').text();
    sp2 = $('tr:nth-child(1) td:nth-child(2)').text();
    sp3 = $('tr:nth-child(1) td:nth-child(3)').text();
    sp4 = $('tr:nth-child(2) td:nth-child(1)').text();
    sp5 = $('tr:nth-child(2) td:nth-child(2)').text();
    sp6 = $('tr:nth-child(2) td:nth-child(3)').text();
    sp7 = $('tr:nth-child(3) td:nth-child(1)').text();
    sp8 = $('tr:nth-child(3) td:nth-child(2)').text();
    sp9 = $('tr:nth-child(3) td:nth-child(3)').text();

    //satır kontrolü
    if((sp1 == sp2) && (sp2 == sp3)){
        return sp3;
    }
    else if((sp4 == sp5) && (sp5 == sp6)){
        return sp6;
    }
    else if((sp7 == sp8) && (sp8 == sp9)){
        return sp9;
    }

    //sütun kontrolü
    else if((sp1 == sp4) && (sp4 == sp7)){
        return sp7;
    }
    else if((sp2 == sp5) && (sp5 == sp8)){
        return sp8;
    }
    else if((sp3 == sp6) && (sp6 == sp9)){
        return sp9;
    }

    //çapraz konrol
    else if((sp1 == sp5) && (sp5 == sp9)){
        return sp9;
    }
    else if((sp3 == sp5) && (sp5 == sp7)){
        return sp7;
    }
    //kazanan yok
    return -1;
};