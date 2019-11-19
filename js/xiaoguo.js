var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var contentWidth=520;
var titleWidth=60;
for(var i=0;i<title.length;i++){
	title[i].index=i;
	title[i].onclick=function(){
		for(var i=0;i<ctbox.length;i++){
			if(i<=this.index){
				ctbox[i].style.left=i*titleWidth+'px';
			}else{
				ctbox[i].style.left=i*titleWidth+contentWidth+'px';
			}
		}
	}
}