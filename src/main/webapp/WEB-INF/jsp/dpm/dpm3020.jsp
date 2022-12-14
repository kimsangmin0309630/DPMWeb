<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%
  /**
  * @File Name : dpm3020.jsp
  * @Description : 담당자관리
  * @Modification Information
  * 
  *   수정일             수정자                   수정내용
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
%>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>지문정보 마스킹처리 공정관리 시스템</title>
    
</head>
<body>
    <!-- content페이지 start-->
    <div class="info-container">
        <div class="data-container">
            <div class="subtitle2-container">
                <img src="../images/icon-arrow-point.png" alt="이력조회" > <span class="subtitle2">담당자 관리</span>
            </div>

            <form id="frm3020" role="form"  method="post">
                <div class="search-box">
                    <div class="guide-text float-left">ID(사번)</div>
                    <input id="searchChrrId" name="chrrId" type="text" class="form-control float-left" style="width:125px; margin-right: 5px;" placeholder="">
                    <div class="guide-text float-left">성명</div>
                    <input id="searchChrrNm" name="chrrNm" type="text" class="form-control float-left" style="width:125px; margin-right: 5px;" placeholder="">
                    <div class="guide-text float-left">부서명</div>
                    <input id="searchSelDeptNm" name="deptnm" type="text" class="form-control float-left" style="width:125px; margin-right: 5px;" placeholder="">
                    <div class="guide-text float-left">사용여부</div>
                    <select id="searchSelUYn" name="uyn" class="form-control float-left" style="width:100px; margin-right: 5px;">
                        <option value="9">전체</option>
                        <option value="Y">사용</option>
                        <option value="N">미사용</option>
                    </select>              
    
                    <button id="btnSearch" type="button" class="btn btn-secondary btn-bg" style="width:100px;">
                    <i class="fas fa-search"></i>&nbsp;&nbsp; 조회</button>
                </div>
            </form>

                    
            <div class="subtitle2-container clearfix">
                <div class="float-right" style="margin-top:5px">총 <span id="spnTotCnt">0</span>개</div>
            </div>
             
            <!-- grid start-->
            <div id="gridContainer">
                <table id="jqGrid"></table>
            </div>

            <br style="line-height:10px;"/>
            <div style="float:right;">
                <button id="btnChrrInit" type="button" class="btn btn-secondary btn-white" style="width:100px;">초기화</button>
                <button id="btnChrrSave" type="button" class="btn btn-secondary btn-white" style="width:100px;">저장</button>
                <button id="btnChrrDel" type="button" class="btn btn-secondary btn-white" style="width:100px;">삭제</button>
            </div>
                
            <br style="line-height:22px;"/><br style="line-height:22px;"/>
            <div class="button-tab">
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="TAB01" role="tabpanel" aria-labelledby="TAB01">
                        <div class="form-list-container">
                          <table class="table table-bordered">
                            <thead>
                              <tr>
                                <th width="">ID</th>
                                <th width="">성명</th>
                                <th width="">부서명</th>
                                <th width="">사용여부</th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="text-center"><input id="txtChrrId"  type="text" class="form-control float-left" maxlength="9"></td>
                                <td class="text-center"><input id="txtChrrNm"  type="text" class="form-control float-left" maxlength="100"></td>
                                <td class="text-center"><input id="txtChrrDeptNm"  type="text" class="form-control float-left" maxlength="30"></td>                                    
                                <td class="text-center">
	                                <select id="selChrrUYn" class="form-control float-left">
	                                    <option value="Y">사용</option>
	                                    <option value="N">미사용</option>                                
	                                </select>                                
                                </td>
                               </tr>
                               </tbody>
                          </table>
                          
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- content페이지 end-->
            
    <script type="text/javascript" src="/js/dpm/dpm3020.js"></script>
</body>
</html>