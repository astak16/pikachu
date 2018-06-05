let code =`
/*
* 今天我来画一个皮卡丘
* 首先画皮卡丘的皮
*/
.wrapper{  
    width:100%;  
    height:165px; 
    position:relative;
}

/* 画鼻子*/
.nose{
    border: 12px solid;
    border-radius: 11px;
    border-color:black transparent transparent;
    position: absolute;
    left:50%;
    top:28px;
    margin-left: -12px;
}

/*画眼睛*/
.eye{  
    width:49px;  
    height:49px;  
    background:#2e2e2e;  
    position:absolute;  
    border-radius:50%;  
    border:2px solid #000000;  
}

/*白色的眼珠*/
.eye:before{  
    content:'';  
    display: block;  
    width:24px;  
    height:24px;  
    background: white;  
    position:absolute;  
    border-radius:50px;  
    left:6px;  
    top:-1px;  
    border:2px solid #000;  
}

/* 右眼睛在右 */
.eye.right{  
    left: 50%;  
    margin-left:90px;  
}

/* 左眼睛在左 */
.eye.left{  
    right:50%;  
    margin-right:90px;  
}

/* 接下来画脸蛋 */
.face{
    width:68px;
    height:68px;
    background:#fc0d1c;
    border-radius:50%;
    position: absolute;
    top:85px;
}
.face.left{
    right: 50%;
    margin-right:116px;
}
.face.right{
    left:50%;
    margin-left:116px
}

/* 上嘴唇 */
.upperLip{
    height:25px;
    width:80px;
    border:2px solid black;
    position:absolute;
    top:50px;
    background: #fde348;
}
.upperLip.left{
    right:50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right:none;
    transform:rotate(-20deg);
}
.upperLip.right{
    left:50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left:none;
    transform:rotate(20deg);
}

/* 下嘴唇 */
.lowerLip-wrapper{
    bottom:0;
    position: absolute;
    left: 50%;
    margin-left:-150px;
    height:110px;
    overflow: hidden;
    width:300px;
}


.lowerLip{
    height:3500px;
    width:300px;
    background: #990513;
    border-radius: 200px/2000px;
    border:2px solid black;
    position: absolute;
    bottom:0;
    overflow: hidden;
}

/* 最后来一个可爱的舌头 */
.lowerLip::after{
    content: '';
    position: absolute;
    bottom:-20px;
    width:100px;
    height:100px;
    background:#fc4a62;
    left:50%;
    margin-left:-50px;
    border-radius: 50px;
}

/* 好啦，皮卡丘画完了 */`

!function(){
    function drawPikachu(preCode,code,fn){
        let domCode = document.querySelector('#code')
        let n = 0
        let id = setTimeout(function run(){

            domCode.innerHTML = preCode + code.substring(0,n)
            styleTag.innerHTML = preCode + code.substring(0,n)
            domCode.scrollTop = domCode.scrollHeight
            n += 1
            if(n < code.length){
                setTimeout(run,10)
                // fn.call()
            }else{
                document.getElementById('music').play()
            }
        },10)
    }
    drawPikachu('',code)

}.call()