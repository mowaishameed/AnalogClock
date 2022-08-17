


// Function for second needle
function ntime1(){
            
    let i = 1;
    function ntime(){
        setTimeout(() => {
            let a = 'rotate(' + i*6 + 'deg)';
            document.getElementById('sec-needle').style.transform = a;
            i++;
            if (i < 61){
                ntime();
            }
            else{
                ntime1();
            }
        }, 1000);

    }
    ntime();
}
    ntime1();



    // Function for minute needle
    function mtime1(){
        
        let i = 1;
        function mtime(){
            setTimeout(() => {
                let a = 'rotate(' + i + 'deg)';
                document.getElementById('min-needle').style.transform = a;
                i++;
                if (i < 361){
                    mtime();
                }
                else{
                    mtime1();
                }
            }, 10000);

        }
        mtime();
    }
    
    mtime1();





    // Function for hour needle
    function htime1(){
        
        let i = 1;
        function htime(){
            setTimeout(() => {
                let a = 'rotate(' + i + 'deg)';
                document.getElementById('hr-needle').style.transform = a;
                i++;
                if (i < 361){
                    htime();
                }
                else{
                    htime1();
                }
            }, 120000);

        }
        htime();
    }
    
    htime1();
