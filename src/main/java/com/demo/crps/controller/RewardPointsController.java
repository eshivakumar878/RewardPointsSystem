package com.demo.crps.controller;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.json.simple.JSONArray;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.crps.service.RewardPointsService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class RewardPointsController {

	@Autowired
	RewardPointsService rewardPointsService;

	@GetMapping("/getRewardinfo")
	public JSONArray getRewardinfo() throws FileNotFoundException, IOException, ParseException {
		return rewardPointsService.getRewardinfo();

	}
	
	@GetMapping("/getTotalRewardsByCust")
	public JSONArray getTotalRewardsByCust() throws FileNotFoundException, IOException, ParseException {
		return rewardPointsService.getTotalRewardsByCust();

	}

}
