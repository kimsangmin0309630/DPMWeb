package com.minervasoft.backend.vo;

public class DailyStatsVO extends AbstractVO {
	
    private String startBasDt = null;		/*조회기준시작일자*/

    private String endBasDt = null;			/*조회기준종료일자*/
	
    private String basDt = null;			/*기준일자*/

    private Integer allCn = null;			/*전체건수*/
    
    private Integer acmPrcCn = null;		/*누적처리건수*/
    
    private Integer acmMaskCn = null;    	/*누적마스킹건수*/
    
    private String accPrcRatio = null;		/*전체누적처리진행율*/
    
    private Integer acmPrcDds = null;		/*누적일수*/
    
    private Integer xpcPrcCn = null;		/*예상처리건수*/
    
    private String xpcPrcRatio = null;    	/*예상진척률*/

    private Integer prcCn = null;			/*처리건수*/    
    
    private Integer maskCn = null;			/*마스킹건수*/
     
    private String prcRatio = null;			/*실진척률*/
    
    private String xpcRealPrcRatio = null; 	/*예측대비실진척율*/
    
	private String gridLabels = null;
	
	private String gridNames = null;
	
	private String gridWidths = null;
	
	private String gridAligns = null;
	
    private String excelDownYn = null;
    
    private Integer verCn = null;

    private Integer acmVerCn = null;
    
    private String verRatio = null;
    
    private Integer fnrCn = null;
    
    private Integer acmFnrCn = null;

    private String fnrRatio = null;
    
    private Integer fprCn = null;
    
    public Integer getAcmVerCn() {
		return acmVerCn;
	}

	public void setAcmVerCn(Integer acmVerCn) {
		this.acmVerCn = acmVerCn;
	}

	public Integer getAcmFnrCn() {
		return acmFnrCn;
	}

	public void setAcmFnrCn(Integer acmFnrCn) {
		this.acmFnrCn = acmFnrCn;
	}

	public Integer getAcmFprCn() {
		return acmFprCn;
	}

	public void setAcmFprCn(Integer acmFprCn) {
		this.acmFprCn = acmFprCn;
	}

	private Integer acmFprCn = null;

    private String fprRatio = null;
    
	public Integer getVerCn() {
		return verCn;
	}

	public void setVerCn(Integer verCn) {
		this.verCn = verCn;
	}

	public String getVerRatio() {
		return verRatio;
	}

	public void setVerRatio(String verRatio) {
		this.verRatio = verRatio;
	}

	public Integer getFnrCn() {
		return fnrCn;
	}

	public void setFnrCn(Integer fnrCn) {
		this.fnrCn = fnrCn;
	}

	public String getFnrRatio() {
		return fnrRatio;
	}

	public void setFnrRatio(String fnrRatio) {
		this.fnrRatio = fnrRatio;
	}

	public Integer getFprCn() {
		return fprCn;
	}

	public void setFprCn(Integer fprCn) {
		this.fprCn = fprCn;
	}

	public String getFprRatio() {
		return fprRatio;
	}

	public void setFprRatio(String fprRatio) {
		this.fprRatio = fprRatio;
	}

	public String getStartBasDt() {
		return startBasDt;
	}

	public void setStartBasDt(String startBasDt) {
		this.startBasDt = startBasDt;
	}

	public String getEndBasDt() {
		return endBasDt;
	}

	public void setEndBasDt(String endBasDt) {
		this.endBasDt = endBasDt;
	}

	public String getBasDt() {
		return basDt;
	}

	public void setBasDt(String basDt) {
		this.basDt = basDt;
	}

	public Integer getAllCn() {
		return allCn;
	}

	public void setAllCn(Integer allCn) {
		this.allCn = allCn;
	}

	public Integer getAcmPrcCn() {
		return acmPrcCn;
	}

	public void setAcmPrcCn(Integer acmPrcCn) {
		this.acmPrcCn = acmPrcCn;
	}

	public Integer getAcmMaskCn() {
		return acmMaskCn;
	}

	public void setAcmMaskCn(Integer acmMaskCn) {
		this.acmMaskCn = acmMaskCn;
	}

	public String getAccPrcRatio() {
		return accPrcRatio;
	}

	public void setAccPrcRatio(String accPrcRatio) {
		this.accPrcRatio = accPrcRatio;
	}

	public Integer getAcmPrcDds() {
		return acmPrcDds;
	}

	public void setAcmPrcDds(Integer acmPrcDds) {
		this.acmPrcDds = acmPrcDds;
	}

	public Integer getXpcPrcCn() {
		return xpcPrcCn;
	}

	public void setXpcPrcCn(Integer xpcPrcCn) {
		this.xpcPrcCn = xpcPrcCn;
	}

	public String getXpcPrcRatio() {
		return xpcPrcRatio;
	}

	public void setXpcPrcRatio(String xpcPrcRatio) {
		this.xpcPrcRatio = xpcPrcRatio;
	}

	public Integer getPrcCn() {
		return prcCn;
	}

	public void setPrcCn(Integer prcCn) {
		this.prcCn = prcCn;
	}

	public Integer getMaskCn() {
		return maskCn;
	}

	public void setMaskCn(Integer maskCn) {
		this.maskCn = maskCn;
	}

	public String getPrcRatio() {
		return prcRatio;
	}

	public void setPrcRatio(String prcRatio) {
		this.prcRatio = prcRatio;
	}

	public String getXpcRealPrcRatio() {
		return xpcRealPrcRatio;
	}

	public void setXpcRealPrcRatio(String xpcRealPrcRatio) {
		this.xpcRealPrcRatio = xpcRealPrcRatio;
	}

	public String getGridLabels() {
		return gridLabels;
	}

	public void setGridLabels(String gridLabels) {
		this.gridLabels = gridLabels;
	}

	public String getGridNames() {
		return gridNames;
	}

	public void setGridNames(String gridNames) {
		this.gridNames = gridNames;
	}

	public String getGridWidths() {
		return gridWidths;
	}

	public void setGridWidths(String gridWidths) {
		this.gridWidths = gridWidths;
	}

	public String getGridAligns() {
		return gridAligns;
	}

	public void setGridAligns(String gridAligns) {
		this.gridAligns = gridAligns;
	}

	public String getExcelDownYn() {
		return excelDownYn;
	}

	public void setExcelDownYn(String excelDownYn) {
		this.excelDownYn = excelDownYn;
	}
	
	
}
