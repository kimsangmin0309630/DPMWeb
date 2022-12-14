
/**
  * @File Name : dpm3050.js
  * @Description : 메뉴관리
  * @Modification Information
  * 
  *   수정일       수정자                   수정내용
  *  -------    --------    ---------------------------
  *  2019.04.01             최초 생성
  *
  *  
  *  ------------------------------------------------
  *  jqGrid 4.7.0  jQuery Grid
  *  Copyright (c) 2008, Tony Tomov, tony@trirand.com
  *  Dual licensed under the MIT and GPL licenses
  *  http://www.opensource.org/licenses/mit-license.php
  *  http://www.gnu.org/licenses/gpl-2.0.html
  *  Date: 2014-12-08  
  *  ------------------------------------------------
 */

var modDpm3050 = (function(){	
	
	/**
	 * 초기화
	 */	
	function init() {		
		//상위메뉴 그리드 초기화 시작
		$("#jqGrid").jqGrid({
	    	//jqGrid url 전송선언
	        url: '/dpm/selListMenu.do',
	        mtype: "POST",
	        //styleUI: "Bootstrap",	        
	        datatype: "local",
	        postData: {},
	        
	        //jqGrid 양식선언부        
	        colModel: [
	            { label: '메뉴ID', name: 'menuSqno', width: 150, align: 'center' },
	            { label: '메뉴명', name: 'mnnm', width: 180, align: 'left' }
	        ],
	        height: 500,
	        autowidth:true, 
	        shrinkToFit:false,
	        forceFit:true,
	        rowNum: -1,
	        rownumbers: true,
	        viewrecords: true,
	        loadtext: "<img src='/images/loadinfo.net.gif' />",
	        emptyrecords:"조회된 데이터가 없습니다.",	        
	        
	        //jqGrid 추가옵션영역

	        //jsonReader 영역
	        jsonReader : {
	        	repeatitems: false,
	        	root: function(data) {
	        		if(data.rsYn == "N" && !modComm.isEmpty(data.rsMsg)) alert(data.rsMsg);
	        		return data.selList;
	        	}
	        },
	        //로드완료 시 (조회 시 reloadGrid 후에도 호출)  
	        loadComplete: function() {
	        	//console.log("그리드 load complete");
	        	if($("#jqGrid").getGridParam("reccount") > 0) {
	        		$("#jqGrid").jqGrid("setSelection", 1);
	        		selListDetail(1);
	        	} else {
	        		selListDetail(-1);
	        	}
	        },
	        //셀클릭 이벤트
	        onCellSelect: function(rowid, iCol, data, event){
	        	if(rowid > 0 && iCol >= 0) {
		        	selListDetail(rowid);
	        	} 
	        }
		});
		
		//하위메뉴 그리드 초기화 시작		
		$("#jqGridDetail").jqGrid({
	    	//jqGrid url 전송선언
	        url: '/dpm/selListMenuForManagement.do',
	        mtype: "POST",
	        //styleUI: "Bootstrap",	        
	        datatype: "local",
	        postData: {},
	        
	        //jqGrid 양식선언부        
	        colModel: [
	            { label: '메뉴ID', name: 'upMenuSqno', width: 150, align: 'center' },
	            { label: '메뉴명', name: 'upMnnm', width: 180, align: 'left' },
	            { label: '화면ID', name: 'menuSqno', width: 150, align: 'center' },
	            { label: '화면명', name: 'mnnm', width: 180, align: 'left' },
	            { label: '표시순서', name: 'menuMrkSq', width: 80, align: 'right' },
	            { label: '등록자', name: 'rgEnnm', width: 100, align: 'center' },
	            { label: '등록자ID', name: 'rgEno', width: 0, align: 'center', hidden:true },
	            { label: '등록일시', name: 'rgDtm', width: 130, align: 'center', formatter:currencyFmatterDateTime},
	            { label: '수정자', name: 'chgEnnm', width: 100, align: 'center' },
	            { label: '수정자ID', name: 'chgEno', width: 0, align: 'center', hidden:true },
	            { label: '수정일시', name: 'chgDtm', width: 130, align: 'center', formatter:currencyFmatterDateTime}
	        ],
	        height: 350,
	        autowidth:true,
	        rowNum: -1,
	        rownumbers: true,
	        viewrecords: true,
	        loadtext: "<img src='/images/loadinfo.net.gif' />",
	        emptyrecords:"조회된 데이터가 없습니다.",	        
	        
	        //jqGrid 추가옵션영역	        	        

	        //jsonReader 영역
	        jsonReader : {
	        	repeatitems: false,
	        	root: function(data) {
	        		if(data.rsYn == "N" && !modComm.isEmpty(data.rsMsg)) alert(data.rsMsg);
	        		return data.selList;
	        	}
	        },
	        //로드완료 시 (조회 시 reloadGrid 후에도 호출)  
	        loadComplete: function() {
	        	//console.log("그리드 load complete");
	        	if($("#jqGridDetail").getGridParam("reccount") > 0) {
	        		$("#jqGridDetail").jqGrid("setSelection", 1);
	        		setDetailInfo(1);
	        	} else {
	            	setDetailInfo(-1);
	        	}
	        },
	        //셀클릭 이벤트
	        onCellSelect: function(rowid, iCol, data, event){
	        	if(rowid > 0 && iCol >= 0) {
	        		setDetailInfo(rowid);
	        	} 
	        }
		});		
		//그리드 초기화 종료

		//그리드 resize 
		//modComm.resizeJqGridWidth("jqGrid","gridContainer",$("#gridContainer").width(), true);
		modComm.resizeJqGridWidth("jqGridDetail","gridContainerDetail",$("#gridContainerDetail").width(), true);		
		
		selList();
	};
	
    /**
	 * 그리드항목 포맷정의 일시
	 */    
    function currencyFmatterDateTime(celval, opts , el) {
    	return modComm.getGridDateFormat(celval,"date_time");
    };	
		
    /**
	 * 마스터 조회
	 */  
	function selList() {
    	var objParam = {"upMenuSqno" : "0"};
    	$("#jqGridDetail").jqGrid('clearGridData');
    	
    	$("#jqGrid").setGridParam({datatype : 'json', postData : objParam});
    	$("#jqGrid").trigger('reloadGrid');
	};
	
    /**
	 * 상세 조회
	 */	
	function selListDetail(rowid) {
    	var objParam = {"upMenuSqno":$("#jqGrid").jqGrid('getRowData',rowid).menuSqno};
    	
    	$("#jqGridDetail").setGridParam({datatype : 'json', postData : objParam});
    	$("#jqGridDetail").trigger('reloadGrid');		
	};
	
	
    /**
	 * 선택한 상세정보 set
	 */			
	function setDetailInfo(rowid) {
		var readonly;
		if(rowid == -1) {
			readonly = false;
			
			var codeSelRowId = $("#jqGrid").jqGrid('getGridParam', 'selrow');
			if(codeSelRowId > 0) {
				$("#txtUpMenuSqno").val($("#jqGrid").jqGrid('getRowData',codeSelRowId).menuSqno);
			} else {
				$("#txtUpMenuSqno").val("");
			}
			$("#txtMenuSqno").val("");
			$("#txtMenuNm").val("");
			$("#txtMenuMrkSq").val("");
			$("#txtMenuSqno").focus();
		} else {
			readonly = true;
			
			$("#txtUpMenuSqno").val($("#jqGridDetail").jqGrid('getRowData',rowid).upMenuSqno);
			$("#txtMenuSqno").val($("#jqGridDetail").jqGrid('getRowData',rowid).menuSqno);
			$("#txtMenuNm").val($("#jqGridDetail").jqGrid('getRowData',rowid).mnnm);
			$("#txtMenuMrkSq").val($("#jqGridDetail").jqGrid('getRowData',rowid).menuMrkSq);			
		}
		$("#txtUpMenuSqno").attr("readonly", readonly);
		$("#txtMenuSqno").attr("readonly", readonly);		
	};	
		
	
	return {
		init: init,
		selList: selList,
		selListDetail: selListDetail,
		setDetailInfo: setDetailInfo
	};

})();

/**
 * 하위메뉴 초기화버튼 클릭
 */
$("#btnMenuInit").on("click", function() {
	modDpm3050.setDetailInfo(-1);
});

/**
 * 하위메뉴 저장버튼 클릭
 */
$("#btnMenuSave").on("click", function() {
	var upMenuSqno = $("#txtUpMenuSqno").val();	
	var menuSqno = $("#txtMenuSqno").val();
	var mnnm = $("#txtMenuNm").val();
	var menuMrkSq = $("#txtMenuMrkSq").val();
	
	if(modComm.isEmpty(upMenuSqno)) {
		alert("메뉴ID 입력이 누락 되었습니다.");
		$("#txtUpMenuSqno").focus();
		return;
	}
	
	if(modComm.isEmpty(menuSqno)) {
		alert("화면ID 입력이 누락 되었습니다.");
		$("#txtMenuSqno").focus();
		return;
	}
	
	if(modComm.isEmpty(mnnm)) {
		alert("화면명 입력이 누락 되었습니다.");
		$("#txtMenuNm").focus();
		return;
	}
	
	if(modComm.isEmpty(menuMrkSq)) {
		alert("표시순서 입력이 누락 되었습니다.");
		$("#txtMenuMrkSq").focus();
		return;
	}	
	
	var objParam = {
			"upMenuSqno": upMenuSqno,
			"menuSqno": menuSqno,
			"mnnm": mnnm,
			"menuMrkSq": menuMrkSq,
			"chgEno": $("#txtLoginchrrId").val(),
			"rgEno": $("#txtLoginchrrId").val()
	};
	
	//console.log(objParam);

	modAjax.request("/dpm/saveMenu.do", objParam,  {
		//async: false,
		success: function(cnt) {
			alert("메뉴 저장이 완료되었습니다.");	
			modDpm3050.selListDetail($("#jqGrid").jqGrid('getGridParam', 'selrow'));						
		},
        error: function(cnt) {
            console.log(cnt);
        }
	});	
});



/**
 * 하위메뉴 삭제버튼 클릭
 */
$("#btnMenuDel").on("click", function() {
	var upMenuSqno = $("#txtUpMenuSqno").val();	
	var menuSqno = $("#txtMenuSqno").val();
	
	if(modComm.isEmpty(upMenuSqno)) {
		alert("메뉴ID를 선택해주세요.");
		$("#txtUpMenuSqno").focus();
		return;
	}
	
	if(modComm.isEmpty(menuSqno)) {
		alert("화면ID를 선택해주세요.");
		$("#txtMenuSqno").focus();
		return;
	}
	
	if (!confirm("해당 메뉴를 삭제 하시겠습니까?")) {
		return;
	}
	
	
	var objParam = {
			"upMenuSqno": upMenuSqno,
			"menuSqno": menuSqno
	};
	
	//console.log(objParam);

	modAjax.request("/dpm/deleteMenu.do", objParam,  {
		//async: false,
		success: function(cnt) {
			alert("메뉴 삭제가 완료되었습니다.");	
			modDpm3050.selListDetail($("#jqGrid").jqGrid('getGridParam', 'selrow'));						
		},
        error: function(cnt) {
            console.log(cnt);
        }
	});	
});


/**
 * input text의 numberOnly 속성처리
 */
$("input:text[numberOnly]").on("keyup", function() {
	$(this).val($(this).val().replace(/[^0-9]/g,""));
});

/**
 * DOM  load 완료 시 실행
 */
$(document).ready(function() {
	modDpm3050.init();
	
});