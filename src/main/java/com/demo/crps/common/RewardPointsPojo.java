package com.demo.crps.common;
import java.time.LocalDate;

public class RewardPointsPojo {
	private int customerId;
	private String fullName;
	private long txnAmount;
	private LocalDate txnDateTime;
	private String CusName;
	private long totRewards;

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public long getTxnAmount() {
		return txnAmount;
	}

	public void setTxnAmount(long txnAmount) {
		this.txnAmount = txnAmount;
	}

	public LocalDate getTxnDateTime() {
		return txnDateTime;
	}

	public void setTxnDateTime(LocalDate txnDateTime) {
		this.txnDateTime = txnDateTime;
	}

	public String getCusName() {
		return CusName;
	}

	public void setCusName(String cusName) {
		CusName = cusName;
	}

	public long getTotRewards() {
		return totRewards;
	}

	public void setTotRewards(long totRewards) {
		this.totRewards = totRewards;
	}

}
