var licount=$("#banner_imgs li").length;

var liwidth=parseFloat($("#banner_imgs li").css("width"));

$("#banner_imgs").css("width",licount*liwidth);
var ulWidth=parseFloat(($("#banner_imgs").css("width")));
var boxWidth=parseFloat(($("#banner_box").css("width")));
var imgLeft=parseFloat($("#banner_imgs").css("left"));
$(()=>{

    function move(){
        timer=setTimeout(()=>{
            $("#banner_imgs").animate({
                    left:boxWidth-ulWidth
                }, 5000,
                ()=>{

                if(imgLeft=boxWidth-ulWidth){
                    $("#banner_imgs").animate({
                        left:0
                    }, 5000)
                }

                //if(canMove)
                ////在移动后，再次回调move启动下次
                //    move();
            })
        },1000);
}
    move()

    $("#banner_box").hover(
        ()=>{
            //this->div
            //停止一次性定时器
            clearTimeout(timer);
            canMove=false;
        },
        ()=>{
            canMove=true;
            move();
        }
    );


    //标记变量，用来标记是否启用下次move
    //var canMove=true;
    ////为id为slider的div添加鼠标进入和移除事件
    //$("#slider").hover(
    //    ()=>{
    //        //this->div
    //        //停止一次性定时器
    //        clearTimeout(timer);
    //        canMove=false;
    //    },
    //    ()=>{
    //        canMove=true;
    //        move();
    //    }
    //);








})
