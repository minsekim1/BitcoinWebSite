	var x=10;
	var step=10;
	var st;
	var autoBt;
	var txt;
	var cat;

	function init(){
		autoBt=document.getElementById("autoBt");
		txt=document.getElementById("txt");
		cat=document.getElementById("cat");
	}

	function manual(){
		x+=step;
		step=(x>300||x<=10)? -step:step;
		cat.style.left= x+"px";
		txt.value=x;
	}

	function moveAuto(){
		st=setInterval("manual()",50);
		autoBt.disabled=true;
	}

	function autoStop(){
		clearTimeout(st);
		autoBt.disabled=false;
	}