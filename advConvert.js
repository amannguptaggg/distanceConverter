(function(){
    let converType = 'miles';
    let heading = document.getElementById('heading');
    let intro = document.getElementById('intro');
    let form = document.getElementById('convert');
    let convt = document.getElementById('convt');

    document.addEventListener('keydown',function(e){
        let key = e.code;
        
        if (key === 'KeyK') {
            converType = 'KM';
            heading.innerHTML = 'Kilometers to Miles Converter';
            intro.innerHTML = 'Type in a number of Miles and click the button to convert the distance to KM.';
            convt.innerHTML = 'KM';
        } else if(key === 'KeyM'){
            converType = 'Miles';
            heading.innerHTML = 'Miles to KM Converter';
            intro.innerHTML = 'Type in a number of KM and click the button to convert the distance to Miles.';
            convt.innerHTML = 'ML';
        }
    });


    form.addEventListener('submit',function(e){
        e.preventDefault();
        let distance = parseFloat(document.getElementById('distance').value);
        let ans = document.getElementById('answer');
        if (distance) {
            if (converType == 'KM') {
                let conversion = (distance * 1.60934).toFixed(2);
            ans.innerHTML=`<h2>${distance} miles converts to ${conversion} KM</h2>`;
            } else if (converType == 'Miles') {
                let conversion = (distance * 0.621371).toFixed(2);
            ans.innerHTML=`<h2>${distance} KM converts to ${conversion} Miles</h2>`;
            }
            
        } else{
            ans.innerHTML='<h2>Invalid input. Enter a number value</h2>';
        }
    });

}());