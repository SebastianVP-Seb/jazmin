
function cambiar (unDiv) {
    unDiv.addEventListener('click',()=>{
        if(unDiv.classList.contains('bg2')) {
            unDiv.classList.remove('bg2')
            unDiv.classList.add('bg1')
        } else {
            unDiv.classList.remove('bg1')
            unDiv.classList.add('bg2')
        };
    });
};

const div1 = document.getElementById('div1')
cambiar(div1);

const div2 = document.getElementById('div2')
cambiar(div2);

const div3=document.getElementById('div3');
cambiar(div3);

const div4 = document.getElementById('div4')
cambiar(div4);

const div5 = document.getElementById('div5')
cambiar(div5);

const div6=document.getElementById('div6');
cambiar(div6);

const div7 = document.getElementById('div7')
cambiar(div7);

const div8 = document.getElementById('div8')
cambiar(div8);

const div9=document.getElementById('div9');
cambiar(div9);

const div10 = document.getElementById('div10')
cambiar(div10);

const div11 = document.getElementById('div11')
cambiar(div11);

const div12=document.getElementById('div12');
cambiar(div12);
