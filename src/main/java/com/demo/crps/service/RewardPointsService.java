package com.demo.crps.service;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

@Service
public class RewardPointsService {

	JSONParser parser = new JSONParser();

	public JSONArray getRewardinfo() throws FileNotFoundException, IOException, ParseException {

		Object obj = parser.parse(new FileReader(ResourceUtils.getFile("classpath:CustRewardData.json")));
		JSONArray data = (JSONArray) obj;
		return data;

	}

	public JSONArray getTotalRewardsByCust() throws FileNotFoundException, IOException, ParseException {

		Object obj = parser.parse(new FileReader(ResourceUtils.getFile("classpath:TotalRewardsPointsBymonth.json")));
		JSONArray data = (JSONArray) obj;
		return data;

	}

	/*public JSONArray getTotalRewardsByCust() throws FileNotFoundException, IOException, ParseException {

		Object obj = parser.parse(new FileReader(ResourceUtils.getFile("classpath:CustRewardData.json")));
		JSONArray data = (JSONArray) obj;

		ObjectMapper mapper = new ObjectMapper();
		TotalRewardsPojo totalRewardsPojo = mapper.readValue(
				new FileReader(ResourceUtils.getFile("classpath:CustRewardData.json")), TotalRewardsPojo.class);
		System.out.println(totalRewardsPojo.toString());

		return null;
	}
	 * public HashMap<Integer, String> calPointsBymonth(RewardPointsPojo
	 * rewardPointsPojo) { HashMap<Integer, String> hm = new HashMap<Integer,
	 * String>();
	 * 
	 * for (RewardPointsPojo clientDataSer : array) {
	 * 
	 * Integer totalRewrds = (int)
	 * computeRewardPoints(array.get(index).getTxnAmount()); Integer monthRe =
	 * rewardPointsPojo.getTxnDateTime().getMonthValue(); Calendar cal =
	 * Calendar.getInstance(); String monthName = new
	 * SimpleDateFormat("MMM").format(rewardPointsPojo.getTxnDateTime().
	 * getMonthValue()); System.out.println(new
	 * SimpleDateFormat("MMM").format(rewardPointsPojo.getTxnDateTime().
	 * getMonthValue())); hm.put(totalRewrds, monthName); }
	 * 
	 * return hm; }
	 * 
	 * public long computeRewardPoints(Long amt) { long twoPointsCul = 0,
	 * onePointCal = 0, totPoints = 0; if (amt > 100) { twoPointsCul = (amt - 100) *
	 * 2; }
	 * 
	 * if (amt < 100 && amt > 50) { onePointCal = 50; }
	 * 
	 * if (twoPointsCul > 0 || onePointCal > 0) totPoints = twoPointsCul +
	 * onePointCal;
	 * 
	 * return totPoints; }
	 */

}
