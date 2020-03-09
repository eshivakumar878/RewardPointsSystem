package com.demo.crps.common;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonAnySetter;

public class TotalRewardsPojo {

	 private List<RewardPointsPojo> totRewards = new ArrayList<>();

	    @JsonAnySetter
	    public void setClients(String cusName, List<RewardPointsPojo> rewardPointsPojo) {
	    	rewardPointsPojo.forEach(e -> {
	            e.setCusName(cusName);
	        });
	        this.totRewards.addAll(rewardPointsPojo);
	    }

		public List<RewardPointsPojo> getTotRewards() {
			return totRewards;
		}

		public void setTotRewards(List<RewardPointsPojo> totRewards) {
			this.totRewards = totRewards;
		}
	    
}
